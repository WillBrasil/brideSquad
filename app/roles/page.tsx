import BridesmaidRoles from "@/components/bridesmaid-roles"
import Link from "next/link"
import { ChevronLeft, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RolesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Sparkles className="h-6 w-6 text-pink-600" />
            <span className="ml-2 font-bold text-xl text-pink-700">BrideSquad</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/memories" className="text-pink-800 hover:text-pink-600 font-medium">
              Memórias
            </Link>
            <Link href="/planner" className="text-pink-800 hover:text-pink-600 font-medium">
              Roteiros
            </Link>
            <Link href="/looks" className="text-pink-800 hover:text-pink-600 font-medium">
              Looks
            </Link>
            <Link href="/roles" className="text-pink-800 hover:text-pink-600 font-medium">
              Madrinhas
            </Link>
            <Link href="/pricing" className="text-pink-800 hover:text-pink-600 font-medium">
              Planos
            </Link>
          </nav>
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

      <div className="relative py-12 mb-8 bg-gradient-to-r from-green-100 to-yellow-100">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-6">
            <Link href="/">
              <Button variant="ghost" className="flex items-center text-pink-600">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Voltar para a página inicial
              </Button>
            </Link>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4">Função de Cada Madrinha</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Organize as responsabilidades e deixe recados especiais para a noiva
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <BridesmaidRoles />
      </div>
    </div>
  )
}

