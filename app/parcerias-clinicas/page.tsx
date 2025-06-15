import type { Metadata } from "next"
import ParceriasClinicasClient from "./ParceriasClinicasClient"

export const metadata: Metadata = {
  title: "Parcerias com Clínicas | TEAcolhe Saúde",
  description:
    "Torne-se uma clínica parceira da TEAcolhe Saúde e amplie seu alcance, garanta pagamentos sem glosas e aumente sua receita com nosso programa de parcerias.",
  keywords: "clínicas parceiras, credenciamento, terapias TEA, pagamento garantido, sem glosas, TEAcolhe Saúde",
  alternates: {
    canonical: "https://teacolhesaude.com.br/parcerias-clinicas",
  },
  openGraph: {
    title: "Parcerias com Clínicas | TEAcolhe Saúde",
    description:
      "Torne-se uma clínica parceira da TEAcolhe Saúde e amplie seu alcance, garanta pagamentos sem glosas e aumente sua receita.",
    url: "https://teacolhesaude.com.br/parcerias-clinicas",
  },
}

export default function ParceriasClinicas() {
  return <ParceriasClinicasClient />
}
