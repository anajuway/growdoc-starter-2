import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proposta Comercial — Site Institucional GrowDoc",
  description: "Seu site institucional médico, do zero ao profissional.",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#131515] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
