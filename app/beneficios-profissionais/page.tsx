import type { Metadata } from "next"
import BeneficiosProfissionaisClient from "./ProfessionalPageClient"

export const metadata: Metadata = {
  title: "Benefícios para Profissionais | TEAcolhe Saúde",
  description:
    "Seja um profissional parceiro da TEAcolhe Saúde e tenha pagamento garantido, agenda otimizada e desenvolvimento profissional contínuo.",
  keywords:
    "profissionais TEA, terapeutas, fonoaudiólogos, psicólogos, terapia ocupacional, pagamento garantido, TEAcolhe Saúde",
  alternates: {
    canonical: "https://teacolhesaude.com.br/beneficios-profissionais",
  },
  openGraph: {
    title: "Benefícios para Profissionais | TEAcolhe Saúde",
    description:
      "Seja um profissional parceiro da TEAcolhe Saúde e tenha pagamento garantido, agenda otimizada e desenvolvimento profissional contínuo.",
    url: "https://teacolhesaude.com.br/beneficios-profissionais",
  },
}

export default function BeneficiosProfissionais() {
  return <BeneficiosProfissionaisClient />
}
