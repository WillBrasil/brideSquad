"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Sparkles, ChevronLeft, ArrowRight, Lock, Heart, MessageCircle, Share2, Download, Music, Calendar, MapPin, Camera, Users, Gift, Crown, List, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { MusicPlayer } from "@/components/music-player"
import { cn } from "@/lib/utils"

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
        {/* Navigation Anchors */}
        <nav className="mb-6 sticky top-16 bg-white/80 backdrop-blur-sm z-10 -mx-4 px-4 py-2 border-b">
          <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
            {[
              { icon: <Camera className="h-4 w-4" />, label: "Fotos", href: "#fotos" },
              { icon: <Calendar className="h-4 w-4" />, label: "Roteiro", href: "#roteiro" },
              { icon: <MessageCircle className="h-4 w-4" />, label: "Mensagens", href: "#mensagens" },
              { icon: <Users className="h-4 w-4" />, label: "Madrinhas", href: "#madrinhas" },
              { icon: <Music className="h-4 w-4" />, label: "Música", href: "#musica" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center px-3 py-1 text-sm text-gray-600 hover:text-pink-600 rounded-full bg-gray-50 hover:bg-pink-50 transition-colors"
              >
                {item.icon}
                <span className="ml-1">{item.label}</span>
              </a>
            ))}
          </div>
        </nav>

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

        <div className="grid grid-cols-1 gap-6 mb-8">
          <div>
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

                {/* Fotos */}
                <div id="fotos" className="border-t pt-4 scroll-mt-32">
                  <h3 className="text-base font-medium mb-3 flex items-center">
                    <Camera className="h-4 w-4 mr-2 text-pink-500" />
                    Fotos
                  </h3>
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
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
                          <div key={i} className="relative flex-none w-48 aspect-[4/3] rounded-lg overflow-hidden group">
                            <Image
                              src={photo.url}
                              alt={photo.title}
                              fill
                              className="object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <Lock className="h-6 w-6 text-white" />
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 p-2">
                                <p className="text-white text-sm font-medium">{photo.title}</p>
                              </div>
                            </div>
                            <div className="absolute top-2 right-2">
                              <Badge variant="secondary" className="bg-black/50 text-white border-0">
                                Preview
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white via-white/80 to-transparent w-12 h-full flex items-center justify-end pr-2">
                        <Button size="sm" variant="ghost" className="rounded-full h-8 w-8 p-0">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Roteiro */}
                <div id="roteiro" className="border-t pt-4 mt-6 scroll-mt-32">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-medium flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-pink-500" />
                      Roteiro
                    </h3>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="h-8">
                        <Calendar className="h-4 w-4 mr-1" />
                        Calendário
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8">
                        <List className="h-4 w-4 mr-1" />
                        Lista
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { time: "16:00", activity: "Check-in no resort", location: "Resort Praia do Forte", status: "confirmed" },
                      { time: "19:00", activity: "Jantar de boas-vindas", location: "Restaurante do resort", status: "confirmed" },
                      { time: "21:30", activity: "Drinks e jogos", location: "Bar da piscina", status: "pending" },
                    ].map((event, i) => (
                      <div key={i} className="flex border-l-2 border-pink-300 pl-3 py-2 hover:bg-pink-50/50 rounded-r-lg transition-colors">
                        <div className="w-16">
                          <div className="font-medium text-pink-600 text-sm">{event.time}</div>
                          <Badge variant="secondary" className={cn(
                            "text-xs mt-1",
                            event.status === "confirmed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                          )}>
                            {event.status === "confirmed" ? "Confirmado" : "Pendente"}
                          </Badge>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{event.activity}</h4>
                          <p className="text-gray-500 text-xs flex items-center">
                            <MapPin className="h-3 w-3 mr-1 inline" />
                            {event.location}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 h-8 w-8 p-0">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Madrinhas */}
                <div id="madrinhas" className="border-t pt-4 mt-6 scroll-mt-32">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-medium flex items-center">
                      <Users className="h-4 w-4 mr-2 text-pink-500" />
                      Madrinhas
                    </h3>
                    <Button variant="outline" size="sm" className="h-8">
                      <Crown className="h-4 w-4 mr-1" />
                      Ver Papéis
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        name: "Mariana Silva",
                        role: "Madrinha da Zueira",
                        message: "Vamos fazer dessa despedida a melhor de todas!",
                        avatar: "/images/bridesmaids/mariana.jpg",
                        tasks: 3,
                        tasksCompleted: 2
                      },
                      {
                        name: "Juliana Costa",
                        role: "Madrinha das Fotos",
                        message: "Pronta para registrar todos os momentos!",
                        avatar: "/images/bridesmaids/juliana.jpg",
                        tasks: 4,
                        tasksCompleted: 1
                      },
                    ].map((bridesmaid, i) => (
                      <div key={i} className="bg-pink-50/50 p-4 rounded-lg hover:bg-pink-50 transition-colors">
                        <div className="flex items-start space-x-3">
                          <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                            <Image
                              src={bridesmaid.avatar}
                              alt={bridesmaid.name}
                              width={48}
                              height={48}
                              className="rounded-full"
                            />
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-sm">{bridesmaid.name}</h4>
                              <Badge className="bg-pink-100 text-pink-700 border-0">
                                {bridesmaid.tasksCompleted}/{bridesmaid.tasks}
                              </Badge>
                            </div>
                            <p className="text-xs text-pink-600">{bridesmaid.role}</p>
                            <p className="text-xs text-gray-600 mt-2 italic">"{bridesmaid.message}"</p>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-pink-100">
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>Progresso das Tarefas</span>
                            <span>{Math.round((bridesmaid.tasksCompleted / bridesmaid.tasks) * 100)}%</span>
                          </div>
                          <div className="h-1.5 bg-pink-100 rounded-full mt-1">
                            <div
                              className="h-full bg-pink-500 rounded-full"
                              style={{ width: `${(bridesmaid.tasksCompleted / bridesmaid.tasks) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Música de Fundo */}
                <div className="border-t pt-4 mt-6">
                  <h3 className="text-base font-medium mb-3 flex items-center">
                    <Music className="h-4 w-4 mr-2 text-pink-500" />
                    Música de Fundo
                  </h3>
                  <div className="flex justify-center">
                    <div className="space-y-3 w-full max-w-md">
                      <div className="aspect-video w-full">
                        <MusicPlayer 
                          title="Dua Lipa - New Rules" 
                          videoId="k2qgadSvNyU"
                          isPremium={true}
                        />
                      </div>
                      <div className="text-center mt-2">
                        <p className="text-xs text-gray-500">Adicione músicas personalizadas aos seus cartões</p>
                        <Badge variant="outline" className="bg-pink-50 text-pink-700 border-pink-200 text-xs mt-1">
                          Recurso Premium
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
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
