import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import { PERSONAL_INFO } from "@/data/portfolio";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://viveksingh.dev"),
  title: {
    default: `${PERSONAL_INFO.name} | Frontend Developer & Full-Stack AI Engineer`,
    template: `%s | ${PERSONAL_INFO.name}`,
  },
  description:
    "Official portfolio of Vivek Singh, a Frontend Developer with 3+ years of experience specializing in React.js, Next.js, TypeScript, Node.js, and Local AI / RAG architectures. Based in Mumbai, India.",
  keywords: [
    "Vivek Singh",
    "Frontend Developer Mumbai",
    "React.js Developer",
    "Next.js Portfolio",
    "Full Stack Developer",
    "Local AI Engineer",
    "RAG Systems",
    "TypeScript Developer",
    "Tailwind CSS",
    "Node.js Backend",
    "Sublime Technocorp",
    "Sankey Business Solutions",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: PERSONAL_INFO.name, url: "https://viveksingh.dev" }],
  creator: PERSONAL_INFO.name,
  publisher: PERSONAL_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://viveksingh.dev",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://viveksingh.dev",
    siteName: `${PERSONAL_INFO.name} Portfolio`,
    title: `${PERSONAL_INFO.name} | Frontend Developer & Full-Stack AI Engineer`,
    description:
      "Frontend Developer with 3+ years experience building enterprise React applications, local AI / RAG platforms, and high-performance databases.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${PERSONAL_INFO.name} - Engineering Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | Frontend Developer & Full-Stack AI Engineer`,
    description:
      "Frontend Developer with 3+ years experience building enterprise React applications, local AI / RAG platforms, and high-performance databases.",
    images: ["/og-image.png"],
    creator: "@viveksingh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                var theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.remove('dark', 'light');
                document.documentElement.classList.add(theme);
              } catch(e) {}
            })();`,
          }}
        />
        <StructuredData />
      </head>
      <body className="min-h-screen selection:bg-indigo-600/30 selection:text-indigo-300 antialiased font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
