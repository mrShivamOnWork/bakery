import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import LocationsTopBar from "@/components/layout/LocationsTopBar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Lucia Dulce Bakery — Every Day is a Celebration",
    template: "%s | Lucia Dulce Bakery",
  },
  description:
    "Lucia Dulce Bakery — Premium handcrafted cakes, yema cakes, ensaymada, and Filipino pastries in Davao City, Tagum, and Digos. Every day is a celebration.",
  keywords: [
    "bakery",
    "yema cake",
    "ensaymada",
    "premium cakes",
    "Davao bakery",
    "Filipino bakery",
    "bento cakes",
    "Lucia Dulce",
  ],
  openGraph: {
    title: "Lucia Dulce Bakery — Every Day is a Celebration",
    description: "Premium handcrafted cakes and Filipino pastries in Davao, Tagum, and Digos.",
    type: "website",
    locale: "en_PH",
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
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-chocolate">
        <LocationsTopBar />
        {children}
      </body>
    </html>
  );
}
