"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Shield,
  Users,
  Calendar,
  CheckCircle,
  Brain,
  Stethoscope,
  HandHeart,
  Music,
  Palette,
  Activity,
  UserCheck,
  Clock,
  Lock,
  FileText,
  ChevronRight,
  Play,
  Sparkles,
  Target,
  Zap,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"

// Custom hook for intersection observer
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return [ref, isIntersecting]
}

// Animation wrapper component
function AnimatedSection({ children, className = "", delay = 0 }) {
  const [ref, isIntersecting] = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// FAQ Accordion Component
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      pergunta: "Quem pode contratar um plano da TEAcolhe Saúde?",
      resposta:
        "Qualquer família interessada em garantir acesso rápido e descomplicado a terapias para pessoas com Transtorno do Espectro Autista (TEA). Não exigimos diagnóstico formal, carência ou análise de perfil para começar.",
    },
    {
      pergunta: "A TEAcolhe é um plano de saúde?",
      resposta:
        "Não. A TEAcolhe Saúde não é um plano de saúde. Somos uma plataforma especializada em terapias para pessoas com TEA, conectando famílias a clínicas e profissionais credenciados. Não oferecemos cobertura para consultas médicas, exames, internações, cirurgias ou procedimentos hospitalares.",
    },
    {
      pergunta: "O que está incluído na cobertura da TEAcolhe?",
      resposta:
        "A cobertura é voltada exclusivamente para terapias clínicas, com profissionais especializados em: Psicologia, Fonoaudiologia, Terapia Ocupacional, ABA (Análise do Comportamento Aplicada), Psicopedagogia, Fisioterapia, Musicoterapia, Arteterapia, Esporte e muito mais... As sessões ocorrem em clínicas credenciadas ou com profissionais parceiros, de forma presencial ou online, conforme disponibilidade.",
    },
    {
      pergunta: "E os exames laboratoriais, internações ou procedimentos médicos?",
      resposta:
        "Esses itens não estão inclusos. A TEAcolhe cobre apenas terapias comportamentais, cognitivas e motoras. Para exames, hospitalizações ou procedimentos médicos, é necessário ter um plano de saúde ou utilizar o SUS.",
    },
    {
      pergunta: "Existe quantidade mínima de vidas para contratar?",
      resposta:
        "Não. Com apenas 1 vida já é possível contratar um plano. Atendemos tanto famílias com apenas um membro no espectro quanto aquelas com múltiplas necessidades.",
    },
    {
      pergunta: "Preciso de laudo ou encaminhamento médico?",
      resposta:
        "Não. Nosso objetivo é eliminar barreiras. Você pode contratar o plano e iniciar o agendamento das sessões sem necessidade de laudo ou encaminhamento formal. No entanto, a clínica pode exigir.",
    },
    {
      pergunta: "Como funciona o agendamento das sessões?",
      resposta:
        "Após a contratação, você acessa nossa plataforma para visualizar as especialidades que o seu plano contempla, depois visualiza os profissionais e clínicas disponíveis na sua região e assim consegue agendar as sessões conforme sua preferência e necessidade.",
    },
    {
      pergunta: "Posso trocar de profissional ou especialidade depois de contratar?",
      resposta:
        "Sim! Nossa plataforma é flexível. Você pode trocar de profissional, especialidade ou local de atendimento após o agendamento, sem burocracia. Desde que não ultrapasse o tempo mínimo de reagendamento que é de 24h de antecedência.",
    },
    {
      pergunta: "Existem quantidade de vida necessária, fidelidade ou cobranças escondidas?",
      resposta:
        "Não. Os valores são claros e sem surpresas. Não há fidelidade, taxas extras ou multas por cancelamento. Você paga apenas pelo plano contratado, com total transparência.",
    },
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <AnimatedSection key={index} delay={index * 100}>
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300">
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
        </AnimatedSection>
      ))}
    </div>
  )
}

export default function TeacolheLanding() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToPlans = () => {
    const plansSection = document.getElementById("planos")
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

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

  const clinicas = [
    {
      nome: "Clínica Esperança",
      cidade: "São Paulo - SP",
      imagem: "/placeholder.svg?height=200&width=300",
    },
    {
      nome: "Centro Terapêutico Vida",
      cidade: "Rio de Janeiro - RJ",
      imagem: "/placeholder.svg?height=200&width=300",
    },
    {
      nome: "Espaço Desenvolver",
      cidade: "Belo Horizonte - MG",
      imagem: "/placeholder.svg?height=200&width=300",
    },
    {
      nome: "Clínica Acolher",
      cidade: "Brasília - DF",
      imagem: "/placeholder.svg?height=200&width=300",
    },
    {
      nome: "Instituto Crescer",
      cidade: "Porto Alegre - RS",
      imagem: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 font-['Inter']">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-green-100 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/images/logo-verde.png" alt="TEAcolhe Saúde" width={180} height={40} className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#planos" className="text-gray-700 hover:text-green-600 transition-colors">
              Planos
            </a>
            <a href="#terapias" className="text-gray-700 hover:text-green-600 transition-colors">
              Terapias
            </a>
            <a href="#clinicas" className="text-gray-700 hover:text-green-600 transition-colors">
              Clínicas
            </a>
            <a href="/parcerias-clinicas" className="text-gray-700 hover:text-green-600 transition-colors">
              Para Clínicas
            </a>
            <a href="/beneficios-profissionais" className="text-gray-700 hover:text-green-600 transition-colors">
              Para Profissionais
            </a>
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

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-green-100 shadow-lg transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
          }`}
        >
          <nav className="container mx-auto px-4 py-6 space-y-4">
            <a
              href="#planos"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
            >
              Planos
            </a>
            <a
              href="#terapias"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
            >
              Terapias
            </a>
            <a
              href="#clinicas"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
            >
              Clínicas
            </a>
            <a
              href="/parcerias-clinicas"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
            >
              Para Clínicas
            </a>
            <a
              href="/beneficios-profissionais"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
            >
              Para Profissionais
            </a>
            <div className="pt-4 border-t border-gray-200">
              <Button className="w-full bg-green-600 hover:bg-green-700" onClick={closeMobileMenu}>
                Fazer Cadastro
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={closeMobileMenu} />}

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-blue-100/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex justify-center mb-6">
              <Badge className="bg-green-100 text-green-800 px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Revolução no Acesso a Terapias
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Planos de Terapia para
              <br />
              <span className="text-green-600">Crianças com TEA</span>
              <br />
              em Clínicas Credenciadas
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ofereça ao seu filho acesso a terapias de qualidade, com cobertura garantida em diversas clínicas
              especializadas. Tudo em um só lugar, com transparência, controle e economia.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4" onClick={scrollToPlans}>
                <Play className="w-5 h-5 mr-2" />
                Conheça os Planos
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-1/2 left-10 animate-bounce">
          <Heart className="w-8 h-8 text-green-400 opacity-60" />
        </div>
        <div className="absolute top-1/3 right-10 animate-pulse">
          <Brain className="w-10 h-10 text-blue-400 opacity-60" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-bounce delay-300">
          <Stethoscope className="w-6 h-6 text-green-500 opacity-60" />
        </div>
      </section>

      {/* Header Impactante */}
      <AnimatedSection>
        <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">A Revolução no Acesso a Terapias para PCDs</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
              Não somos planos de saúde. Somos inovação. Com a TEAcolhe Saúde, desburocratizamos o acesso às terapias
              essenciais para crianças com TEA e outras PCDs.
              <span className="font-semibold"> Sem carência. Sem glosas. Sem complicações.</span>
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <Zap className="w-6 h-6" />
                <span className="font-semibold">Planos Acessíveis</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="w-6 h-6" />
                <span className="font-semibold">Agendamentos Garantidos</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-6 h-6" />
                <span className="font-semibold">Clínicas Credenciadas</span>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* O Que Fazemos */}
      <AnimatedSection>
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O Que Fazemos</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Somos a ponte entre famílias e clínicas especializadas — com segurança, clareza e zero burocracia.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <AnimatedSection delay={200}>
                    <Card className="p-6 border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-4">
                          <div className="bg-green-100 p-3 rounded-lg">
                            <Heart className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2">Planos Flexíveis</h3>
                            <p className="text-gray-600">
                              Oferecemos planos terapêuticos mensais que garantem acesso a múltiplas especialidades.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>

                  <AnimatedSection delay={400}>
                    <Card className="p-6 border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-4">
                          <div className="bg-blue-100 p-3 rounded-lg">
                            <Users className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2">Rede Credenciada</h3>
                            <p className="text-gray-600">
                              Clínicas verificadas e profissionais qualificados em mais de 520 cidades.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>

                  <AnimatedSection delay={600}>
                    <Card className="p-6 border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-4">
                          <div className="bg-purple-100 p-3 rounded-lg">
                            <Shield className="w-6 h-6 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2">Controle Total</h3>
                            <p className="text-gray-600">
                              Acompanhe tudo em um painel exclusivo, com transparência total.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                </div>
              </div>

              <AnimatedSection delay={300}>
                <div className="relative flex items-center justify-center">
                  <Image
                    src="/images/teacolhe-icon.svg"
                    alt="TEAcolhe Saúde - Ícone"
                    width={500}
                    height={400}
                    className="drop-shadow-lg"
                    style={{
                      filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 3px rgba(0, 0, 0, 0.08))",
                    }}
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">520+ cidades cobertas</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Como Funciona Para Pacientes */}
      <AnimatedSection>
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Como Funciona Para os Pacientes</h2>
              <p className="text-xl text-gray-600">Simples, seguro e eficiente</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  numero: "1",
                  titulo: "Escolha o Plano",
                  descricao: "Selecione o plano ideal com as terapias que seu filho precisa",
                  icone: Target,
                },
                {
                  numero: "2",
                  titulo: "Pagamento Seguro",
                  descricao: "Realize o pagamento online com total segurança",
                  icone: Shield,
                },
                {
                  numero: "3",
                  titulo: "Agende Sessões",
                  descricao: "Agende diretamente nas clínicas credenciadas com token exclusivo",
                  icone: Calendar,
                },
                {
                  numero: "4",
                  titulo: "Acompanhe o Progresso",
                  descricao: "Monitore o uso do plano e progresso em painel exclusivo",
                  icone: Activity,
                },
              ].map((passo, index) => (
                <AnimatedSection key={index} delay={index * 200}>
                  <Card className="relative p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-0">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                          {passo.numero}
                        </div>
                      </div>
                      <div className="mt-4 mb-4">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <passo.icone className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{passo.titulo}</h3>
                        <p className="text-gray-600 text-sm">{passo.descricao}</p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Como Funciona Para Clínicas */}
      <AnimatedSection>
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Como Funciona Para Clínicas e Profissionais
              </h2>
              <p className="text-xl text-gray-600">Credenciar sua clínica é fácil e sem burocracia</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Video Player */}
              <AnimatedSection delay={200}>
                <div className="relative">
                  <div className="relative aspect-video bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Play className="w-12 h-12 text-green-600 ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                        <h3 className="font-semibold text-gray-900 mb-1">Veja como é simples credenciar sua clínica</h3>
                        <p className="text-sm text-gray-600">Processo 100% digital e sem burocracia</p>
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      3:45 min
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <div className="space-y-6">
                <AnimatedSection delay={300}>
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Sem Glosas, Sem Inadimplência</h3>
                          <p className="text-gray-600">Pagamento garantido por cada atendimento realizado.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection delay={500}>
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <Clock className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Pagamento Rápido</h3>
                          <p className="text-gray-600">Receba em D+1 ou D+30, conforme sua preferência.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection delay={700}>
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <Calendar className="w-6 h-6 text-purple-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Gestão Simplificada</h3>
                          <p className="text-gray-600">
                            Gerencie agenda, controle atendimentos e acesse relatórios financeiros.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Planos Disponíveis */}
      <AnimatedSection>
        <section id="planos" className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Planos Disponíveis</h2>
              <p className="text-xl text-gray-600">Escolha o plano ideal para seu filho</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Plano Essencial */}
              <AnimatedSection delay={200}>
                <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-green-200">
                  <CardContent className="p-0">
                    <div className="text-center mb-6">
                      <Badge className="bg-green-100 text-green-800 mb-4">Plano Essencial</Badge>
                      <h3 className="text-2xl font-bold mb-2">Ideal para Iniciantes</h3>
                      <p className="text-gray-600 mb-4">
                        Perfeito para quem está começando o acompanhamento terapêutico
                      </p>
                      <div className="text-4xl font-bold text-green-600 mb-2">R$ 250</div>
                      <p className="text-gray-500">por mês</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>1 sessão de Fonoaudiologia</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>1 sessão de Psicologia</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>Limite: 2 sessões por mês</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>Renovação mensal</span>
                      </div>
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700">Quero esse plano</Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Plano Sem Limite */}
              <AnimatedSection delay={400}>
                <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-200 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">Mais Popular</Badge>
                  </div>
                  <CardContent className="p-0">
                    <div className="text-center mb-6">
                      <Badge className="bg-blue-100 text-blue-800 mb-4">Plano Sem Limite</Badge>
                      <h3 className="text-2xl font-bold mb-2">Acompanhamento Completo</h3>
                      <p className="text-gray-600 mb-4">Para um acompanhamento contínuo e mais completo</p>
                      <div className="text-4xl font-bold text-blue-600 mb-2">R$ 480</div>
                      <p className="text-gray-500">por mês</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <span>Fonoaudiologia</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <span>Psicologia</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <span>Terapia Ocupacional</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <span>Musicoterapia</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <span>Fisioterapia e muito mais...</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold">Limite: 5 sessões por mês</span>
                      </div>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Quero esse plano</Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Terapias Oferecidas */}
      <AnimatedSection>
        <section id="terapias" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Terapias Oferecidas</h2>
              <p className="text-xl text-gray-600">Principais especialidades para crianças com TEA e outras PCDs</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {terapias.map((terapia, index) => (
                <AnimatedSection key={index} delay={index * 50}>
                  <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                    <CardContent className="p-0">
                      <div className="bg-gradient-to-br from-green-100 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <terapia.icone className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-xs text-center leading-tight">{terapia.nome}</h3>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Para Quem É */}
      <AnimatedSection>
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Para Quem É</h2>
                <p className="text-xl text-gray-600 mb-8">Esta plataforma é ideal para:</p>

                <div className="space-y-4">
                  <AnimatedSection delay={200}>
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <Users className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Pais e Responsáveis</h3>
                        <p className="text-gray-600">
                          Por crianças com diagnóstico ou suspeita de TEA ou outras deficiências
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={400}>
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <Heart className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Famílias que Buscam Praticidade</h3>
                        <p className="text-gray-600">Economia e centralização no controle dos atendimentos</p>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={600}>
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <Shield className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Quem Deseja Segurança</h3>
                        <p className="text-gray-600">
                          Contratar terapias com agilidade, sem depender de planos tradicionais
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>

              <AnimatedSection delay={300}>
                <div className="relative flex items-center justify-center">
                  <Image
                    src="/images/familia.svg"
                    alt="Família sendo acolhida"
                    width={500}
                    height={400}
                    className="drop-shadow-lg"
                    style={{
                      filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 3px rgba(0, 0, 0, 0.08))",
                    }}
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Clínicas Credenciadas */}
      <AnimatedSection>
        <section id="clinicas" className="py-16 px-4 overflow-hidden">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Clínicas Credenciadas</h2>
              <p className="text-xl text-gray-600 mb-2">Cobertura em mais de 520 cidades!</p>
              <p className="text-gray-600">
                Nossas clínicas passam por verificação criteriosa e oferecem ambientes seguros e acolhedores
              </p>
            </div>

            {/* Carousel Container */}
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex animate-scroll-horizontal space-x-6 w-max">
                  {/* First set of cards */}
                  {[
                    {
                      nome: "São Paulo",
                      estado: "SP",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Rio de Janeiro",
                      estado: "RJ",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Belo Horizonte",
                      estado: "MG",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Salvador",
                      estado: "BA",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Fortaleza",
                      estado: "CE",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Brasília",
                      estado: "DF",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Curitiba",
                      estado: "PR",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Recife",
                      estado: "PE",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Porto Alegre",
                      estado: "RS",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Manaus",
                      estado: "AM",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Belém",
                      estado: "PA",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Goiânia",
                      estado: "GO",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "São Luís",
                      estado: "MA",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    { nome: "Maceió", estado: "AL", imagem: "/placeholder.svg?height=200&width=300" },
                    { nome: "Natal", estado: "RN", imagem: "/placeholder.svg?height=200&width=300" },
                    {
                      nome: "Teresina",
                      estado: "PI",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Campo Grande",
                      estado: "MS",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "João Pessoa",
                      estado: "PB",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Aracaju",
                      estado: "SE",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Florianópolis",
                      estado: "SC",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    { nome: "Vitória", estado: "ES", imagem: "/placeholder.svg?height=200&width=300" },
                    { nome: "Cuiabá", estado: "MT", imagem: "/placeholder.svg?height=200&width=300" },
                    {
                      nome: "Porto Velho",
                      estado: "RO",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Boa Vista",
                      estado: "RR",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                  ].map((cidade, index) => (
                    <Card
                      key={index}
                      className="flex-shrink-0 w-72 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                    >
                      <div className="aspect-video relative">
                        <Image
                          src={cidade.imagem || "/placeholder.svg"}
                          alt={`${cidade.nome} - ${cidade.estado}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="font-semibold text-lg">{cidade.nome}</h3>
                          <p className="text-sm opacity-90">{cidade.estado}</p>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-green-500 text-white">Credenciada</Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">Clínicas ativas</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {/* Duplicate set for seamless loop */}
                  {[
                    {
                      nome: "São Paulo",
                      estado: "SP",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Rio de Janeiro",
                      estado: "RJ",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Belo Horizonte",
                      estado: "MG",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Salvador",
                      estado: "BA",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Fortaleza",
                      estado: "CE",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Brasília",
                      estado: "DF",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Curitiba",
                      estado: "PR",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Recife",
                      estado: "PE",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Porto Alegre",
                      estado: "RS",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Manaus",
                      estado: "AM",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Belém",
                      estado: "PA",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                    {
                      nome: "Goiânia",
                      estado: "GO",
                      imagem: "/placeholder.svg?height=200&width=300",
                    },
                  ].map((cidade, index) => (
                    <Card
                      key={`duplicate-${index}`}
                      className="flex-shrink-0 w-72 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                    >
                      <div className="aspect-video relative">
                        <Image
                          src={cidade.imagem || "/placeholder.svg"}
                          alt={`${cidade.nome} - ${cidade.estado}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="font-semibold text-lg">{cidade.nome}</h3>
                          <p className="text-sm opacity-90">{cidade.estado}</p>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-green-500 text-white">Credenciada</Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">Clínicas ativas</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" className="border-green-200 hover:bg-green-50">
                Ver Todas as Clínicas
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Parceiros Exclusivos */}
      <AnimatedSection>
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
              <AnimatedSection delay={200}>
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
              </AnimatedSection>

              {/* Spectrum Hub */}
              <AnimatedSection delay={400}>
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
              </AnimatedSection>
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
      </AnimatedSection>

      {/* Segurança e Transparência */}
      <AnimatedSection>
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Segurança e Transparência</h2>
              <p className="text-xl text-gray-600">Com a TEAcolhe Saúde, você tem total controle e tranquilidade</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { titulo: "Token Único", descricao: "Validação de agendamento via token exclusivo", icone: Lock },
                {
                  titulo: "Controle em Tempo Real",
                  descricao: "Acompanhe suas sessões em tempo real",
                  icone: Activity,
                },
                { titulo: "Regras Claras", descricao: "Regras de cancelamento transparentes", icone: FileText },
                {
                  titulo: "Clínicas Verificadas",
                  descricao: "Profissionais qualificados e verificados",
                  icone: UserCheck,
                },
              ].map((item, index) => (
                <AnimatedSection key={index} delay={index * 200}>
                  <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="bg-gradient-to-br from-blue-100 to-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <item.icone className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{item.titulo}</h3>
                      <p className="text-gray-600 text-sm">{item.descricao}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection>
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tire suas principais dúvidas sobre os planos e serviços da TEAcolhe Saúde
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <FAQAccordion />
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
      </AnimatedSection>

      {/* CTA Final */}
      <AnimatedSection>
        <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Pronto para transformar a jornada terapêutica do seu filho?
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Cadastre-se gratuitamente, escolha o plano ideal e comece a agendar sessões hoje mesmo, com apenas alguns
              cliques.
            </p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Heart className="w-5 h-5 mr-2" />
              Fazer Cadastro Gratuito
            </Button>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-10 left-10 animate-float">
            <Heart className="w-12 h-12 text-white/20" />
          </div>
          <div className="absolute bottom-10 right-10 animate-float delay-300">
            <Sparkles className="w-10 h-10 text-white/20" />
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/logo-branco.png"
                alt="TEAcolhe Saúde"
                width={180}
                height={40}
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm">
                Revolucionando o acesso a terapias para crianças com TEA e outras PCDs.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Planos</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Plano Essencial
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Plano Sem Limite
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Comparar Planos
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookies
                  </a>
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
