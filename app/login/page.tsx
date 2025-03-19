"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Sparkles, ArrowRight, Mail, Lock, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  // Adicionar um estado para simular se o usuário tem plano pago
  const [hasPaidPlan, setHasPaidPlan] = useState(false)

  // Modificar a função handleLogin para verificar se o usuário tem plano pago
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Por favor, preencha todos os campos")
      return
    }

    setIsLoading(true)

    try {
      console.log("Iniciando login...")
      // Simulação de login - em produção, isso seria uma chamada real à API
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Login bem sucedido, verificando plano...")
      // Verifica se o usuário tem plano pago
      const targetPath = hasPaidPlan ? "/dashboard" : "/preview-only"
      console.log(`Redirecionando para: ${targetPath}`)
      
      // Tenta primeiro com router.push
      try {
        await router.push(targetPath)
      } catch (navigationError) {
        console.error("Erro na navegação com router.push:", navigationError)
        // Se falhar, tenta com window.location
        window.location.href = targetPath
      }
    } catch (err) {
      console.error("Erro detalhado no login:", err)
      setError("Falha no login. Verifique suas credenciais.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Por favor, preencha todos os campos")
      return
    }

    setIsLoading(true)

    // Simulação de registro
    try {
      // Aqui você faria a chamada real para sua API de registro
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Redirecionar para o dashboard após registro bem-sucedido
      router.push("/dashboard")
    } catch (err) {
      setError("Falha no registro. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 flex flex-col">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Sparkles className="h-6 w-6 text-pink-600" />
            <span className="ml-2 font-bold text-xl text-pink-700">BrideSquad</span>
          </Link>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="mb-6">
            <Link href="/">
              <Button variant="ghost" className="flex items-center text-pink-600 pl-0">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Voltar para a página inicial
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-pink-400 to-purple-500 p-6 text-white text-center">
              <Sparkles className="h-10 w-10 mx-auto mb-3" />
              <h1 className="text-2xl font-bold">Bem-vinda ao BrideSquad</h1>
              <p className="text-pink-100">Planeje a despedida perfeita</p>
            </div>

            <Tabs defaultValue="login" className="p-6">
              <TabsList className="grid grid-cols-2 mb-6">
                <TabsTrigger value="login">Entrar</TabsTrigger>
                <TabsTrigger value="register">Criar Conta</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="password">Senha</Label>
                      <Link href="/forgot-password" className="text-xs text-pink-600 hover:text-pink-700">
                        Esqueceu a senha?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  {error && <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">{error}</div>}

                  <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700" disabled={isLoading}>
                    {isLoading ? "Entrando..." : "Entrar"}
                    {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="paid-plan"
                        className="mr-2 h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                        checked={hasPaidPlan}
                        onChange={(e) => setHasPaidPlan(e.target.checked)}
                      />
                      <label htmlFor="paid-plan" className="text-sm text-gray-600">
                        Simular usuário com plano pago
                      </label>
                    </div>
                    <Link href="/plano" className="text-sm text-pink-600 hover:text-pink-700">
                      Ver planos
                    </Link>
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                      Ainda não tem uma conta? Conheça nosso{" "}
                      <Link href="/plano" className="text-pink-600 hover:text-pink-700 font-medium">
                        Plano Premium por R$ 29,90/mês
                      </Link>
                    </p>
                  </div>
                </form>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-gray-500">Ou continue com</span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full">
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                      Google
                    </Button>
                    <Button variant="outline" className="w-full">
                      <svg className="mr-2 h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                      Facebook
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">Nome completo</Label>
                    <Input id="register-name" placeholder="Seu nome" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="seu@email.com"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password">Senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="register-password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <p className="text-xs text-gray-500">A senha deve ter pelo menos 8 caracteres</p>
                  </div>

                  {error && <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">{error}</div>}

                  <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700" disabled={isLoading}>
                    {isLoading ? "Criando conta..." : "Criar conta"}
                    {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>

                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                      Conheça nosso{" "}
                      <Link href="/plano" className="text-pink-600 hover:text-pink-700 font-medium">
                        Plano Premium por R$ 29,90/mês
                      </Link>
                    </p>
                  </div>

                  <p className="text-xs text-center text-gray-500">
                    Ao criar uma conta, você concorda com nossos{" "}
                    <Link href="/terms" className="text-pink-600 hover:text-pink-700">
                      Termos de Serviço
                    </Link>{" "}
                    e{" "}
                    <Link href="/privacy" className="text-pink-600 hover:text-pink-700">
                      Política de Privacidade
                    </Link>
                    .
                  </p>
                </form>
              </TabsContent>
            </Tabs>
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

