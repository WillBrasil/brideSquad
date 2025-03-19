"use client"

import { useState, useEffect, use } from "react"
import { ChevronLeft, Share2, Download, Heart, MessageCircle, Copy, ImageIcon, Music } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"

export default function PreviewPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const { id } = use(params)
  const [loading, setLoading] = useState(true)
  const [previewData, setPreviewData] = useState<any>(null)

  // Simular a busca de dados do cartão com base no ID
  useEffect(() => {
    // Em um ambiente real, aqui você faria uma chamada API para buscar os dados
    // Simulando o carregamento de dados
    setLoading(true)

    // Simulação de uma chamada de API
    setTimeout(() => {
      // Verificar se é um novo cartão (ID começa com "new-")
      const isNewCard = id.startsWith("new-")

      // Dados simulados para o cartão
      const cardData = {
        id: id,
        title: isNewCard ? "Novo Cartão" : "Despedida da Ana",
        date: "15 de Junho, 2024",
        location: "Praia do Forte, Bahia",
        description: "Um fim de semana inesquecível para celebrar a última aventura de solteira da Ana!",
        creator: {
          name: "Mariana Silva",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        messages: [
          {
            id: 1,
            author: "Juliana Costa",
            avatar: "/placeholder.svg?height=100&width=100",
            content: "Ana, que essa nova fase seja repleta de amor e felicidade! Estou muito feliz por você!",
            date: "2 dias atrás",
          },
          {
            id: 2,
            author: "Fernanda Oliveira",
            avatar: "/placeholder.svg?height=100&width=100",
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
        likes: 24,
        views: 89,
        shareLink: `https://bridesquad.com/preview/${id}`,

        // Adicionando as seções da página principal
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
          { id: 1, image: "/placeholder.svg?height=400&width=600", description: "Momento especial 1" },
          { id: 2, image: "/placeholder.svg?height=400&width=600", description: "Momento especial 2" },
          { id: 3, image: "/placeholder.svg?height=400&width=600", description: "Momento especial 3" },
          { id: 4, image: "/placeholder.svg?height=400&width=600", description: "Momento especial 4" },
        ],
        cta: {
          title: "Pronta para começar?",
          subtitle: "Crie memórias inesquecíveis para a despedida de solteira perfeita",
        },
        music: "Dancing Queen - ABBA",
        photos: [
          { id: 1, url: "/placeholder.svg?height=400&width=600", description: "Amigas na praia" },
          { id: 2, url: "/placeholder.svg?height=400&width=600", description: "Momento especial" },
        ],
      }

      setPreviewData(cardData)
      setLoading(false)
    }, 1000)
  }, [id])

  // Função para voltar para a página de edição
  const handleBackToEdit = () => {
    router.push(`/dashboard/edit/${id}`)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-pink-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-pink-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Carregando visualização...</p>
        </div>
      </div>
    )
  }

  if (!previewData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-pink-50">
        <div className="text-center">
          <p className="text-lg text-gray-600">Cartão não encontrado</p>
          <Button className="mt-4" onClick={() => router.push("/dashboard")}>
            Voltar para o Dashboard
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="ml-2 font-bold text-xl text-pink-700">BrideSquad</span>
          </Link>
          <div>
            <Button variant="outline" size="sm" className="mr-2">
              <Share2 className="h-4 w-4 mr-2" />
              Compartilhar
            </Button>
            <Button className="bg-pink-600 hover:bg-pink-700">
              <Download className="h-4 w-4 mr-2" />
              Baixar
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" className="flex items-center text-pink-600" onClick={handleBackToEdit}>
            <ChevronLeft className="h-4 w-4 mr-2" />
            Voltar para edição
          </Button>
        </div>

        {/* Cover Section */}
        <div className="relative h-[40vh] md:h-[50vh] rounded-xl overflow-hidden mb-8 bg-gradient-to-r from-pink-400 to-purple-500">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-8xl opacity-20">💖</div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center mb-2">
              <Badge className="bg-pink-500 text-white">{previewData.date}</Badge>
              <Badge className="bg-pink-500 text-white ml-2">{previewData.location}</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{previewData.title}</h1>
            <p className="text-lg md:text-xl max-w-3xl">{previewData.description}</p>
            <div className="flex items-center mt-4">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarFallback className="bg-pink-200 text-pink-700">
                  {previewData.creator.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <span>Criado por {previewData.creator.name}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Data</h3>
                  <p className="text-lg">{previewData.date}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Local</h3>
                  <p className="text-lg">{previewData.location}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Estatísticas</h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center">
                      <Heart className="h-5 w-5 text-pink-500 mr-1" />
                      <span>{previewData.likes} curtidas</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-5 w-5 text-blue-500 mr-1" />
                      <span>{previewData.messages.length} mensagens</span>
                    </div>
                  </div>
                </div>
                {previewData.music && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Música</h3>
                    <div className="flex items-center mt-1">
                      <Music className="h-5 w-5 text-pink-500 mr-1" />
                      <span>{previewData.music}</span>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <div className="w-full">
                  <p className="text-sm font-medium text-gray-500 mb-2">Link para compartilhar</p>
                  <div className="flex items-center space-x-4">
                    <Input
                      readOnly
                      value={`https://bridesquad.com/preview/${id}`}
                      className="bg-gray-50"
                    />
                    <Button variant="outline" className="rounded-l-none">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mensagens</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {previewData.messages.map((message: any) => (
                  <div key={message.id} className="bg-pink-50 p-4 rounded-lg">
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
              </CardContent>
              <CardFooter>
                <div className="w-full space-y-3">
                  <Textarea placeholder="Deixe uma mensagem para a noiva..." className="min-h-[100px]" />
                  <Button className="w-full bg-pink-600 hover:bg-pink-700">Enviar Mensagem</Button>
                </div>
              </CardFooter>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="fotos">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="fotos">Fotos</TabsTrigger>
                <TabsTrigger value="roteiro">Roteiro</TabsTrigger>
                <TabsTrigger value="depoimentos">Depoimentos</TabsTrigger>
              </TabsList>

              <TabsContent value="fotos">
                <Card>
                  <CardHeader>
                    <CardTitle>Galeria de Fotos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {previewData.photos.map((photo: any) => (
                        <div
                          key={photo.id}
                          className="relative aspect-[4/3] rounded-lg overflow-hidden bg-pink-200 hover:bg-pink-300 transition-colors group"
                        >
                          {photo.url ? (
                            <img
                              src={photo.url || "/placeholder.svg"}
                              alt={photo.description}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <ImageIcon className="h-12 w-12 text-pink-500" />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <p className="text-white font-medium">{photo.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Gallery Section */}
                {previewData.gallery && previewData.gallery.length > 0 && (
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Momentos Especiais</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {previewData.gallery.map((item: any) => (
                          <div
                            key={item.id}
                            className="relative aspect-[4/3] rounded-lg overflow-hidden bg-pink-200 hover:bg-pink-300 transition-colors group"
                          >
                            {item.image ? (
                              <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.description}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <ImageIcon className="h-12 w-12 text-pink-500" />
                              </div>
                            )}
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <p className="text-white font-medium">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="roteiro">
                <Card>
                  <CardHeader>
                    <CardTitle>Roteiro da Despedida</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {previewData.itinerary.map((day: any, dayIndex: number) => (
                        <div key={dayIndex}>
                          <h3 className="text-xl font-bold text-pink-700 mb-4">{day.day}</h3>
                          <div className="space-y-4">
                            {day.events.map((event: any, eventIndex: number) => (
                              <div key={eventIndex} className="flex border-l-2 border-pink-300 pl-4">
                                <div className="w-20 font-medium text-pink-600">{event.time}</div>
                                <div>
                                  <h4 className="font-medium">{event.activity}</h4>
                                  <p className="text-gray-500 text-sm">{event.location}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="depoimentos">
                <Card>
                  <CardHeader>
                    <CardTitle>O que dizem nossas clientes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-4">
                      {previewData.testimonials.map((testimonial: any) => (
                        <div key={testimonial.id} className="bg-pink-50 p-6 rounded-lg">
                          <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 font-bold mr-3">
                              {testimonial.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium">{testimonial.name}</p>
                              <p className="text-sm text-pink-600">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <footer className="bg-white py-6 mt-12 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} BrideSquad. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

