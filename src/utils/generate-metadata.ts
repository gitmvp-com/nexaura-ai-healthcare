import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Nexaura AI Healthcare - AI-Powered Health Management",
    description:
      "Track symptoms, manage medications, monitor mental wellness, and get AI-powered health insights with Nexaura AI Healthcare platform.",
    keywords: [
      "AI healthcare",
      "symptom tracking",
      "medication management",
      "mental wellness",
      "health diagnostics",
      "telemedicine",
    ],
    authors: [{ name: "Nexaura" }],
    openGraph: {
      title: "Nexaura AI Healthcare",
      description: "AI-Powered Health Management Platform",
      type: "website",
    },
  };
}
