import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Screen from "@/components/shared/Screen";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ikon Agency | SaaS, MVP & Design Experts in Rwanda",
  description:
    "Ikon Agency, founded by Reconfort Daniel and NDIZIHIWE Benny Chrispin, delivers top-tier SaaS development, MVPs, mobile apps, websites, and branding. We serve clients globally with a strong presence in Rwanda.",
  keywords: [
    "Ikon Agency",
    "Reconfort Daniel",
    "NDIZIHIWE Benny Chrispin",
    "Rwanda Tech Agency",
    "SaaS Development",
    "MVP Development",
    "Mobile App Development",
    "Website Development",
    "UX/UI Design",
    "Branding",
    "Web Design",
    "Mobile App Design",
    "Software Agency",
    "E-commerce Solutions",
    "FinTech Apps",
    "EduTech Platforms",
    "Corporate Websites",
    "HealthTech Development",
    "Global Software Agency",
  ],
  authors: [{ name: "Reconfort Daniel" }, { name: "NDIZIHIWE Benny Chrispin" }],
  creator: "Ikon Agency",
  publisher: "Ikon Agency",
  robots: "index, follow",
  openGraph: {
    title: "Ikon Agency | SaaS, MVP & Design Experts in Rwanda",
    description:
      "Building scalable SaaS platforms, MVPs, mobile and web applications with exceptional UX/UI design. Founded by Reconfort Daniel and NDIZIHIWE Benny Chrispin.",
    url: "https://www.ikonagency.com",
    siteName: "Ikon Agency",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://www.ikonagency.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <Navbar />
        {children}
        <Screen />
      </body>
    </html>
  );
}
