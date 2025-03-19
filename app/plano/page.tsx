import Link from "next/link"
import { Sparkles, Check, ChevronLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PlanoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 flex flex-col">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Sparkles className="h-6 w-6 text-pink-600" />
            <span className="ml-2 font-bold text-xl text-pink-700">BrideSquad</span>
          </Link>
          <div>
            <Link
              href="/login"
              className="bg-pink-600 text-white px-4 py-2 rounded-full font-medium shadow-md hover:bg-pink-700 transition-all"
            >
              Entrar
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="flex items-center text-pink-600 pl-0">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Voltar para a página inicial
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4">Plano Premium</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tudo o que você precisa para criar a despedida de solteira perfeita
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <Card className="border-pink-200 shadow-lg h-full">
                <CardHeader className="text-center pb-4 border-b">
                  <div className="bg-pink-100 text-pink-700 text-sm font-medium px-3 py-1 rounded-full inline-block mb-2">
                    Mais Popular
                  </div>
                  <CardTitle className="text-2xl text-pink-700">Plano Premium</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">R$ 29,90</span>
                    <span className="text-gray-500 ml-2">/mês</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Cancele a qualquer momento</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Fotos e vídeos ilimitados</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Mensagens ilimitadas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>10 modelos de cartões exclusivos</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Músicas personalizadas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Download em alta qualidade</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Cupons de desconto para parceiros</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Suporte prioritário</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Compartilhamento em redes sociais</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-pink-600 hover:bg-pink-700 py-6 text-lg">
                    Contratar Agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-pink-700 mb-6">Por que escolher o Plano Premium?</h2>

              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-pink-100">
                  <h3 className="font-medium text-lg mb-2">Crie memórias inesquecíveis</h3>
                  <p className="text-gray-600">
                    Com o plano Premium, você pode criar cartões de memórias ilimitados com fotos, vídeos e mensagens
                    personalizadas para a noiva.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-pink-100">
                  <h3 className="font-medium text-lg mb-2">Planeje com facilidade</h3>
                  <p className="text-gray-600">
                    Acesse ferramentas exclusivas para planejar roteiros, organizar responsabilidades e encontrar
                    inspirações para a despedida perfeita.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-pink-100">
                  <h3 className="font-medium text-lg mb-2">Compartilhe com as madrinhas</h3>
                  <p className="text-gray-600">
                    Compartilhe facilmente todos os detalhes com as madrinhas e a noiva, garantindo que todos estejam
                    alinhados para o grande dia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border mb-12">
            <h2 className="text-2xl font-bold text-pink-700 mb-6">Perguntas Frequentes</h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Como funciona o período de teste?</AccordionTrigger>
                <AccordionContent>
                  Você tem acesso a 14 dias de teste grátis ao assinar o plano Premium. Durante esse período, você pode
                  cancelar a qualquer momento sem ser cobrado.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Posso cancelar a assinatura quando quiser?</AccordionTrigger>
                <AccordionContent>
                  Sim! Você pode cancelar sua assinatura a qualquer momento. Após o cancelamento, você continuará tendo
                  acesso ao plano Premium até o final do período pago.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Quais formas de pagamento são aceitas?</AccordionTrigger>
                <AccordionContent>
                  Aceitamos cartões de crédito (Visa, Mastercard, American Express), PayPal e Pix para pagamentos
                  mensais ou anuais.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Existe um plano para equipes de madrinhas?</AccordionTrigger>
                <AccordionContent>
                  Sim! Temos o Plano Grupo por R$ 99,90/mês, que oferece acesso para até 10 madrinhas, área de
                  colaboração em tempo real e ferramentas avançadas de planejamento.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Por quanto tempo os cartões ficam disponíveis?</AccordionTrigger>
                <AccordionContent>
                  Os cartões e conteúdos criados ficam disponíveis enquanto sua assinatura estiver ativa. Você pode
                  baixar e salvar seus cartões a qualquer momento.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="text-center bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Pronta para começar?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Assine agora e comece a planejar a despedida de solteira perfeita
            </p>
            <Button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-6 rounded-full font-medium text-lg">
              Contratar por R$ 29,90/mês
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm mt-4 text-pink-100">14 dias de teste grátis. Cancele quando quiser.</p>
          </div>
        </div>
      </div>

      <footer className="bg-white py-6 border-t mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} BrideSquad. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

