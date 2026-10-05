import React from "react";
import { PERSONAL_INFO, SKILL_CATEGORIES } from "@/data/portfolio";

export default function StructuredData() {
  const allSkills = SKILL_CATEGORIES.flatMap((c) => c.skills.map((s) => s.name));

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://viveksingh.dev/#person",
    name: PERSONAL_INFO.name,
    jobTitle: PERSONAL_INFO.title,
    description: PERSONAL_INFO.bio,
    url: "https://viveksingh.dev",
    image: "https://viveksingh.dev/avatar.png",
    email: PERSONAL_INFO.email,
    telephone: PERSONAL_INFO.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kalyan, Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: [
      PERSONAL_INFO.linkedin,
      PERSONAL_INFO.github,
      PERSONAL_INFO.leetcode,
    ],
    knowsAbout: allSkills,
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Govind Singh Smarak Degree College",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Government Polytechnic, Jaunpur",
      },
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "Sublime Technocorp Pvt Ltd",
      },
      {
        "@type": "Organization",
        name: "Sankey Business Solutions Pvt Ltd",
      },
    ],
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://viveksingh.dev/#profilepage",
    url: "https://viveksingh.dev",
    name: `${PERSONAL_INFO.name} - Portfolio & Resume`,
    description: `Official engineering portfolio of ${PERSONAL_INFO.name}, Frontend Developer with 3+ years experience in React, Next.js, Node.js, and Local AI/RAG systems.`,
    mainEntity: {
      "@id": "https://viveksingh.dev/#person",
    },
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://viveksingh.dev/#website",
    url: "https://viveksingh.dev",
    name: `${PERSONAL_INFO.name} Portfolio`,
    publisher: {
      "@id": "https://viveksingh.dev/#person",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}
