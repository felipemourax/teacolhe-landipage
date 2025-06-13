import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { GoogleTagManager } from "@/components/google-tag-manager"
import { FacebookPixel } from "@/components/facebook-pixel"
import { JsonLd } from "@/components/json-ld"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TEAcolhe Saúde - Planos de Terapia para Crianças com TEA",
  description:
    "Ofereça ao seu filho acesso a terapias de qualidade, com cobertura garantida em diversas clínicas especializadas. Sem carência, sem glosas, sem complicações.",
  keywords:
    "TEA, autismo, terapias, planos de saúde, fonoaudiologia, psicologia, terapia ocupacional, ABA, clínicas especializadas",
  authors: [{ name: "TEAcolhe Saúde" }],
  creator: "TEAcolhe Saúde",
  publisher: "TEAcolhe Saúde",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://teacolhesaude.com.br",
  },
  openGraph: {
    title: "TEAcolhe Saúde - Planos de Terapia para Crianças com TEA",
    description:
      "Ofereça ao seu filho acesso a terapias de qualidade, com cobertura garantida em diversas clínicas especializadas.",
    url: "https://teacolhesaude.com.br",
    siteName: "TEAcolhe Saúde",
    images: [
      {
        url: "https://teacolhesaude.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TEAcolhe Saúde - Planos de Terapia para Crianças com TEA",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TEAcolhe Saúde - Planos de Terapia para Crianças com TEA",
    description:
      "Ofereça ao seu filho acesso a terapias de qualidade, com cobertura garantida em diversas clínicas especializadas.",
    images: ["https://teacolhesaude.com.br/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <GoogleTagManager />
        <FacebookPixel />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "TEAcolhe Saúde",
            url: "https://teacolhesaude.com.br",
            logo: "https://teacolhesaude.com.br/logo.png",
            sameAs: [
              "https://www.facebook.com/teacolhesaude",
              "https://www.instagram.com/teacolhesaude",
              "https://www.linkedin.com/company/teacolhesaude",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+55-11-99999-9999",
              contactType: "customer service",
              availableLanguage: "Portuguese",
            },
            description: "Planos de Terapia para Crianças com TEA em Clínicas Credenciadas",
          }}
        />
        {children}
      </body>
    </html>
  )
}
