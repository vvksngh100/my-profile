import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, botcheck } = body;

    // Spam honeypot trap: bots fill hidden inputs
    if (botcheck) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully!",
      });
    }

    // Validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields (Name, Email, Message).",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      return NextResponse.json(
        {
          success: false,
          message:
            "WEB3FORMS_ACCESS_KEY is not configured yet. Please add your Web3Forms access key to your environment variables.",
        },
        { status: 500 }
      );
    }

    const web3formsResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: name.trim(),
        email: email.trim(),
        subject:
          subject?.trim() ||
          `Portfolio Inquiry from ${name.trim()}`,
        message: message.trim(),
        from_name: `${name.trim()} (Portfolio)`,
      }),
    });

    const data = await web3formsResponse.json();

    if (data.success) {
      return NextResponse.json({
        success: true,
        message: "Your message has been delivered to Vivek's inbox! Thank you for reaching out.",
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          message:
            data.message ||
            "Unable to deliver message at this time. Please try again or email directly.",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error handling contact message:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "An unexpected server error occurred. Please try again later or reach out via email.",
      },
      { status: 500 }
    );
  }
}
