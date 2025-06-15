"use client"

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
  Mic,
  Brain,
  HandHeart,
  Target,
  BookOpen,
  Music,
  Activity,
  Palette,
  ChevronRight,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"

// FAQ Accordion Component for Professionals
function ProfessionalFAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      pergunta: "Quais são os requisitos para me cadastrar como profissional?",
      resposta:
        "Você precisa ter formação na área de atuação, registro no conselho profissional correspondente e experiência comprovada no atendimento de pessoas com TEA.",
    },
    {
      pergunta: "Preciso estar vinculado a uma clínica?",
      resposta:
        "Não. Você pode atuar como profissional autônomo, desde que possua um local adequado para realizar os atendimentos, que pode ser no domicílio do paciente, em um coworking, consultório próprio ou espaço terapêutico. Também é possível atuar vinculado a uma clínica parceira da TEAcolhe Saúde. Ambas as modalidades são aceitas e totalmente integradas à nossa plataforma.",
    },
    {
      pergunta: "Como funciona o recebimento?",
      resposta:
        "Você escolhe entre: D+3 (pagamento no dia seguinte após a finalização do procedimento) com taxa de 5%, ou D+30 (sem taxa). Os pagamentos são automáticos, transparentes e sem glosas.",
    },
    {
      pergunta: "Preciso atender exclusivamente pela plataforma?",
      resposta:
        "Não. Você pode continuar atendendo pacientes particulares e de outros convênios normalmente. A parceria com a TEAcolhe é não exclusiva.",
    },
    {
      pergunta: "Como são definidos os valores das sessões?",
      resposta:
        "A TEAcolhe Saúde disponibiliza tabelas de referência por especialidade, baseadas em valores praticados no mercado, garantindo equilíbrio entre valorização profissional e competitividade. Como profissional autônomo, você recebe os valores de acordo com os planos disponíveis e sua especialidade sugeridas pela TEAcolhe Saúde. Caso receba um convite de uma clínica parceira para prestar atendimentos vinculados a ela, essa relação será direta entre você e a clínica, que poderá propor suas próprias condições de remuneração. No entanto, todos os atendimentos agendados por meio da plataforma da TEAcolhe, mesmo com vínculo a uma clínica, seguem as mesmas políticas de pagamento aplicadas aos profissionais autônomos — com garantia, sem glosas e com opção de D+3 ou D+30.",
    },
    {
      pergunta: "Há algum custo para participar?",
      resposta: "Não. Não cobramos adesão, mensalidade ou comissão.",
    },
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
          >
            <h3 className="font-semibold text-lg text-gray-900 pr-4">{faq.pergunta}</h3>
            <div
              className={`transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
            >
              <ChevronRight className="w-5 h-5 text-gray-500 transform rotate-90" />
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-600 leading-relaxed">{faq.resposta}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function BeneficiosProfissionaisClient() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 font-['Inter']">
      {/* Header - Remove fixed positioning and adjust z-index */}
      <header className="relative bg-white border-b border-green-100 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image src="/images/logo-verde.png" alt="TEAcolhe Saúde" width={180} height={40} className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#planos" className="text-gray-700 hover:text-green-600 transition-colors">
              Planos
            </Link>
            <Link href="/#terapias" className="text-gray-700 hover:text-green-600 transition-colors">
              Terapias
            </Link>
            <Link href="/parcerias-clinicas" className="text-gray-700 hover:text-green-600 transition-colors">
              Para Clínicas
            </Link>
            <Link href="/beneficios-profissionais" className="text-green-600 font-medium">
              Para Profissionais
            </Link>
            <Button className="bg-green-600 hover:bg-green-700">Fazer Cadastro</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation Menu - Fix positioning */}
        <div
          className={`md:hidden bg-white/95 backdrop-blur-md border-b border-green-100 shadow-lg transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 max-h-96 visible" : "opacity-0 max-h-0 invisible overflow-hidden"
          }`}
        >
          <nav className="container mx-auto px-4 py-6 space-y-4">
            <Link
              href="/#planos"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
            >
              Planos
            </Link>
            <Link
              href="/#terapias"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
            >
              Terapias
            </Link>
            <Link
              href="/parcerias-clinicas"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
            >
              Para Clínicas
            </Link>
            <Link
              href="/beneficios-profissionais"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-green-600 font-medium bg-green-50 rounded-lg transition-all duration-200"
            >
              Para Profissionais
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <Button className="w-full bg-green-600 hover:bg-green-700" onClick={closeMobileMenu}>
                Fazer Cadastro
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Remove overlay and adjust Hero Section - Remove top padding */}
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
                src="/images/terapeuta-teacolhe.svg"
                alt="Profissional terapeuta"
                width={500}
                height={400}
                className="drop-shadow-lg"
                style={{
                  filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 3px rgba(0, 0, 0, 0.08))",
                }}
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { nome: "Fonoaudiologia", icone: Mic },
              { nome: "Psicologia", icone: Brain },
              { nome: "Terapia Ocupacional", icone: HandHeart },
              { nome: "ABA", icone: Target },
              { nome: "Psicopedagogia", icone: BookOpen },
              { nome: "Musicoterapia", icone: Music },
              { nome: "Fisioterapia", icone: Activity },
              { nome: "Arteterapia", icone: Palette },
            ].map((especialidade, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-br from-blue-100 to-green-100 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <especialidade.icone className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="font-semibold">{especialidade.nome}</h3>
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
              <Card key={index} className="relative p-6 text-center hover:shadow-lg transition-shadow">
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

          <div className="max-w-4xl mx-auto">
            <ProfessionalFAQAccordion />
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
            <Button variant="outline" className="border-green-200 hover:bg-green-50">
              Falar com nosso suporte
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Parceiros Exclusivos */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Parceiros Exclusivos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça nossos parceiros estratégicos que complementam nossos serviços especializados
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl mx-auto">
            {/* JiuJiTEA */}
            <div className="group cursor-pointer">
              <a href="https://jiujitea.com.br" target="_blank" rel="noopener noreferrer" className="block">
                <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-green-200">
                  <CardContent className="p-0 text-center">
                    <div className="mb-6">
                      <Image
                        src="/images/logotipo_jiujitea.svg"
                        alt="JiuJiTEA - Jiu-Jitsu para crianças com TEA"
                        width={200}
                        height={100}
                        className="mx-auto group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-semibold text-xl mb-2 text-gray-900">JiuJiTEA</h3>
                    <p className="text-gray-600">
                      Jiu-Jitsu especializado para crianças com TEA, promovendo disciplina, autoconfiança e
                      desenvolvimento motor
                    </p>
                    <div className="mt-4 flex items-center justify-center text-green-600 group-hover:text-green-700">
                      <span className="text-sm font-medium">Visitar site</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>

            {/* Spectrum Hub */}
            <div className="group cursor-pointer">
              <a href="https://spectrumhub.com.br" target="_blank" rel="noopener noreferrer" className="block">
                <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-200">
                  <CardContent className="p-0 text-center">
                    <div className="mb-6">
                      <Image
                        src="/images/spectrum-parceiro.svg"
                        alt="Spectrum Hub - Hub de soluções para TEA"
                        width={200}
                        height={100}
                        className="mx-auto group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-semibold text-xl mb-2 text-gray-900">Spectrum Hub</h3>
                    <p className="text-gray-600">
                      Hub completo de soluções e recursos especializados para famílias e profissionais do espectro
                      autista
                    </p>
                    <div className="mt-4 flex items-center justify-center text-blue-600 group-hover:text-blue-700">
                      <span className="text-sm font-medium">Visitar site</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 text-sm">
              Interessado em se tornar um parceiro?
              <Button variant="link" className="text-green-600 hover:text-green-700 p-0 ml-1">
                Entre em contato conosco
              </Button>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
