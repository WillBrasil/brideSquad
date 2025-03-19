"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
// Adicionar os imports necessários para os novos ícones
import {
  Sparkles,
  User,
  LogOut,
  ChevronLeft,
  Save,
  Eye,
  ImageIcon,
  Calendar,
  MapPin,
  Clock,
  Music,
  MessageSquare,
  Trash2,
  Plus,
  X,
  Share2,
  Image,
  LayoutGrid,
  Quote,
  Camera,
  Megaphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function EditCardPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [isSaving, setIsSaving] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [activeTab, setActiveTab] = useState("basic")

  // Atualizar o estado inicial para incluir todos os elementos da página principal
  const [cardData, setCardData] = useState({
    id: params.id,
    title: "Despedida da Ana",
    description: "Um fim de semana inesquecível para celebrar a última aventura de solteira da Ana!",
    date: "2024-06-15",
    location: "Praia do Forte, Bahia",
    coverImage: null,
    status: "published",

    // Seções da página principal
    hero: {
      title: "Crie Memórias Inesquecíveis",
      subtitle: "Planeje a despedida de solteira perfeita e guarde as memórias para sempre",
      backgroundImage: null,
    },

    features: [
      {
        id: 1,
        title: "Criador de Memórias",
        description: "Crie cartões digitais com fotos, vídeos e mensagens personalizadas",
        icon: "📸",
        color: "bg-pink-100",
        image: null,
      },
      {
        id: 2,
        title: "Planejador de Roteiros",
        description: "Organize o roteiro perfeito com sugestões personalizadas",
        icon: "🗓️",
        color: "bg-purple-100",
        image: null,
      },
      {
        id: 3,
        title: "Ideias de Looks",
        description: "Encontre inspirações para looks, fantasias e acessórios",
        icon: "👗",
        color: "bg-blue-100",
        image: null,
      },
      {
        id: 4,
        title: "Função das Madrinhas",
        description: "Organize as responsabilidades e deixe recados especiais",
        icon: "👯‍♀️",
        color: "bg-green-100",
        image: null,
      },
    ],

    testimonials: [
      {
        id: 1,
        name: "Juliana Costa",
        role: "Madrinha",
        quote: "Super fácil de usar! Conseguimos planejar cada detalhe e criar memórias que vão durar para sempre.",
      },
      {
        id: 2,
        name: "Fernanda Oliveira",
        role: "Noiva",
        quote:
          "As ferramentas de planejamento são incríveis! Tudo ficou organizado e o cartão de memórias emocionou a todas nós.",
      },
      {
        id: 3,
        name: "Mariana Silva",
        role: "Noiva",
        quote:
          "Graças ao BrideSquad, minha despedida foi simplesmente perfeita! As madrinhas conseguiram organizar tudo sem stress.",
      },
    ],

    gallery: [
      { id: 1, image: null, description: "Momento especial 1" },
      { id: 2, image: null, description: "Momento especial 2" },
      { id: 3, image: null, description: "Momento especial 3" },
      { id: 4, image: null, description: "Momento especial 4" },
    ],

    cta: {
      title: "Pronta para começar?",
      subtitle: "Crie memórias inesquecíveis para a despedida de solteira perfeita",
    },

    // Elementos existentes
    photos: [
      { id: 1, url: null, description: "Amigas na praia" },
      { id: 2, url: null, description: "Momento especial" },
    ],
    messages: [
      {
        id: 1,
        author: "Juliana Costa",
        content: "Ana, que essa nova fase seja repleta de amor e felicidade! Estou muito feliz por você!",
        date: "2 dias atrás",
      },
      {
        id: 2,
        author: "Fernanda Oliveira",
        content: "Amiga, você merece toda a felicidade do mundo! Mal posso esperar para celebrar com você!",
        date: "1 dia atrás",
      },
    ],
    itinerary: [
      {
        day: "Sexta-feira",
        events: [
          { id: 1, time: "16:00", activity: "Check-in no resort", location: "Resort Praia do Forte" },
          { id: 2, time: "19:00", activity: "Jantar de boas-vindas", location: "Restaurante do resort" },
          { id: 3, time: "21:30", activity: "Drinks e jogos", location: "Bar da piscina" },
        ],
      },
      {
        day: "Sábado",
        events: [
          { id: 4, time: "09:00", activity: "Café da manhã", location: "Restaurante do resort" },
          { id: 5, time: "10:30", activity: "Dia de spa", location: "Spa do resort" },
          { id: 6, time: "16:00", activity: "Sessão de fotos na praia", location: "Praia principal" },
          { id: 7, time: "20:00", activity: "Festa surpresa", location: "Área reservada do resort" },
        ],
      },
      {
        day: "Domingo",
        events: [
          { id: 8, time: "10:00", activity: "Brunch de despedida", location: "Restaurante do resort" },
          { id: 9, time: "14:00", activity: "Check-out e retorno", location: "Resort Praia do Forte" },
        ],
      },
    ],
    music: "Dancing Queen - ABBA",
    shareOptions: {
      allowComments: true,
      isPrivate: false,
      requirePassword: false,
      password: "",
      expirationDate: "",
    },
  })

  // Adicionar lógica para detectar se é um novo cartão
  useEffect(() => {
    // Se o ID começar com "new-", significa que é um novo cartão
    if (params.id.startsWith("new-")) {
      // Podemos inicializar com valores padrão para um novo cartão
      setCardData({
        ...cardData,
        title: "Novo Cartão",
        description: "Descrição do novo cartão",
        status: "draft",
      })
    }
  }, [params.id])

  // Adicionar funções para manipular os novos elementos
  const updateHero = (field: string, value: string) => {
    setCardData((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        [field]: value,
      },
    }))
  }

  const addFeature = () => {
    const newId = Math.max(0, ...cardData.features.map((f) => f.id)) + 1
    const colors = ["bg-pink-100", "bg-purple-100", "bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-red-100"]
    const icons = ["📸", "🗓️", "👗", "👯‍♀️", "💎", "🔗"]

    setCardData((prev) => ({
      ...prev,
      features: [
        ...prev.features,
        {
          id: newId,
          title: "Novo Recurso",
          description: "Descrição do novo recurso",
          icon: icons[Math.floor(Math.random() * icons.length)],
          color: colors[Math.floor(Math.random() * colors.length)],
          image: null,
        },
      ],
    }))
  }

  const updateFeature = (id: number, field: string, value: any) => {
    setCardData((prev) => ({
      ...prev,
      features: prev.features.map((feature) => (feature.id === id ? { ...feature, [field]: value } : feature)),
    }))
  }

  const removeFeature = (id: number) => {
    setCardData((prev) => ({
      ...prev,
      features: prev.features.filter((feature) => feature.id !== id),
    }))
  }

  const addTestimonial = () => {
    const newId = Math.max(0, ...cardData.testimonials.map((t) => t.id)) + 1

    setCardData((prev) => ({
      ...prev,
      testimonials: [
        ...prev.testimonials,
        {
          id: newId,
          name: "Nova Pessoa",
          role: "Madrinha",
          quote: "Adicione um depoimento aqui...",
        },
      ],
    }))
  }

  const updateTestimonial = (id: number, field: string, value: string) => {
    setCardData((prev) => ({
      ...prev,
      testimonials: prev.testimonials.map((testimonial) =>
        testimonial.id === id ? { ...testimonial, [field]: value } : testimonial,
      ),
    }))
  }

  const removeTestimonial = (id: number) => {
    setCardData((prev) => ({
      ...prev,
      testimonials: prev.testimonials.filter((testimonial) => testimonial.id !== id),
    }))
  }

  const addGalleryImage = () => {
    const newId = Math.max(0, ...cardData.gallery.map((g) => g.id)) + 1

    setCardData((prev) => ({
      ...prev,
      gallery: [
        ...prev.gallery,
        {
          id: newId,
          image: null,
          description: `Momento especial ${newId}`,
        },
      ],
    }))
  }

  const updateGalleryImage = (id: number, field: string, value: any) => {
    setCardData((prev) => ({
      ...prev,
      gallery: prev.gallery.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    }))
  }

  const removeGalleryImage = (id: number) => {
    setCardData((prev) => ({
      ...prev,
      gallery: prev.gallery.filter((item) => item.id !== id),
    }))
  }

  const updateCta = (field: string, value: string) => {
    setCardData((prev) => ({
      ...prev,
      cta: {
        ...prev.cta,
        [field]: value,
      },
    }))
  }

  // Funções para manipular os dados
  const updateBasicInfo = (field: string, value: string) => {
    setCardData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const addPhoto = () => {
    const newId = Math.max(0, ...cardData.photos.map((p) => p.id)) + 1
    setCardData((prev) => ({
      ...prev,
      photos: [...prev.photos, { id: newId, url: null, description: "" }],
    }))
  }

  const removePhoto = (id: number) => {
    setCardData((prev) => ({
      ...prev,
      photos: prev.photos.filter((photo) => photo.id !== id),
    }))
  }

  const updatePhoto = (id: number, field: string, value: any) => {
    setCardData((prev) => ({
      ...prev,
      photos: prev.photos.map((photo) => (photo.id === id ? { ...photo, [field]: value } : photo)),
    }))
  }

  const addMessage = (message: { author: string; content: string }) => {
    const newId = Math.max(0, ...cardData.messages.map((m) => m.id)) + 1
    setCardData((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        {
          id: newId,
          author: message.author,
          content: message.content,
          date: "Agora mesmo",
        },
      ],
    }))
  }

  const removeMessage = (id: number) => {
    setCardData((prev) => ({
      ...prev,
      messages: prev.messages.filter((message) => message.id !== id),
    }))
  }

  const addDay = () => {
    const days = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"]
    const usedDays = cardData.itinerary.map((i) => i.day)
    const availableDays = days.filter((day) => !usedDays.includes(day))

    if (availableDays.length > 0) {
      setCardData((prev) => ({
        ...prev,
        itinerary: [...prev.itinerary, { day: availableDays[0], events: [] }],
      }))
    }
  }

  const removeDay = (day: string) => {
    setCardData((prev) => ({
      ...prev,
      itinerary: prev.itinerary.filter((item) => item.day !== day),
    }))
  }

  const addEvent = (day: string) => {
    const allEvents = cardData.itinerary.flatMap((i) => i.events)
    const newId = Math.max(0, ...allEvents.map((e) => e.id)) + 1

    setCardData((prev) => ({
      ...prev,
      itinerary: prev.itinerary.map((item) =>
        item.day === day
          ? { ...item, events: [...item.events, { id: newId, time: "12:00", activity: "", location: "" }] }
          : item,
      ),
    }))
  }

  const removeEvent = (dayIndex: number, eventId: number) => {
    setCardData((prev) => ({
      ...prev,
      itinerary: prev.itinerary.map((item, idx) =>
        idx === dayIndex ? { ...item, events: item.events.filter((event) => event.id !== eventId) } : item,
      ),
    }))
  }

  const updateEvent = (dayIndex: number, eventId: number, field: string, value: string) => {
    setCardData((prev) => ({
      ...prev,
      itinerary: prev.itinerary.map((item, idx) =>
        idx === dayIndex
          ? {
              ...item,
              events: item.events.map((event) => (event.id === eventId ? { ...event, [field]: value } : event)),
            }
          : item,
      ),
    }))
  }

  const updateShareOptions = (field: string, value: any) => {
    setCardData((prev) => ({
      ...prev,
      shareOptions: {
        ...prev.shareOptions,
        [field]: value,
      },
    }))
  }

  const handleSave = async () => {
    setIsSaving(true)

    // Simulação de salvamento
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSaving(false)
    setShowSuccessMessage(true)

    // Esconder a mensagem após 3 segundos
    setTimeout(() => {
      setShowSuccessMessage(false)
    }, 3000)
  }

  const handlePreview = () => {
    router.push(`/preview/${params.id}`)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm py-3 border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="mr-2">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Voltar
              </Button>
            </Link>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-gray-800">Editando: {cardData.title}</h1>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={handlePreview}>
              <Eye className="h-4 w-4 mr-2" />
              Visualizar
            </Button>

            <Button className="bg-pink-600 hover:bg-pink-700" size="sm" onClick={handleSave} disabled={isSaving}>
              {isSaving ? (
                <>Salvando...</>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Salvar
                </>
              )}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-pink-200 text-pink-700">MS</AvatarFallback>
                  </Avatar>
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

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-16 right-4 z-50 max-w-md">
          <Alert className="bg-green-50 border-green-200 text-green-800">
            <AlertDescription className="flex items-center">
              <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Alterações salvas com sucesso!
            </AlertDescription>
          </Alert>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-4 sticky top-20">
              {/* Atualizar a navegação para incluir as novas seções */}
              <nav className="space-y-1">
                <Button
                  variant={activeTab === "basic" ? "default" : "ghost"}
                  className={`w-full justify-start ${activeTab === "basic" ? "bg-pink-600 hover:bg-pink-700" : ""}`}
                  onClick={() => setActiveTab("basic")}
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  Informações Básicas
                </Button>
                <Button
                  variant={activeTab === "hero" ? "default" : "ghost"}
                  className={`w-full justify-start ${activeTab === "hero" ? "bg-pink-600 hover:bg-pink-700" : ""}`}
                  onClick={() => setActiveTab("hero")}
                >
                  <Image className="h-4 w-4 mr-2" />
                  Banner Principal
                </Button>
                <Button
                  variant={activeTab === "features" ? "default" : "ghost"}
                  className={`w-full justify-start ${activeTab === "features" ? "bg-pink-600 hover:bg-pink-700" : ""}`}
                  onClick={() => setActiveTab("features")}
                >
                  <LayoutGrid className="h-4 w-4 mr-2" />
                  Recursos
                </Button>
                <Button
                  variant={activeTab === "testimonials" ? "default" : "ghost"}
                  className={`w-full justify-start ${activeTab === "testimonials" ? "bg-pink-600 hover:bg-pink-700" : ""}`}
                  onClick={() => setActiveTab("testimonials")}
                >
                  <Quote className="h-4 w-4 mr-2" />
                  Depoimentos
                </Button>
                <Button
                  variant={activeTab === "gallery" ? "default" : "ghost"}
                  className={`w-full justify-start ${activeTab === "gallery" ? "bg-pink-600 hover:bg-pink-700" : ""}`}
                  onClick={() => setActiveTab("gallery")}
                >
                  <ImageIcon className="h-4 w-4 mr-2" />
                  Galeria
                </Button>
                <Button
                  variant={activeTab === "cta" ? "default" : "ghost"}
                  className={`w-full justify-start ${activeTab === "cta" ? "bg-pink-600 hover:bg-pink-700" : ""}`}
                  onClick={() => setActiveTab("cta")}
                >
                  <Megaphone className="h-4 w-4 mr-2" />
                  Chamada para Ação
                </Button>
                <Button
                  variant={activeTab === "photos" ? "default" : "ghost"}
                  className={`w-full justify-start ${activeTab === "photos" ? "bg-pink-600 hover:bg-pink-700" : ""}`}
                  onClick={() => setActiveTab("photos")}
                >
                  <Camera className="h-4 w-4 mr-2" />
                  Fotos do Cartão
                </Button>
                <Button
                  variant={activeTab === "messages" ? "default" : "ghost"}
                  className={`w-full justify-start ${activeTab === "messages" ? "bg-pink-600 hover:bg-pink-700" : ""}`}
                  onClick={() => setActiveTab("messages")}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Mensagens
                </Button>
                <Button
                  variant={activeTab === "itinerary" ? "default" : "ghost"}
                  className={`w-full justify-start ${activeTab === "itinerary" ? "bg-pink-600 hover:bg-pink-700" : ""}`}
                  onClick={() => setActiveTab("itinerary")}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Roteiro
                </Button>
                <Button
                  variant={activeTab === "music" ? "default" : "ghost"}
                  className={`w-full justify-start ${activeTab === "music" ? "bg-pink-600 hover:bg-pink-700" : ""}`}
                  onClick={() => setActiveTab("music")}
                >
                  <Music className="h-4 w-4 mr-2" />
                  Música
                </Button>
                <Button
                  variant={activeTab === "share" ? "default" : "ghost"}
                  className={`w-full justify-start ${activeTab === "share" ? "bg-pink-600 hover:bg-pink-700" : ""}`}
                  onClick={() => setActiveTab("share")}
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Compartilhamento
                </Button>
              </nav>

              <Separator className="my-4" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Status:</span>
                  <Badge className={cardData.status === "published" ? "bg-green-500" : "bg-gray-500"}>
                    {cardData.status === "published" ? "Publicado" : "Rascunho"}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Visibilidade:</span>
                  <div className="flex items-center">
                    <span className="text-sm mr-2">{cardData.shareOptions.isPrivate ? "Privado" : "Público"}</span>
                    <Switch
                      checked={!cardData.shareOptions.isPrivate}
                      onCheckedChange={(checked) => updateShareOptions("isPrivate", !checked)}
                    />
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full text-pink-600 border-pink-200 hover:bg-pink-50"
                  onClick={handlePreview}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Visualizar
                </Button>
              </div>
            </div>
          </div>

          {/* Main Editing Area */}
          <div className="lg:col-span-3">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>
                  {activeTab === "basic"
                    ? "Informações Básicas"
                    : activeTab === "photos"
                      ? "Gerenciar Fotos"
                      : activeTab === "messages"
                        ? "Mensagens"
                        : activeTab === "itinerary"
                          ? "Roteiro"
                          : activeTab === "music"
                            ? "Música"
                            : "Opções de Compartilhamento"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Basic Information Tab */}
                {activeTab === "basic" && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Título do Cartão</Label>
                      <Input
                        id="title"
                        value={cardData.title}
                        onChange={(e) => updateBasicInfo("title", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Descrição</Label>
                      <Textarea
                        id="description"
                        value={cardData.description}
                        onChange={(e) => updateBasicInfo("description", e.target.value)}
                        className="min-h-[100px]"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Data do Evento</Label>
                        <Input
                          id="date"
                          type="date"
                          value={cardData.date}
                          onChange={(e) => updateBasicInfo("date", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">Local</Label>
                        <Input
                          id="location"
                          value={cardData.location}
                          onChange={(e) => updateBasicInfo("location", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cover-image">Imagem de Capa</Label>
                      <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
                        {cardData.coverImage ? (
                          <div className="relative">
                            <div className="h-40 bg-pink-200 rounded-lg flex items-center justify-center">
                              <ImageIcon className="h-10 w-10 text-pink-500" />
                            </div>
                            <Button
                              variant="destructive"
                              size="icon"
                              className="absolute top-2 right-2 h-6 w-6"
                              onClick={() => updateBasicInfo("coverImage", null)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        ) : (
                          <>
                            <ImageIcon className="h-10 w-10 mx-auto text-gray-400 mb-4" />
                            <p className="text-sm text-gray-500 mb-2">Arraste uma imagem ou clique para selecionar</p>
                            <Button variant="outline" size="sm">
                              Selecionar Imagem
                            </Button>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="status">Status do Cartão</Label>
                      <Select value={cardData.status} onValueChange={(value) => updateBasicInfo("status", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Rascunho</SelectItem>
                          <SelectItem value="published">Publicado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Hero Section Tab */}
                {activeTab === "hero" && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="hero-title">Título do Banner</Label>
                      <Input
                        id="hero-title"
                        value={cardData.hero.title}
                        onChange={(e) => updateHero("title", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hero-subtitle">Subtítulo do Banner</Label>
                      <Textarea
                        id="hero-subtitle"
                        value={cardData.hero.subtitle}
                        onChange={(e) => updateHero("subtitle", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hero-background">Imagem de Fundo</Label>
                      <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
                        {cardData.hero.backgroundImage ? (
                          <div className="relative">
                            <div className="h-40 bg-pink-200 rounded-lg flex items-center justify-center">
                              <ImageIcon className="h-10 w-10 text-pink-500" />
                            </div>
                            <Button
                              variant="destructive"
                              size="icon"
                              className="absolute top-2 right-2 h-6 w-6"
                              onClick={() => updateHero("backgroundImage", null)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        ) : (
                          <>
                            <ImageIcon className="h-10 w-10 mx-auto text-gray-400 mb-4" />
                            <p className="text-sm text-gray-500 mb-2">Arraste uma imagem ou clique para selecionar</p>
                            <Button variant="outline" size="sm">
                              Selecionar Imagem
                            </Button>
                          </>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">Recomendado: imagem de alta resolução (1920x1080px)</p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Prévia do Banner</h3>
                      <div className="relative h-[200px] bg-gradient-to-r from-pink-400 to-pink-600 rounded-lg overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-black/30"></div>
                        <div className="relative z-10 text-center px-4">
                          <h1 className="text-2xl font-bold text-white mb-2">{cardData.hero.title}</h1>
                          <p className="text-white">{cardData.hero.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Features Tab */}
                {activeTab === "features" && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">Recursos</h3>
                      <Button variant="outline" size="sm" onClick={addFeature}>
                        <Plus className="h-4 w-4 mr-2" />
                        Adicionar Recurso
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                      {cardData.features.map((feature) => (
                        <Card key={feature.id} className="overflow-hidden">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <div className="flex items-center">
                                <div
                                  className={`w-10 h-10 rounded-lg ${feature.color} flex items-center justify-center mr-3`}
                                >
                                  <span className="text-xl">{feature.icon}</span>
                                </div>
                                <CardTitle className="text-lg">{feature.title}</CardTitle>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 w-8"
                                onClick={() => removeFeature(feature.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor={`feature-title-${feature.id}`}>Título</Label>
                              <Input
                                id={`feature-title-${feature.id}`}
                                value={feature.title}
                                onChange={(e) => updateFeature(feature.id, "title", e.target.value)}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor={`feature-desc-${feature.id}`}>Descrição</Label>
                              <Textarea
                                id={`feature-desc-${feature.id}`}
                                value={feature.description}
                                onChange={(e) => updateFeature(feature.id, "description", e.target.value)}
                              />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor={`feature-icon-${feature.id}`}>Ícone</Label>
                                <Select
                                  value={feature.icon}
                                  onValueChange={(value) => updateFeature(feature.id, "icon", value)}
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecione um ícone" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="📸">📸 Câmera</SelectItem>
                                    <SelectItem value="🗓️">🗓️ Calendário</SelectItem>
                                    <SelectItem value="👗">👗 Vestido</SelectItem>
                                    <SelectItem value="👯‍♀️">👯‍♀️ Madrinhas</SelectItem>
                                    <SelectItem value="💎">💎 Diamante</SelectItem>
                                    <SelectItem value="🔗">🔗 Link</SelectItem>
                                    <SelectItem value="🎉">🎉 Festa</SelectItem>
                                    <SelectItem value="💃">💃 Dança</SelectItem>
                                    <SelectItem value="🥂">🥂 Brinde</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor={`feature-color-${feature.id}`}>Cor de Fundo</Label>
                                <Select
                                  value={feature.color}
                                  onValueChange={(value) => updateFeature(feature.id, "color", value)}
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecione uma cor" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="bg-pink-100">Rosa</SelectItem>
                                    <SelectItem value="bg-purple-100">Roxo</SelectItem>
                                    <SelectItem value="bg-blue-100">Azul</SelectItem>
                                    <SelectItem value="bg-green-100">Verde</SelectItem>
                                    <SelectItem value="bg-yellow-100">Amarelo</SelectItem>
                                    <SelectItem value="bg-red-100">Vermelho</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor={`feature-image-${feature.id}`}>Imagem (opcional)</Label>
                              <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center">
                                {feature.image ? (
                                  <div className="relative">
                                    <div className="h-32 bg-pink-200 rounded-lg flex items-center justify-center">
                                      <ImageIcon className="h-8 w-8 text-pink-500" />
                                    </div>
                                    <Button
                                      variant="destructive"
                                      size="icon"
                                      className="absolute top-2 right-2 h-6 w-6"
                                      onClick={() => updateFeature(feature.id, "image", null)}
                                    >
                                      <X className="h-3 w-3" />
                                    </Button>
                                  </div>
                                ) : (
                                  <>
                                    <ImageIcon className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                                    <p className="text-xs text-gray-500 mb-2">Clique para selecionar</p>
                                    <Button variant="outline" size="sm">
                                      Selecionar
                                    </Button>
                                  </>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Testimonials Tab */}
                {activeTab === "testimonials" && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">Depoimentos</h3>
                      <Button variant="outline" size="sm" onClick={addTestimonial}>
                        <Plus className="h-4 w-4 mr-2" />
                        Adicionar Depoimento
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {cardData.testimonials.map((testimonial) => (
                        <Card key={testimonial.id} className="overflow-hidden">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h4 className="font-medium">{testimonial.name}</h4>
                                <p className="text-sm text-pink-600">{testimonial.role}</p>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 w-8"
                                onClick={() => removeTestimonial(testimonial.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>

                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor={`testimonial-quote-${testimonial.id}`}>Depoimento</Label>
                                <Textarea
                                  id={`testimonial-quote-${testimonial.id}`}
                                  value={testimonial.quote}
                                  onChange={(e) => updateTestimonial(testimonial.id, "quote", e.target.value)}
                                  className="min-h-[100px]"
                                />
                              </div>

                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor={`testimonial-name-${testimonial.id}`}>Nome</Label>
                                  <Input
                                    id={`testimonial-name-${testimonial.id}`}
                                    value={testimonial.name}
                                    onChange={(e) => updateTestimonial(testimonial.id, "name", e.target.value)}
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor={`testimonial-role-${testimonial.id}`}>Função</Label>
                                  <Input
                                    id={`testimonial-role-${testimonial.id}`}
                                    value={testimonial.role}
                                    onChange={(e) => updateTestimonial(testimonial.id, "role", e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Gallery Tab */}
                {activeTab === "gallery" && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">Galeria de Fotos</h3>
                      <Button variant="outline" size="sm" onClick={addGalleryImage}>
                        <Plus className="h-4 w-4 mr-2" />
                        Adicionar Imagem
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {cardData.gallery.map((item) => (
                        <div key={item.id} className="border rounded-lg p-4 space-y-3">
                          <div className="flex justify-between items-start">
                            <h4 className="font-medium">Imagem {item.id}</h4>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 w-8"
                              onClick={() => removeGalleryImage(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center">
                            {item.image ? (
                              <div className="relative">
                                <div className="h-32 bg-pink-200 rounded-lg flex items-center justify-center">
                                  <ImageIcon className="h-8 w-8 text-pink-500" />
                                </div>
                                <Button
                                  variant="destructive"
                                  size="icon"
                                  className="absolute top-2 right-2 h-6 w-6"
                                  onClick={() => updateGalleryImage(item.id, "image", null)}
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                              </div>
                            ) : (
                              <>
                                <ImageIcon className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                                <p className="text-xs text-gray-500 mb-2">Clique para selecionar</p>
                                <Button variant="outline" size="sm">
                                  Selecionar
                                </Button>
                              </>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor={`gallery-desc-${item.id}`}>Descrição</Label>
                            <Input
                              id={`gallery-desc-${item.id}`}
                              value={item.description}
                              onChange={(e) => updateGalleryImage(item.id, "description", e.target.value)}
                              placeholder="Descreva esta imagem"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Section Tab */}
                {activeTab === "cta" && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="cta-title">Título da Chamada</Label>
                      <Input
                        id="cta-title"
                        value={cardData.cta.title}
                        onChange={(e) => updateCta("title", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cta-subtitle">Subtítulo da Chamada</Label>
                      <Textarea
                        id="cta-subtitle"
                        value={cardData.cta.subtitle}
                        onChange={(e) => updateCta("subtitle", e.target.value)}
                      />
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Prévia da Chamada para Ação</h3>
                      <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg p-6 text-white text-center">
                        <h2 className="text-xl font-bold mb-2">{cardData.cta.title}</h2>
                        <p className="mb-4">{cardData.cta.subtitle}</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-2">
                          <Button variant="default" className="bg-white text-pink-600 hover:bg-gray-100">
                            Criar Cartão de Memórias
                          </Button>
                          <Button variant="outline" className="border-white text-white hover:bg-pink-700">
                            Planejar Roteiro
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Photos Tab */}
                {activeTab === "photos" && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">Galeria de Fotos</h3>
                      <Button variant="outline" size="sm" onClick={addPhoto}>
                        <Plus className="h-4 w-4 mr-2" />
                        Adicionar Foto
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {cardData.photos.map((photo, index) => (
                        <div key={photo.id} className="border rounded-lg p-4 space-y-3">
                          <div className="flex justify-between items-start">
                            <h4 className="font-medium">Foto {index + 1}</h4>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 w-8"
                              onClick={() => removePhoto(photo.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center">
                            {photo.url ? (
                              <div className="relative">
                                <div className="h-32 bg-pink-200 rounded-lg flex items-center justify-center">
                                  <ImageIcon className="h-8 w-8 text-pink-500" />
                                </div>
                                <Button
                                  variant="destructive"
                                  size="icon"
                                  className="absolute top-2 right-2 h-6 w-6"
                                  onClick={() => updatePhoto(photo.id, "url", null)}
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                              </div>
                            ) : (
                              <>
                                <ImageIcon className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                                <p className="text-xs text-gray-500 mb-2">Clique para selecionar</p>
                                <Button variant="outline" size="sm">
                                  Selecionar
                                </Button>
                              </>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor={`photo-desc-${photo.id}`}>Descrição</Label>
                            <Input
                              id={`photo-desc-${photo.id}`}
                              value={photo.description}
                              onChange={(e) => updatePhoto(photo.id, "description", e.target.value)}
                              placeholder="Descreva esta foto"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Messages Tab */}
                {activeTab === "messages" && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">Mensagens para a Noiva</h3>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Plus className="h-4 w-4 mr-2" />
                            Nova Mensagem
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Adicionar Mensagem</DialogTitle>
                            <DialogDescription>Escreva uma mensagem especial para a noiva</DialogDescription>
                          </DialogHeader>

                          <NewMessageForm onSubmit={addMessage} />

                          <DialogFooter>
                            <Button type="submit" form="new-message-form">
                              Adicionar
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>

                    <div className="space-y-4">
                      {cardData.messages.map((message) => (
                        <div key={message.id} className="bg-pink-50 p-4 rounded-lg relative group">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-700 hover:bg-red-50 h-8 w-8"
                            onClick={() => removeMessage(message.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>

                          <p className="italic text-gray-700 mb-2">"{message.content}"</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Avatar className="h-6 w-6 mr-2">
                                <AvatarFallback className="bg-pink-200 text-pink-700">
                                  {message.author.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-sm font-medium">{message.author}</span>
                            </div>
                            <span className="text-xs text-gray-500">{message.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Itinerary Tab */}
                {activeTab === "itinerary" && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">Roteiro da Despedida</h3>
                      <Button variant="outline" size="sm" onClick={addDay}>
                        <Plus className="h-4 w-4 mr-2" />
                        Adicionar Dia
                      </Button>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      {cardData.itinerary.map((day, dayIndex) => (
                        <AccordionItem key={day.day} value={day.day}>
                          <AccordionTrigger className="hover:no-underline">
                            <div className="flex justify-between items-center w-full pr-4">
                              <span>{day.day}</span>
                              <div className="flex items-center">
                                <Badge className="mr-2">{day.events.length} eventos</Badge>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4 pt-2">
                              <div className="flex justify-between items-center">
                                <Button variant="outline" size="sm" onClick={() => addEvent(day.day)}>
                                  <Plus className="h-4 w-4 mr-2" />
                                  Adicionar Evento
                                </Button>

                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                  onClick={() => removeDay(day.day)}
                                >
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Remover Dia
                                </Button>
                              </div>

                              {day.events.map((event) => (
                                <div key={event.id} className="border rounded-lg p-4 space-y-3">
                                  <div className="flex justify-between items-start">
                                    <h4 className="font-medium">Evento</h4>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 w-8"
                                      onClick={() => removeEvent(dayIndex, event.id)}
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </div>

                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                    <div className="space-y-2">
                                      <Label htmlFor={`event-time-${event.id}`}>Horário</Label>
                                      <div className="relative">
                                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                        <Input
                                          id={`event-time-${event.id}`}
                                          value={event.time}
                                          onChange={(e) => updateEvent(dayIndex, event.id, "time", e.target.value)}
                                          className="pl-10"
                                        />
                                      </div>
                                    </div>

                                    <div className="space-y-2 md:col-span-2">
                                      <Label htmlFor={`event-activity-${event.id}`}>Atividade</Label>
                                      <Input
                                        id={`event-activity-${event.id}`}
                                        value={event.activity}
                                        onChange={(e) => updateEvent(dayIndex, event.id, "activity", e.target.value)}
                                        placeholder="Ex: Jantar de boas-vindas"
                                      />
                                    </div>
                                  </div>

                                  <div className="space-y-2">
                                    <Label htmlFor={`event-location-${event.id}`}>Local</Label>
                                    <div className="relative">
                                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                      <Input
                                        id={`event-location-${event.id}`}
                                        value={event.location}
                                        onChange={(e) => updateEvent(dayIndex, event.id, "location", e.target.value)}
                                        className="pl-10"
                                        placeholder="Ex: Restaurante do resort"
                                      />
                                    </div>
                                  </div>
                                </div>
                              ))}

                              {day.events.length === 0 && (
                                <div className="text-center py-4 text-gray-500">
                                  <p>Nenhum evento adicionado para este dia.</p>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="mt-2 text-pink-600"
                                    onClick={() => addEvent(day.day)}
                                  >
                                    <Plus className="h-4 w-4 mr-2" />
                                    Adicionar Evento
                                  </Button>
                                </div>
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                )}

                {/* Music Tab */}
                {activeTab === "music" && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="music">Música de Fundo</Label>
                      <div className="relative">
                        <Music className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="music"
                          value={cardData.music}
                          onChange={(e) => updateBasicInfo("music", e.target.value)}
                          className="pl-10"
                          placeholder="Ex: Dancing Queen - ABBA"
                        />
                      </div>
                      <p className="text-xs text-gray-500">A música será tocada durante a apresentação do cartão</p>
                    </div>

                    <div className="space-y-2 mt-6">
                      <h3 className="font-medium text-gray-700">Músicas populares para despedida</h3>

                      {[
                        "Girls Just Want to Have Fun - Cyndi Lauper",
                        "Single Ladies - Beyoncé",
                        "Wannabe - Spice Girls",
                        "Dancing Queen - ABBA",
                      ].map((song, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-pink-50 rounded-lg">
                          <div className="flex items-center">
                            <Music className="h-5 w-5 text-pink-500 mr-3" />
                            <span>{song}</span>
                          </div>
                          <Button variant="ghost" size="sm" onClick={() => updateBasicInfo("music", song)}>
                            Selecionar
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share Tab */}
                {activeTab === "share" && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Visibilidade</h3>
                          <p className="text-sm text-gray-500">Defina quem pode ver este cartão</p>
                        </div>
                        <Switch
                          checked={!cardData.shareOptions.isPrivate}
                          onCheckedChange={(checked) => updateShareOptions("isPrivate", checked)}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Permitir Comentários</h3>
                          <p className="text-sm text-gray-500">Permitir que as pessoas deixem mensagens</p>
                        </div>
                        <Switch
                          checked={cardData.shareOptions.allowComments}
                          onCheckedChange={(checked) => updateShareOptions("allowComments", checked)}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Proteger com Senha</h3>
                          <p className="text-sm text-gray-500">Exigir senha para visualizar</p>
                        </div>
                        <Switch
                          checked={cardData.shareOptions.requirePassword}
                          onCheckedChange={(checked) => updateShareOptions("requirePassword", checked)}
                        />
                      </div>

                      {cardData.shareOptions.requirePassword && (
                        <div className="space-y-2">
                          <Label htmlFor="password">Senha</Label>
                          <Input
                            id="password"
                            type="password"
                            value={cardData.shareOptions.password}
                            onChange={(e) => updateShareOptions("password", e.target.value)}
                            placeholder="Digite uma senha"
                          />
                        </div>
                      )}

                      <div className="space-y-2">
                        <Label htmlFor="expiration">Data de Expiração (opcional)</Label>
                        <Input
                          id="expiration"
                          type="date"
                          value={cardData.shareOptions.expirationDate}
                          onChange={(e) => updateShareOptions("expirationDate", e.target.value)}
                        />
                        <p className="text-xs text-gray-500">O cartão não poderá ser acessado após esta data</p>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="font-medium">Link para Compartilhar</h3>

                      <div className="flex">
                        <Input
                          value={`https://bridesquad.com/preview/${params.id}`}
                          readOnly
                          className="rounded-r-none"
                        />
                        <Button variant="outline" className="rounded-l-none">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        </Button>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" className="flex-1">
                          <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                          </svg>
                          Facebook
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                          </svg>
                          Twitter
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21.11 2.89A12.91 12.91 0 0 0 12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12c0-3.55-1.55-6.91-4.24-9.21l1.41-1.41L18.76.88 17.35 2.3zM12 22c-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm-1-17.93c-3.94.49-7 3.85-7 7.93s3.05 7.44 7 7.93V18h-2v-2h2v-2.68c0-1.15.37-2.04 1.08-2.65.71-.61 1.67-.92 2.87-.92.39 0 .8.03 1.22.08.43.05.79.12 1.08.2v2.1c-.32-.12-.59-.2-.81-.24-.22-.04-.45-.06-.69-.06-.61 0-1.06.16-1.36.47-.3.31-.44.75-.44 1.32V14h3l-.44 2h-2.56v4.93z" />
                          </svg>
                          WhatsApp
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-white py-4 border-t mt-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} BrideSquad. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}

// Componente para o formulário de nova mensagem
function NewMessageForm({ onSubmit }: { onSubmit: (message: { author: string; content: string }) => void }) {
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (author && content) {
      onSubmit({ author, content })
      setAuthor("")
      setContent("")
    }
  }

  return (
    <form id="new-message-form" onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="author">Seu nome</Label>
        <Input id="author" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Digite seu nome" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Mensagem para a noiva</Label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Escreva uma mensagem especial..."
          className="min-h-[100px]"
        />
      </div>
    </form>
  )
}

