import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Calendar,
  DollarSign,
  Clock,
  Award,
  Briefcase,
  Sparkles,
  Heart,
  Shield,
  Users,
  CheckCircle,
  Brain,
  Stethoscope,
  HandHeart,
  Music,
  Palette,
  Activity,
  FileText,
  Target,
} from "lucide-react"
import type { Metadata } from "next"

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
  const terapias = [
    // ABA e Comportamentais
    { nome: "ABA (Análise do Comportamento Aplicada)", icone: Target },
    { nome: "Terapia Cognitivo-Comportamental (TCC)", icone: Brain },
    { nome: "Floortime (DIR/Floortime)", icone: Users },
    { nome: "Modelo Denver (ESDM)", icone: Heart },

    // Fonoaudiologia e Comunicação
    { nome: "Fonoaudiologia", icone: Stethoscope },
    { nome: "PECS (Picture Exchange Communication System)", icone: FileText },
    { nome: "Comunicação Suplementar e Alternativa (CSA)", icone: Users },
    { nome: "PROMPT", icone: Stethoscope },

    // Terapia Ocupacional
    { nome: "Terapia Ocupacional", icone: HandHeart },
    { nome: "Integração Sensorial", icone: Activity },
    { nome: "Habilidades da vida diária", icone: CheckCircle },
    { nome: "Treino motor fino e grosso", icone: HandHeart },

    // Fisioterapia e Movimento
    { nome: "Fisioterapia", icone: Activity },
    { nome: "Psicomotricidade", icone: Activity },
    { nome: "Educação Física Adaptada", icone: Activity },
    { nome: "Artes Marciais Terapêuticas", icone: Shield },

    // Terapias Expressivas
    { nome: "Musicoterapia", icone: Music },
    { nome: "Arteterapia", icone: Palette },
    { nome: "Dança-terapia", icone: Heart },
    { nome: "Teatro terapêutico", icone: Users },

    // Psicologia
    { nome: "Psicologia Infantil", icone: Brain },
    { nome: "Psicoterapia individual", icone: Brain },
    { nome: "Psicoterapia familiar", icone: Users },
    { nome: "Aconselhamento parental", icone: Heart },
    { nome: "Grupos de apoio a pais", icone: Users },

    // Educação e Pedagogia
    { nome: "Psicopedagogia", icone: FileText },
    { nome: "Pedagogia Terapêutica", icone: FileText },
    { nome: "Mediação Escolar", icone: Users },
    { nome: "Intervenção Precoce Educacional", icone: Target },
    { nome: "Tutoria comportamental", icone: CheckCircle },

    // Medicina e Saúde
    { nome: "Psiquiatria Infantil", icone: Stethoscope },
    { nome: "Neuropediatria", icone: Brain },
    { nome: "Nutrição", icone: Heart },
    { nome: "Nutrição Comportamental", icone: Heart },
    { nome: "Medicina Integrativa", icone: Stethoscope },

    // Terapias Alternativas
    { nome: "Equoterapia", icone: Heart },
    { nome: "Cinoterapia (terapia com cães)", icone: Heart },
    { nome: "Terapia Aquática", icone: Activity },
    { nome: "Reiki", icone: Sparkles },
    { nome: "Aromaterapia", icone: Sparkles },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 font-['Inter']">
      {/* Header */}
      <header className="bg-white border-b border-green-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image src="/images/logo-verde.png" alt="TEAcolhe Saúde" width={180} height={40} className="h-8 w-auto" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/#planos" className="text-gray-700 hover:text-green-600 transition-colors">
              Planos
            </Link>
            <Link href="/#terapias" className="text-gray-700 hover:text-green-600 transition-colors">
              Terapias
            </Link>
            <Link href="/#clinicas" className="text-gray-700 hover:text-green-600 transition-colors">
              Clínicas
            </Link>
            <Link href="/parcerias-clinicas" className="text-gray-700 hover:text-green-600 transition-colors">
              Para Clínicas
            </Link>
            <Link href="/beneficios-profissionais" className="text-green-600 font-medium">
              Para Profissionais
            </Link>
            <Button className="bg-green-600 hover:bg-green-700">Fazer Cadastro</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white text-blue-800 mb-4">Para Profissionais</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Potencialize sua Carreira como Terapeuta</h1>
              <p className="text-xl mb-8 opacity-90">
                Junte-se à rede TEAcolhe Saúde e tenha pagamento garantido, agenda otimizada e desenvolvimento
                profissional contínuo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Cadastrar meu perfil
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-600/30">
                  Conhecer benefícios
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Profissional terapeuta"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-800">1.200+ profissionais cadastrados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por Que Se Tornar um Profissional Parceiro
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra como a TEAcolhe Saúde pode transformar sua prática profissional e impulsionar sua carreira.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Pagamento Garantido",
                description:
                  "Receba por cada sessão realizada, sem glosas e sem inadimplência. Escolha entre pagamento em D+1 ou D+30.",
              },
              {
                icon: Calendar,
                title: "Agenda Otimizada",
                description:
                  "Reduza faltas e cancelamentos com nosso sistema de confirmação e lembretes automáticos para pacientes.",
              },
              {
                icon: Briefcase,
                title: "Mais Pacientes",
                description:
                  "Acesso a uma base crescente de famílias em busca de terapias especializadas para crianças com TEA.",
              },
              {
                icon: Clock,
                title: "Menos Burocracia",
                description:
                  "Esqueça relatórios para convênios e guias de autorização. Foque no que realmente importa: seus pacientes.",
              },
              {
                icon: Award,
                title: "Desenvolvimento Profissional",
                description:
                  "Acesso a cursos, workshops e materiais exclusivos para aprimorar suas habilidades terapêuticas.",
              },
              {
                icon: Sparkles,
                title: "Reconhecimento",
                description:
                  "Faça parte de uma rede de excelência, com certificação e destaque no perfil para profissionais bem avaliados.",
              },
            ].map((beneficio, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <beneficio.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{beneficio.title}</h3>
                  <p className="text-gray-600">{beneficio.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Especialidades em Alta Demanda</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estas são as especialidades mais procuradas pelas famílias em nossa plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {terapias.map((terapia, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-blue-100 to-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <terapia.icone className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-xs text-center leading-tight">{terapia.nome}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Como Funciona para Profissionais</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Processo simples e rápido para começar a atender pacientes da TEAcolhe Saúde
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                numero: "1",
                titulo: "Cadastro",
                descricao: "Crie seu perfil profissional e envie seus documentos e certificações",
              },
              {
                numero: "2",
                titulo: "Verificação",
                descricao: "Nossa equipe verifica suas credenciais e aprova seu cadastro em até 48h",
              },
              {
                numero: "3",
                titulo: "Configuração",
                descricao: "Configure sua agenda, valores e especialidades de atendimento",
              },
              {
                numero: "4",
                titulo: "Atendimentos",
                descricao: "Comece a receber agendamentos e atender pacientes da plataforma",
              },
            ].map((passo, index) => (
              <Card
                key={index}
                className="relative p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {passo.numero}
                    </div>
                  </div>
                  <div className="mt-4 mb-4">
                    <h3 className="font-semibold text-lg mb-2">{passo.titulo}</h3>
                    <p className="text-gray-600 text-sm">{passo.descricao}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O Que Dizem Nossos Profissionais</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça a experiência de quem já faz parte da nossa rede de profissionais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                nome: "Dra. Mariana Costa",
                cargo: "Fonoaudióloga | 3 anos na plataforma",
                depoimento:
                  "A TEAcolhe Saúde transformou minha prática profissional. Tenho agenda cheia, pagamentos em dia e posso me concentrar no que realmente importa: ajudar meus pacientes.",
                imagem: "/placeholder.svg?height=100&width=100",
              },
              {
                nome: "Dr. Rafael Santos",
                cargo: "Psicólogo | 2 anos na plataforma",
                depoimento:
                  "O que mais me impressiona é a facilidade de gestão. Sem papelada, sem cobranças e com pagamento garantido. Minha produtividade aumentou significativamente.",
                imagem: "/placeholder.svg?height=100&width=100",
              },
              {
                nome: "Dra. Juliana Almeida",
                cargo: "Terapeuta Ocupacional | 4 anos na plataforma",
                depoimento:
                  "Além da parte financeira, que é excelente, valorizo muito as oportunidades de desenvolvimento profissional. Os cursos e workshops são de altíssima qualidade.",
                imagem: "/placeholder.svg?height=100&width=100",
              },
            ].map((depoimento, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      <Image
                        src={depoimento.imagem || "/placeholder.svg"}
                        alt={depoimento.nome}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    </div>
                    <p className="text-gray-600 italic mb-4">"{depoimento.depoimento}"</p>
                    <h4 className="font-semibold">{depoimento.nome}</h4>
                    <p className="text-sm text-gray-500">{depoimento.cargo}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre como ser um profissional parceiro da TEAcolhe Saúde
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                pergunta: "Quais são os requisitos para me cadastrar como profissional?",
                resposta:
                  "Você precisa ter formação na área de atuação, registro ativo no conselho profissional correspondente e experiência comprovada no atendimento de crianças com TEA.",
              },
              {
                pergunta: "Posso atender como autônomo ou preciso estar vinculado a uma clínica?",
                resposta:
                  "Você pode se cadastrar como profissional autônomo ou vinculado a uma clínica. Ambas as modalidades são aceitas em nossa plataforma.",
              },
              {
                pergunta: "Como funciona o pagamento pelos atendimentos?",
                resposta:
                  "Oferecemos duas modalidades: pagamento em D+1 (com taxa administrativa de 5%) ou pagamento em D+30 (sem taxa administrativa). Você escolhe a que melhor se adapta às suas necessidades.",
              },
              {
                pergunta: "Preciso atender exclusivamente pacientes da TEAcolhe?",
                resposta:
                  "Não. Você pode continuar atendendo seus pacientes particulares e de outros convênios normalmente. Nossa parceria é não-exclusiva.",
              },
              {
                pergunta: "Como são definidos os valores das sessões?",
                resposta:
                  "Você define seus próprios valores dentro de uma faixa sugerida pela plataforma, baseada nos valores praticados no mercado para cada especialidade.",
              },
              {
                pergunta: "Existe algum custo para se cadastrar como profissional?",
                resposta:
                  "Não há taxa de adesão ou mensalidade. Nossa remuneração vem apenas da taxa administrativa nos pagamentos D+1 ou da margem nos planos vendidos aos pacientes.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-lg mb-2">{faq.pergunta}</h3>
                  <p className="text-gray-600">{faq.resposta}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para impulsionar sua carreira?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Junte-se a mais de 1.200 profissionais em todo o Brasil e faça parte da maior rede de atendimento
            especializado para crianças com TEA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg">
              Cadastrar meu perfil
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-600/30 text-lg">
              Falar com um consultor
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/">
                <Image
                  src="/images/logo-branco.png"
                  alt="TEAcolhe Saúde"
                  width={180}
                  height={40}
                  className="h-8 w-auto mb-4"
                />
              </Link>
              <p className="text-gray-400 text-sm">
                Revolucionando o acesso a terapias para crianças com TEA e outras PCDs.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Planos</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/#planos" className="hover:text-white transition-colors">
                    Plano Essencial
                  </Link>
                </li>
                <li>
                  <Link href="/#planos" className="hover:text-white transition-colors">
                    Plano Sem Limite
                  </Link>
                </li>
                <li>
                  <Link href="/#planos" className="hover:text-white transition-colors">
                    Comparar Planos
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Parcerias</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/parcerias-clinicas" className="hover:text-white transition-colors">
                    Para Clínicas
                  </Link>
                </li>
                <li>
                  <Link href="/beneficios-profissionais" className="hover:text-white transition-colors">
                    Para Profissionais
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cadastro
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 TEAcolhe Saúde. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
