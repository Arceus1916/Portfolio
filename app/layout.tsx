import type { Metadata } from "next";
import {
  Libre_Bodoni,
  EB_Garamond,
  Crimson_Text,
  IBM_Plex_Mono,
  Special_Elite,
} from "next/font/google";
import "./globals.css";

const libreBodoni = Libre_Bodoni({
  variable: "--font-libre-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson-text",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const specialElite = Special_Elite({
  variable: "--font-special-elite",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Programmer's Gazette — Amey Rasekar | Victorian Developer Portfolio",
  description:
    "An interactive Victorian-era newspaper portfolio for Amey Rasekar, Special Correspondent & Full-Stack Systems Engineer from Pune, India.",
  keywords: [
    "Amey Rasekar",
    "The Programmer's Gazette",
    "Victorian Portfolio",
    "Full-Stack Engineer",
    "AI ML Engineer",
    "Pune",
  ],
  authors: [{ name: "Amey Rasekar" }],
  openGraph: {
    title: "The Programmer's Gazette — Amey Rasekar",
    description:
      "Victorian newspaper-themed developer portfolio showcasing artificial intelligence, full-stack architectures, and marine research systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreBodoni.variable} ${ebGaramond.variable} ${crimsonText.variable} ${ibmPlexMono.variable} ${specialElite.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=IBM+Plex+Mono:ital,wght@0,400;0,600;1,400&family=Libre+Bodoni:ital,wght@0,400..700;1,400..700&family=Special+Elite&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper-cream text-ink-black selection:bg-paper-red selection:text-paper-cream">
        {children}
      </body>
    </html>
  );
}
