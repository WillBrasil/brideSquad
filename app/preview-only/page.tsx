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
      <header className="bg-white shadow-sm py-3 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Sparkles className="h-5 w-5 text-pink-600" />
            <span className="ml-2 font-bold text-xl text-pink-700">BrideSquad</span>
          </Link>
          <div>
            <Button variant="outline" size="sm" onClick={() => router.push("/login")}>
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 flex-1 max-w-5xl">
        <div className="mb-4 flex items-center justify-between">
          <Link href="/login">
            <Button variant="ghost" className="flex items-center text-pink-600 pl-0">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-pink-700 hidden sm:block">Preview do Cartão</h1>
        </div>

        <Alert className="mb-6 bg-yellow-50 border-yellow-200">
          <Lock className="h-5 w-5 text-yellow-600" />
          <AlertTitle className="text-yellow-800 ml-2">Acesso Limitado</AlertTitle>
          <AlertDescription className="text-yellow-700">
            Você está visualizando apenas um exemplo de cartão. Para criar e gerenciar seus próprios cartões, assine o
            plano Premium.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <Card className="overflow-hidden shadow-md">
              <div className="h-2 bg-gradient-to-r from-pink-400 to-pink-600"></div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🎉</span>
                    <CardTitle>Despedida da Ana</CardTitle>
                  </div>
                  <Badge className="bg-pink-500">Exemplo</Badge>
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-1 sm:space-y-0 mt-1">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-xs">15 de Junho, 2024</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-xs">Praia do Forte, Bahia</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative aspect-video bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg overflow-hidden">
                  <Image
                    src="/images/banners/banner-despedida.jpg"
                    alt="Despedida de solteira"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute inset-0 flex items-end p-4">
                    <div className="text-center w-full">
                      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">Despedida da Ana</h1>
                      <p className="text-white text-sm sm:text-base">
                        Um fim de semana inesquecível para celebrar a última aventura de solteira!
                      </p>
                    </div>
                  </div>
                </div>

                <Tabs defaultValue="fotos" className="w-full">
                  <TabsList className="grid grid-cols-4 mb-4">
                    <TabsTrigger value="fotos" className="text-xs sm:text-sm">Fotos</TabsTrigger>
                    <TabsTrigger value="roteiro" className="text-xs sm:text-sm">Roteiro</TabsTrigger>
                    <TabsTrigger value="mensagens" className="text-xs sm:text-sm">Mensagens</TabsTrigger>
                    <TabsTrigger value="madrinhas" className="text-xs sm:text-sm">Madrinhas</TabsTrigger>
                  </TabsList>

                  <TabsContent value="fotos">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
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
                          <div key={i} className="relative aspect-square rounded-lg overflow-hidden group">
                            <Image
                              src={photo.url}
                              alt={photo.title}
                              fill
                              className="object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <Lock className="h-6 w-6 text-white" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                              <p className="text-white text-xs">{photo.title}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <Lock className="h-5 w-5 text-gray-400 mx-auto mb-1" />
                        <p className="text-xs text-gray-500">Galeria completa disponível no plano Premium</p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="roteiro">
                    <div className="space-y-3">
                      {[
                        { time: "16:00", activity: "Check-in no resort", location: "Resort Praia do Forte" },
                        { time: "19:00", activity: "Jantar de boas-vindas", location: "Restaurante do resort" },
                        { time: "21:30", activity: "Drinks e jogos", location: "Bar da piscina" },
                      ].map((event, i) => (
                        <div key={i} className="flex border-l-2 border-pink-300 pl-3 py-1">
                          <div className="w-16 font-medium text-pink-600 text-sm">{event.time}</div>
                          <div>
                            <h4 className="font-medium text-sm">{event.activity}</h4>
                            <p className="text-gray-500 text-xs">{event.location}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="mensagens">
                    <div className="space-y-3">
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
                        <div key={i} className="bg-pink-50 p-3 rounded-lg">
                          <p className="italic text-gray-700 mb-2 text-sm">"{message.content}"</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Avatar className="h-6 w-6 mr-2">
                                <AvatarFallback className="bg-pink-200 text-pink-700 text-xs">
                                  {message.author.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-xs font-medium">{message.author}</span>
                            </div>
                            <span className="text-xs text-gray-500">{message.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="madrinhas">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                          <div key={i} className="bg-pink-50 p-3 rounded-lg">
                            <div className="flex items-center mb-2">
                              <Avatar className="h-10 w-10 mr-2">
                                <Image
                                  src={bridesmaid.avatar}
                                  alt={bridesmaid.name}
                                  width={40}
                                  height={40}
                                  className="rounded-full"
                                />
                              </Avatar>
                              <div>
                                <h4 className="font-medium text-sm">{bridesmaid.name}</h4>
                                <p className="text-xs text-pink-600">{bridesmaid.role}</p>
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 italic">"{bridesmaid.message}"</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t flex justify-between py-2">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 text-pink-500 mr-1" />
                    <span className="text-xs text-gray-500">24</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 text-blue-500 mr-1" />
                    <span className="text-xs text-gray-500">2</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Button variant="ghost" size="sm" className="text-gray-500 h-8 px-2">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-500 h-8 px-2">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="shadow-md h-full">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Music className="h-5 w-5 mr-2 text-pink-500" />
                  <span>Música de Fundo</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <MusicPlayer 
                    title="Dua Lipa - New Rules" 
                    videoId="k2qgadSvNyU"
                    isPremium={true}
                  />
                  <div className="text-center mt-4">
                    <p className="text-sm text-gray-500 mb-2">Adicione músicas personalizadas aos seus cartões</p>
                    <Badge variant="outline" className="bg-pink-50 text-pink-700 border-pink-200">
                      Recurso Premium
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <h2 className="text-xl font-bold text-center mb-4 text-pink-700">Recursos Premium</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center">
                <Camera className="h-4 w-4 mr-2 text-pink-500" />
                <span>Galeria de Fotos</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-gray-500 mb-3">Adicione fotos ilimitadas aos seus cartões</p>
              <div className="grid grid-cols-2 gap-1 mb-3">
                {["/images/moments/momento1.jpg", "/images/moments/momento2.jpg"].map((url, i) => (
                  <div key={i} className="aspect-square rounded overflow-hidden">
                    <Image
                      src={url}
                      alt="Foto de exemplo"
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Badge variant="outline" className="bg-pink-50 text-pink-700 border-pink-200 text-xs">
                  Recurso Premium
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center">
                <Users className="h-4 w-4 mr-2 text-pink-500" />
                <span>Madrinhas</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-gray-500 mb-3">Gerencie as funções e responsabilidades das madrinhas</p>
              <div className="flex space-x-2 mb-3 justify-center">
                {[
                  { name: "Mariana", role: "Madrinha da Zueira" },
                  { name: "Juliana", role: "Madrinha das Fotos" },
                ].map((bridesmaid, i) => (
                  <div key={i} className="bg-pink-50 p-2 rounded-lg text-center" style={{ width: "45%" }}>
                    <div className="w-8 h-8 rounded-full bg-pink-200 mx-auto mb-1 flex items-center justify-center text-pink-700 font-medium text-xs">
                      {bridesmaid.name.charAt(0)}
                    </div>
                    <p className="text-xs font-medium truncate">{bridesmaid.name}</p>
                    <p className="text-xs text-pink-600 truncate">{bridesmaid.role}</p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Badge variant="outline" className="bg-pink-50 text-pink-700 border-pink-200 text-xs">
                  Recurso Premium
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-pink-500" />
                <span>Roteiro Detalhado</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-gray-500 mb-3">Organize todas as atividades com horários</p>
              <div className="space-y-2 mb-3">
                {[
                  { time: "16:00", activity: "Check-in" },
                  { time: "19:00", activity: "Jantar" },
                ].map((event, i) => (
                  <div key={i} className="flex border-l-2 border-pink-300 pl-2 py-0.5">
                    <div className="w-10 font-medium text-pink-600 text-xs">{event.time}</div>
                    <div>
                      <p className="text-xs">{event.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Badge variant="outline" className="bg-pink-50 text-pink-700 border-pink-200 text-xs">
                  Recurso Premium
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl p-6 text-white shadow-lg">
          <h2 className="text-xl font-bold mb-3">Desbloqueie todos os recursos</h2>
          <p className="text-base mb-4 max-w-2xl mx-auto">
            Assine o plano Premium por apenas R$ 29,90/mês e crie cartões ilimitados para suas despedidas
          </p>
          <Button
            className="bg-white text-pink-600 hover:bg-gray-100 px-6 py-2 rounded-full font-medium"
            onClick={() => router.push("/plano")}
          >
            Assinar Plano Premium
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-xs mt-3 text-pink-100">14 dias de teste grátis. Cancele quando quiser.</p>
        </div>
      </div>

      <footer className="bg-white py-3 border-t mt-auto">
        <div className="container mx-auto px-4 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} BrideSquad. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}

