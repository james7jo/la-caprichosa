import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "La Caprichosa · Carnes a la Parrilla",
  description:
    "El mejor sabor de la brasa en Cochabamba. Av. Circunvalación Este, Zona Pacata. Tel: 71761404",
  openGraph: {
    title: "La Caprichosa · Carnes a la Parrilla",
    description: "Pedidos por WhatsApp 🔥",
    siteName: "La Caprichosa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${dmSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{
          background: "#111009",
          color: "#F0ECD8",
          fontFamily: "var(--font-dm-sans)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
