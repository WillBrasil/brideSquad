"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Sparkles,
  Bell,
  User,
  LogOut,
  Plus,
  Search,
  MoreHorizontal,
  Edit,
  Trash2,
  Share2,
  Calendar,
  MapPin,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Adicionar verificação de acesso no início da função
export default function DashboardPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [hasAccess, setHasAccess] = useState(true)

  // Simular verificação de acesso ao carregar a página
  useEffect(() => {
    // Em um ambiente real, você faria uma chamada à API para verificar
    // se o usuário tem acesso ao dashboard (plano pago)
    const checkAccess = async () => {
      setIsLoading(true)
      try {
        // Simulação de verificação de acesso
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Para fins de demonstração, vamos assumir que o usuário tem acesso
        // Em um ambiente real, isso viria da resposta da API
        setHasAccess(true)

        // Se não tiver acesso, redirecionar para a página de preview
        if (!hasAccess) {
          router.push("/preview-only")
        }
      } catch (error) {
        console.error("Erro ao verificar acesso:", error)
        router.push("/preview-only")
      } finally {
        setIsLoading(false)
      }
    }

    checkAccess()
  }, [router])

  // Mostrar loading enquanto verifica acesso
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-pink-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Carregando seu painel...</p>
        </div>
      </div>
    )
  }

  // Dados simulados de cartões criados
  const cards = [
    {
      id: "abc123",
      title: "Despedida da Ana",
      date: "15 de Junho, 2024",
      location: "Praia do Forte, Bahia",
      status: "published",
      color: "from-pink-400 to-pink-600",
      emoji: "🎉",
      views: 45,
      messages: 8,
      lastEdited: "2 dias atrás",
    },
    {
      id: "def456",
      title: "Celebração da Juliana",
      date: "22 de Julho, 2024",
      location: "Campos do Jordão, SP",
      status: "draft",
      color: "from-purple-400 to-purple-600",
      emoji: "💃",
      views: 0,
      messages: 0,
      lastEdited: "5 horas atrás",
    },
  ]

  // Modificar a função handleEditCard para incluir a criação de novos cartões
  const handleEditCard = (id: string) => {
    router.push(`/dashboard/edit/${id}`)
  }

  // Modificar o botão "Novo Cartão" para usar a função handleCreateNewCard
  const handleCreateNewCard = () => {
    // Gerar um ID único para o novo cartão
    const newId = `new-${Date.now()}`
    router.push(`/dashboard/edit/${newId}`)
  }

  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm py-3 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Sparkles className="h-6 w-6 text-pink-600" />
            <span className="ml-2 font-bold text-xl text-pink-700">BrideSquad</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-pink-500 rounded-full"></span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-pink-200 text-pink-700">MS</AvatarFallback>
                  </Avatar>
                  <span>Mariana Silva</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Perfil</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Sparkles className="mr-2 h-4 w-4" />
                  <span>Meus Cartões</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sair</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Meu Painel</h1>
            <p className="text-gray-600">Gerencie seus cartões e planejamentos</p>
          </div>

          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar cartões..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button className="bg-pink-600 hover:bg-pink-700" onClick={handleCreateNewCard}>
              <Plus className="mr-2 h-4 w-4" />
              Novo Cartão
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="published">Publicados</TabsTrigger>
            <TabsTrigger value="draft">Rascunhos</TabsTrigger>
          </TabsList>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCards.map((card) => (
              <Card key={card.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className={`h-3 bg-gradient-to-r ${card.color}`}></div>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{card.emoji}</span>
                      <CardTitle>{card.title}</CardTitle>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-5 w-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleEditCard(card.id)}>
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Editar</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Share2 className="mr-2 h-4 w-4" />
                          <span>Compartilhar</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Excluir</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardDescription>
                    <div className="flex flex-col space-y-1 mt-1">
                      <div className="flex items-center text-gray-500">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        <span className="text-xs">{card.date}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <MapPin className="h-3.5 w-3.5 mr-1" />
                        <span className="text-xs">{card.location}</span>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <Badge
                        variant={card.status === "published" ? "default" : "outline"}
                        className={card.status === "published" ? "bg-green-500" : ""}
                      >
                        {card.status === "published" ? "Publicado" : "Rascunho"}
                      </Badge>
                    </div>
                    <div className="flex items-center text-gray-500 text-xs">
                      <span>Editado: {card.lastEdited}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-3 border-t">
                  <div className="flex space-x-3 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Users className="h-3.5 w-3.5 mr-1" />
                      <span>{card.views} visualizações</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="h-3.5 w-3.5 mr-1" />
                      <span>{card.messages} mensagens</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-pink-600 hover:text-pink-700 hover:bg-pink-50 p-0"
                    onClick={() => handleEditCard(card.id)}
                  >
                    Editar
                  </Button>
                </CardFooter>
              </Card>
            ))}

            {/* Card para criar novo */}
            <Card
              className="border-dashed border-2 border-gray-200 flex flex-col items-center justify-center p-6 h-[250px] hover:border-pink-300 transition-colors cursor-pointer"
              onClick={handleCreateNewCard}
            >
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                <Plus className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="font-medium text-gray-700 mb-1">Criar Novo Cartão</h3>
              <p className="text-gray-500 text-sm text-center">Comece a planejar uma nova despedida</p>
            </Card>
          </div>
        </Tabs>
      </main>

      <footer className="bg-white py-4 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} BrideSquad. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}

// Componente MessageSquare (já que não está disponível diretamente no lucide-react)
function MessageSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

