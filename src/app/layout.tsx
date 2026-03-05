import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/index.css";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Biblioteca de Sentido — Renta de Libros Infantiles",
  description:
    "Renta mensual de libros infantiles de calidad con Guía de Sentido. $100 MXN al mes por libro. Lectura con propósito para familias.",
  authors: [{ name: "Semilleros de Sentido A.C." }],
  openGraph: {
    title: "Biblioteca de Sentido — Renta de Libros Infantiles",
    description:
      "Lleva literatura de calidad a tu hogar. Cada libro incluye una Guía de Sentido para transformar la lectura en diálogo familiar.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
