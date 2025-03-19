"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Sparkles, ChevronLeft, ArrowRight, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function PreviewOnlyPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 flex flex-col">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Sparkles className="h-6 w-6 text-pink-600" />
            <span className="ml-2 font-bold text-xl text-pink-700">BrideSquad</span>
          </Link>
          <div>
            <Button variant="outline" size="sm" className="mr-2" onClick={() => router.push("/login")}>
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="mb-6">
          <Link href="/login">
            <Button variant="ghost" className="flex items-center text-pink-600 pl-0">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Voltar para o login
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <Alert className="mb-8 bg-yellow-50 border-yellow-200">
            <Lock className="h-5 w-5 text-yellow-600" />
            <AlertTitle className="text-yellow-800 ml-2">Acesso Limitado</AlertTitle>
            <AlertDescription className="text-yellow-700">
              Você está visualizando apenas um exemplo de cartão. Para criar e gerenciar seus próprios cartões, assine o
              plano Premium.
            </AlertDescription>
          </Alert>

          {/* Exemplo de Cartão */}
          <Card className="mb-8 overflow-hidden shadow-md">
            <div className="h-3 bg-gradient-to-r from-pink-400 to-pink-600"></div>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🎉</span>
                  <CardTitle>Despedida da Ana</CardTitle>
                </div>
                <Badge className="bg-gray-500">Exemplo</Badge>
              </div>
              <div className="flex flex-col space-y-1 mt-1">
                <div className="flex items-center text-gray-500">
                  <span className="text-xs">15 de Junho, 2024</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <span className="text-xs">Praia do Forte, Bahia</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative h-[200px] bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg overflow-hidden mb-4">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4">
                    <h1 className="text-2xl font-bold text-white mb-2">Despedida da Ana</h1>
                    <p className="text-white">
                      Um fim de semana inesquecível para celebrar a última aventura de solteira!
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <p className="italic text-gray-700 mb-2">
                    "Ana, que essa nova fase seja repleta de amor e felicidade! Estou muito feliz por você!"
                  </p>
                  <div className="flex items-center">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarFallback className="bg-pink-200 text-pink-700">J</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">Juliana Costa</span>
                  </div>
                </div>

                <div className="border-l-2 border-pink-300 pl-4">
                  <div className="flex">
                    <div className="w-20 font-medium text-pink-600">19:00</div>
                    <div>
                      <h4 className="font-medium">Jantar de boas-vindas</h4>
                      <p className="text-gray-500 text-sm">Restaurante do resort</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 border-t flex justify-between">
              <div className="text-sm text-gray-500">Exemplo de cartão</div>
              <div className="text-sm text-gray-500">Acesso limitado</div>
            </CardFooter>
          </Card>

          {/* Bloqueio de Recursos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="border-dashed border-2 border-gray-200 bg-gray-50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-5 w-5 mr-2 text-gray-400" />
                  <span className="text-gray-500">Gerenciamento de Cartões</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center py-8">
                <p className="text-gray-500 mb-4">Crie e gerencie múltiplos cartões para diferentes eventos</p>
                <Lock className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                <p className="text-sm text-gray-400">Recurso disponível no plano Premium</p>
              </CardContent>
            </Card>

            <Card className="border-dashed border-2 border-gray-200 bg-gray-50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-5 w-5 mr-2 text-gray-400" />
                  <span className="text-gray-500">Galeria de Fotos</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center py-8">
                <p className="text-gray-500 mb-4">Adicione fotos ilimitadas aos seus cartões</p>
                <Lock className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                <p className="text-sm text-gray-400">Recurso disponível no plano Premium</p>
              </CardContent>
            </Card>
          </div>

          {/* CTA para assinar o plano */}
          <div className="text-center bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Desbloqueie todos os recursos</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Assine o plano Premium por apenas R$ 29,90/mês e crie cartões ilimitados para suas despedidas
            </p>
            <Button
              className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium"
              onClick={() => router.push("/plano")}
            >
              Assinar Plano Premium
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-sm mt-4 text-pink-100">14 dias de teste grátis. Cancele quando quiser.</p>
          </div>
        </div>
      </div>

      <footer className="bg-white py-4 border-t mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} BrideSquad. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}

