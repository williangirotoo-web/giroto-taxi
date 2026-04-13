import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Táxi em Umuarama 24h | Giroto Táxi — (44) 99891-3040",
  description: "Táxi em Umuarama 24 horas por dia. Corridas rápidas, táxi executivo e viagens intermunicipais. Chame agora pelo WhatsApp!",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}