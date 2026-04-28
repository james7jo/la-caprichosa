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
  // SEO Principal
  title: "La Caprichosa · Carnes a la Parrilla",
  description:
    "Disfruta el mejor sabor de la brasa en Cochabamba. Cortes premium, churrascos y asados. Ubicados en Av. Circunvalación Este, Zona Pacata. Pedidos al 71761404.",
  keywords: [
    "Churrasquería",
    "Cochabamba",
    "Parrillada",
    "Carnes",
    "Pacata",
    "La Caprichosa",
  ],
  authors: [{ name: "La Caprichosa" }],

  // Icono (Asegúrate de que icon.png esté en la carpeta /public)
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },

  // OpenGraph (Para WhatsApp y Facebook)
  openGraph: {
    title: "La Caprichosa · Carnes a la Parrilla",
    description:
      "El sabor de la brasa directo a tu mesa en Cochabamba. ¡Haz tu pedido aquí! 🔥",
    url: "https://la-caprichosa.vercel.app/",
    siteName: "La Caprichosa",
    locale: "es_BO",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 800,
        height: 600,
        alt: "La Caprichosa Cochabamba",
      },
    ],
  },

  // Twitter (X)
  twitter: {
    card: "summary_large_image",
    title: "La Caprichosa · Parrillada en Cochabamba",
    description: "Cortes de carne premium y el mejor servicio de parrilla.",
    images: ["/icon.png"],
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
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{
          background: "#111009",
          color: "#F0ECD8",
          fontFamily: "var(--font-dm-sans)",
        }}
      >
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
