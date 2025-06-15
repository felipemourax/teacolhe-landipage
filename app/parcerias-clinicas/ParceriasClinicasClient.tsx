"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Calendar, Shield, Zap, Clock, FileText, ChevronRight } from "lucide-react"

export default function ParceriasClinicasClient() {
  function ClinicFAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const faqs = [
      {
        pergunta: "Quais os requisitos para credenciar minha clínica?",
        resposta:
          "CNPJ ativo, alvará de funcionamento, responsável técnico registrado no conselho de classe e atuação em pelo menos uma especialidade terapêutica voltada ao TEA.",
      },
      {
        pergunta: "Como funciona o pagamento?",
        resposta:
          "Você pode escolher: D+3 com taxa de 5%, ou D+30 sem taxa. Pagamentos são automáticos e por sessão realizada. Sem glosas, sem inadimplência.",
      },
      {
        pergunta: "Preciso atender exclusivamente pacientes da TEAcolhe?",
        resposta:
          "Não. A parceria é não exclusiva, sua clínica continua com total autonomia para atender pacientes particulares ou de outros convênios.",
      },
      {
        pergunta: "Como são definidos os valores?",
        resposta:
          "A TEAcolhe trabalha com uma tabela por especialidade compatível com o mercado. Durante o credenciamento e ativação do seu cadastro, você visualiza os valores no seu dashboard e escolhe se deseja participar.",
      },
      {
        pergunta: "Quanto tempo leva para começar?",
        resposta:
          "O credenciamento é 100% digital. Após envio da documentação e assinatura do contrato, sua clínica pode ser ativada em até 48 horas e começar a receber agendamentos.",
      },
      {
        pergunta: "Existe algum custo para minha clínica participar?",
        resposta:
          "Não há taxa de adesão ou mensalidade. A remuneração da TEAcolhe ocorre apenas pela taxa do D+3 ou valor fixo dos planos vendidos aos pacientes.",
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
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#planos" className="text-gray-700 hover:text-green-600 transition-colors">
              Planos
            </Link>
            <Link href="/#terapias" className="text-gray-700 hover:text-green-600 transition-colors">
              Terapias
            </Link>
            <Link href="/parcerias-clinicas" className="text-green-600 font-medium">
              Para Clínicas
            </Link>
            <Link href="/beneficios-profissionais" className="text-gray-700 hover:text-green-600 transition-colors">
              Para Profissionais
            </Link>
            <Button className="bg-green-600 hover:bg-green-700">Fazer Cadastro</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white text-green-800 mb-4">Programa de Parcerias</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Torne-se uma Clínica Parceira da TEAcolhe Saúde</h1>
              <p className="text-xl mb-8 opacity-90">
                Amplie seu alcance, garanta pagamentos sem glosas e aumente sua receita com nosso programa de parcerias.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Credenciar minha clínica
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-600/30">
                  Saiba mais
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <Image
                src="/images/clinica-teacolhe.svg"
                alt="Clínica parceira"
                width={500}
                height={400}
                className="drop-shadow-lg"
                style={{
                  filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 3px rgba(0, 0, 0, 0.08))",
                }}
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-800">520+ clínicas já credenciadas</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefícios para Clínicas Parceiras</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ao se tornar uma clínica parceira da TEAcolhe Saúde, você terá acesso a diversos benefícios exclusivos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Pagamento Garantido",
                description:
                  "Receba por cada atendimento realizado, sem glosas e sem inadimplência. Pagamentos em D+1 ou D+30.",
              },
              {
                icon: Users,
                title: "Aumento de Pacientes",
                description:
                  "Acesso a uma base crescente de famílias em busca de terapias especializadas para crianças com TEA.",
              },
              {
                icon: Calendar,
                title: "Gestão Simplificada",
                description:
                  "Sistema completo para gerenciamento de agenda, controle de atendimentos e relatórios financeiros.",
              },
              {
                icon: Zap,
                title: "Marketing Digital",
                description:
                  "Sua clínica será divulgada em nosso site e aplicativo, aumentando sua visibilidade no mercado.",
              },
              {
                icon: Clock,
                title: "Redução de Burocracia",
                description: "Processo de credenciamento 100% digital e sem papelada. Aprovação em até 48 horas.",
              },
              {
                icon: FileText,
                title: "Suporte Especializado",
                description:
                  "Equipe dedicada para auxiliar em todas as etapas, desde o credenciamento até o dia a dia operacional.",
              },
            ].map((beneficio, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <beneficio.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{beneficio.title}</h3>
                  <p className="text-gray-600">{beneficio.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Como Funciona o Credenciamento</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Processo simples e rápido para começar a atender pacientes da TEAcolhe Saúde
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                numero: "1",
                titulo: "Cadastro Online",
                descricao: "Preencha o formulário de credenciamento com os dados da sua clínica",
              },
              {
                numero: "2",
                titulo: "Verificação",
                descricao: "Nossa equipe verifica as informações e documentação em até 48h",
              },
              {
                numero: "3",
                titulo: "Contrato",
                descricao: "Assinatura digital do contrato de parceria e definição do modelo de pagamento",
              },
              {
                numero: "4",
                titulo: "Ativação",
                descricao: "Sua clínica é ativada na plataforma e começa a receber agendamentos",
              },
            ].map((passo, index) => (
              <Card
                key={index}
                className="relative p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
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
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O Que Dizem Nossas Clínicas Parceiras</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça a experiência de quem já faz parte da nossa rede credenciada
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                nome: "Dra. Ana Silva",
                cargo: "Diretora Clínica | Centro Terapêutico Vida",
                depoimento:
                  "Desde que nos tornamos parceiros da TEAcolhe Saúde, aumentamos em 40% o número de pacientes. O melhor é a garantia de pagamento e a redução da burocracia.",
                imagem: "/placeholder.svg?height=100&width=100",
              },
              {
                nome: "Dr. Carlos Mendes",
                cargo: "Proprietário | Clínica Desenvolver",
                depoimento:
                  "A plataforma de gestão é excelente e nos ajuda a organizar melhor os atendimentos. O suporte é rápido e eficiente quando precisamos de ajuda.",
                imagem: "/placeholder.svg?height=100&width=100",
              },
              {
                nome: "Dra. Patrícia Oliveira",
                cargo: "Coordenadora | Instituto Crescer",
                depoimento:
                  "A parceria com a TEAcolhe Saúde nos permitiu focar no que realmente importa: o atendimento de qualidade. A parte financeira e administrativa ficou muito mais simples.",
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

      {/* FAQ Section - Updated */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre o programa de parcerias da TEAcolhe Saúde
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ClinicFAQAccordion />
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

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para se tornar uma clínica parceira?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Junte-se a mais de 520 clínicas em todo o Brasil e faça parte da maior rede de atendimento especializado
            para crianças com TEA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg">
              Credenciar minha clínica
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-600/30 text-lg">
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
                    Credenciamento
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
