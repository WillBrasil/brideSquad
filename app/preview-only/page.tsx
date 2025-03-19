"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Sparkles, ChevronLeft, ArrowRight, Lock, Heart, MessageCircle, Share2, Download, Music, Calendar, MapPin, Camera, Users, Gift, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { MusicPlayer } from "@/components/music-player"

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
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-xs">15 de Junho, 2024</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-xs">Praia do Forte, Bahia</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative h-[300px] bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg overflow-hidden mb-4">
                <div className="absolute inset-0">
                  <Image
                    src="/images/banners/banner-despedida.jpg"
                    alt="Despedida de solteira"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="text-center w-full">
                    <h1 className="text-3xl font-bold text-white mb-2">Despedida da Ana</h1>
                    <p className="text-white text-lg">
                      Um fim de semana inesquecível para celebrar a última aventura de solteira!
                    </p>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="fotos" className="w-full">
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="fotos">Fotos</TabsTrigger>
                  <TabsTrigger value="roteiro">Roteiro</TabsTrigger>
                  <TabsTrigger value="mensagens">Mensagens</TabsTrigger>
                  <TabsTrigger value="madrinhas">Madrinhas</TabsTrigger>
                </TabsList>

                <TabsContent value="fotos">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        {
                          url: "/images/moments/momento1.jpg",
                          title: "Festa com as Amigas"
                        },
                        {
                          url: "/images/moments/momento2.jpg",
                          title: "Dança e Diversão"
                        },
                        {
                          url: "/images/moments/momento3.jpg",
                          title: "Brinde Especial"
                        },
                        {
                          url: "/images/moments/momento4.jpg",
                          title: "Momentos de Alegria"
                        }
                      ].map((photo, i) => (
                        <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                          <Image
                            src={photo.url}
                            alt={photo.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Lock className="h-8 w-8 text-white" />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                            <p className="text-white text-sm">{photo.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <Lock className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Galeria completa disponível no plano Premium</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="roteiro">
                  <div className="space-y-4">
                    {[
                      { time: "16:00", activity: "Check-in no resort", location: "Resort Praia do Forte" },
                      { time: "19:00", activity: "Jantar de boas-vindas", location: "Restaurante do resort" },
                      { time: "21:30", activity: "Drinks e jogos", location: "Bar da piscina" },
                    ].map((event, i) => (
                      <div key={i} className="flex border-l-2 border-pink-300 pl-4">
                        <div className="w-20 font-medium text-pink-600">{event.time}</div>
                        <div>
                          <h4 className="font-medium">{event.activity}</h4>
                          <p className="text-gray-500 text-sm">{event.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="mensagens">
                  <div className="space-y-4">
                    {[
                      {
                        author: "Juliana Costa",
                        content: "Ana, que essa nova fase seja repleta de amor e felicidade! Estou muito feliz por você!",
                        date: "2 dias atrás",
                      },
                      {
                        author: "Fernanda Oliveira",
                        content: "Amiga, você merece toda a felicidade do mundo! Mal posso esperar para celebrar com você!",
                        date: "1 dia atrás",
                      },
                    ].map((message, i) => (
                      <div key={i} className="bg-pink-50 p-4 rounded-lg">
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
                </TabsContent>

                <TabsContent value="madrinhas">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        {
                          name: "Mariana Silva",
                          role: "Madrinha da Zueira",
                          message: "Vamos fazer dessa despedida a melhor de todas!",
                          avatar: "/images/bridesmaids/mariana.jpg"
                        },
                        {
                          name: "Juliana Costa",
                          role: "Madrinha das Fotos",
                          message: "Pronta para registrar todos os momentos!",
                          avatar: "/images/bridesmaids/juliana.jpg"
                        },
                      ].map((bridesmaid, i) => (
                        <div key={i} className="bg-pink-50 p-4 rounded-lg">
                          <div className="flex items-center mb-3">
                            <Avatar className="h-12 w-12 mr-3">
                              <Image
                                src={bridesmaid.avatar}
                                alt={bridesmaid.name}
                                width={48}
                                height={48}
                                className="rounded-full"
                              />
                            </Avatar>
                            <div>
                              <h4 className="font-medium">{bridesmaid.name}</h4>
                              <p className="text-sm text-pink-600">{bridesmaid.role}</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 italic">"{bridesmaid.message}"</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <Lock className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Gerencie todas as madrinhas no plano Premium</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="bg-gray-50 border-t flex justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Heart className="h-4 w-4 text-pink-500 mr-1" />
                  <span className="text-sm text-gray-500">24 curtidas</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-4 w-4 text-blue-500 mr-1" />
                  <span className="text-sm text-gray-500">2 mensagens</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="text-gray-500">
                  <Share2 className="h-4 w-4 mr-1" />
                  Compartilhar
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-500">
                  <Download className="h-4 w-4 mr-1" />
                  Baixar
                </Button>
              </div>
            </CardFooter>
          </Card>

          {/* Recursos Premium */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="border-dashed border-2 border-gray-200 bg-gray-50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-5 w-5 mr-2 text-gray-400" />
                  <span className="text-gray-500">Galeria de Fotos</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center py-8">
                <p className="text-gray-500 mb-4">Adicione fotos ilimitadas aos seus cartões</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[
                    "/images/moments/momento1.jpg",
                    "/images/moments/momento2.jpg",
                    "/images/moments/momento3.jpg",
                    "/images/moments/momento4.jpg"
                  ].map((url, i) => (
                    <div key={i} className="aspect-square rounded-lg overflow-hidden">
                      <Image
                        src={url}
                        alt="Foto de exemplo"
                        width={200}
                        height={200}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <Lock className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                <p className="text-sm text-gray-400">Recurso disponível no plano Premium</p>
              </CardContent>
            </Card>

            <Card className="border-dashed border-2 border-gray-200 bg-gray-50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-5 w-5 mr-2 text-gray-400" />
                  <span className="text-gray-500">Música de Fundo</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center py-8">
                <p className="text-gray-500 mb-4">Adicione músicas personalizadas aos seus cartões</p>
                <div className="max-w-md mx-auto">
                  <MusicPlayer 
                    title="Dua Lipa - New Rules" 
                    videoId="k2qgadSvNyU"
                    isPremium={true}
                  />
                </div>
                <div className="mt-6">
                  <Lock className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                  <p className="text-sm text-gray-400">Recurso disponível no plano Premium</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-dashed border-2 border-gray-200 bg-gray-50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-5 w-5 mr-2 text-gray-400" />
                  <span className="text-gray-500">Madrinhas</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center py-8">
                <p className="text-gray-500 mb-4">Gerencie as funções e responsabilidades das madrinhas</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {[
                    { name: "Mariana", role: "Madrinha da Zueira" },
                    { name: "Juliana", role: "Madrinha das Fotos" },
                  ].map((bridesmaid, i) => (
                    <div key={i} className="bg-pink-50 p-3 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-pink-200 mx-auto mb-2 flex items-center justify-center text-pink-700 font-medium">
                        {bridesmaid.name.charAt(0)}
                      </div>
                      <p className="text-sm font-medium">{bridesmaid.name}</p>
                      <p className="text-xs text-pink-600">{bridesmaid.role}</p>
                    </div>
                  ))}
                </div>
                <Lock className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                <p className="text-sm text-gray-400">Recurso disponível no plano Premium</p>
              </CardContent>
            </Card>
          </div>

          {/* Benefícios do Plano Premium */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <h3 className="text-xl font-bold text-center mb-6">Benefícios do Plano Premium</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <Crown className="h-6 w-6 text-pink-500 mt-1" />
                <div>
                  <h4 className="font-medium">Cartões Ilimitados</h4>
                  <p className="text-sm text-gray-500">Crie quantos cartões quiser para diferentes eventos</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Gift className="h-6 w-6 text-pink-500 mt-1" />
                <div>
                  <h4 className="font-medium">Recursos Exclusivos</h4>
                  <p className="text-sm text-gray-500">Acesso a todas as funcionalidades premium</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-pink-500 mt-1" />
                <div>
                  <h4 className="font-medium">Suporte Prioritário</h4>
                  <p className="text-sm text-gray-500">Atendimento especial para usuários premium</p>
                </div>
              </div>
            </div>
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

