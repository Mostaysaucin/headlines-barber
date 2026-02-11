import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Headlines Barbershops Tampa Bay | Premium Barbershop Since 2000",
  description:
    "The Professional Twist To The Modern Barber Shop. 10 locations across Tampa Bay. Expert barbers, clean fades, and a premium experience. Book your appointment today.",
  keywords: [
    "barbershop",
    "Tampa Bay",
    "haircut",
    "fade",
    "Headlines Barbershops",
    "barber",
    "beard trim",
    "hot towel shave",
  ],
  openGraph: {
    title: "Headlines Barbershops Tampa Bay",
    description: "The Professional Twist To The Modern Barber Shop",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-background text-text-primary">
        {children}
      </body>
    </html>
  );
}
