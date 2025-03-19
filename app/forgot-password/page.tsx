"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Sparkles, ArrowRight, Mail, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess(false)

    if (!email) {
      setError("Por favor, informe seu email")
      return
    }

    setIsLoading(true)

    // Simulação de envio de email
    try {
      // Aqui você faria a chamada real para sua API
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSuccess(true)
    } catch (err) {
      setError("Não foi possível enviar o email de recuperação. Tente novamente.")
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
            <Link href="/login">
              <Button variant="ghost" className="flex items-center text-pink-600 pl-0">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Voltar para o login
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-pink-400 to-purple-500 p-6 text-white text-center">
              <Mail className="h-10 w-10 mx-auto mb-3" />
              <h1 className="text-2xl font-bold">Recuperar Senha</h1>
              <p className="text-pink-100">Enviaremos instruções para seu email</p>
            </div>

            <div className="p-6">
              {success ? (
                <Alert className="bg-green-50 border-green-200">
                  <AlertTitle className="text-green-800">Email enviado!</AlertTitle>
                  <AlertDescription className="text-green-700">
                    Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.
                  </AlertDescription>
                </Alert>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
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

                  {error && <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">{error}</div>}

                  <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700" disabled={isLoading}>
                    {isLoading ? "Enviando..." : "Enviar instruções"}
                    {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              )}

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Lembrou sua senha?{" "}
                  <Link href="/login" className="text-pink-600 hover:text-pink-700 font-medium">
                    Voltar para o login
                  </Link>
                </p>
              </div>
            </div>
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

