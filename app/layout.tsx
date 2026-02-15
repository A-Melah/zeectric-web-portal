import { Exo_2, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Metadata } from "next";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-exo2", // Matches the --font-heading in CSS
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Matches the --font-sans in CSS
});

export const metadata: Metadata = {
  title: 'Zeectric ENL | Engineering Excellence',
  description: 'Industrial Power & Renewable Energy Solutions in Nigeria',
  manifest: '/site.webmanifest', // Links the manifest file for Android/PWA
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' }, // Fallback for older browsers
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.ico', // You can use a specific SVG here if you have one
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${exo2.variable} ${inter.variable} scroll-smooth`}>
      <body>
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}