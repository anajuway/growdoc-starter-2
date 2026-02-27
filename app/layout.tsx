import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proposta Comercial — GrowDoc Starter 2",
  description: "Sua presença digital médica, do zero ao profissional.",
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
