import { Sparkles, ArrowRight, Star, Users, Calendar, Camera, Heart, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Feature {
  title: string;
  description: string;
  image: string;
  alt: string;
  icon?: string;
  href?: string;
  color?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export default function Home() {
  const features: Feature[] = [
    {
      title: "Memórias Digitais",
      description: "Crie e compartilhe memórias especiais da despedida",
      image: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?q=80&w=1200",
      alt: "Amigas tirando fotos e criando memórias juntas",
      icon: "📸",
      href: "/memories",
      color: "bg-pink-100",
      stats: [
        { label: "Fotos compartilhadas", value: "2.5k+" },
        { label: "Álbuns criados", value: "500+" }
      ]
    },
    {
      title: "Planejamento Simplificado",
      description: "Organize todos os detalhes em um só lugar",
      image: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?q=80&w=1200",
      alt: "Grupo de amigas planejando eventos",
      icon: "🗓️",
      href: "/planner",
      color: "bg-purple-100",
      stats: [
        { label: "Eventos planejados", value: "1k+" },
        { label: "Tarefas concluídas", value: "10k+" }
      ]
    },
    {
      title: "Looks Coordenados",
      description: "Inspire-se com ideias de looks para o grupo",
      image: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?q=80&w=1200",
      alt: "Grupo usando looks combinando para a festa",
      icon: "👗",
      href: "/looks",
      color: "bg-blue-100",
      stats: [
        { label: "Looks salvos", value: "5k+" },
        { label: "Inspirações", value: "15k+" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      {/* Hero Section */}
      <header className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banners/banner-despedida.jpg"
            alt="Grupo de amigas celebrando a despedida de solteira"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pink-500/40 via-pink-600/50 to-pink-700/60"></div>
        </div>

        <nav className="absolute top-0 left-0 right-0 backdrop-blur-sm bg-white/30 border-b border-white/20">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center z-10">
            <div className="flex items-center">
              <Sparkles className="h-6 w-6 text-pink-600" />
              <span className="ml-2 font-bold text-xl text-pink-700">BrideSquad</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { label: "Memórias", icon: <Camera className="h-4 w-4" /> },
                { label: "Roteiros", icon: <Calendar className="h-4 w-4" /> },
                { label: "Looks", icon: <Heart className="h-4 w-4" /> },
                { label: "Madrinhas", icon: <Users className="h-4 w-4" /> },
              ].map((item) => (
                <Link
                  key={item.label}
                  href="/login"
                  className="text-pink-800 hover:text-pink-600 font-medium flex items-center space-x-1 group"
                >
                  {item.icon}
                  <span>{item.label}</span>
                  <ChevronRight className="h-3 w-3 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/plano"
                className="hidden md:flex items-center text-pink-700 hover:text-pink-600 font-medium"
              >
                <Star className="h-4 w-4 mr-1" />
                <span>Premium</span>
              </Link>
              <Link
                href="/login"
                className="bg-white/90 hover:bg-white text-pink-600 px-4 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all"
              >
                Entrar
              </Link>
            </div>
          </div>
        </nav>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            Crie Memórias <br className="hidden md:block" />
            <span className="text-pink-300">Inesquecíveis</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md font-light">
            Planeje a despedida de solteira perfeita e guarde as memórias para sempre
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/login"
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
            >
              Começar Agora
            </Link>
            <Link
              href="/preview-only"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3 rounded-full font-medium text-lg w-full sm:w-auto transition-all"
            >
              Ver Demonstração
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { label: "Despedidas Planejadas", value: "5k+" },
              { label: "Memórias Compartilhadas", value: "50k+" },
              { label: "Madrinhas Conectadas", value: "20k+" },
              { label: "Eventos Realizados", value: "3k+" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24 fill-current text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </header>

      <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-50 border-y border-yellow-200/50 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 text-yellow-800">
            <Star className="h-5 w-5 text-yellow-600" />
            <p className="text-sm">
              Experimente gratuitamente por 14 dias.{" "}
              <Link href="/plano" className="font-medium text-pink-600 hover:text-pink-700 inline-flex items-center">
                Conheça nossos planos
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        {/* Feature Cards */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4">
              Tudo o que você precisa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ferramentas completas para criar a despedida de solteira perfeita
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link href="/login" key={index} className="block group">
                <Card className={cn(
                  "h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-none overflow-hidden",
                  "relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-black/60 before:opacity-0 before:transition-opacity group-hover:before:opacity-100"
                )}>
                  <div className="relative h-48">
                    <Image
                      src={feature.image || "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?q=80&w=1200"}
                      alt={feature.alt}
                      fill
                      className="object-cover transition-transform group-hover:scale-105 duration-300"
                    />
                    <div className={cn(
                      "absolute inset-0 opacity-60 transition-opacity group-hover:opacity-40",
                      feature.color
                    )}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl transform transition-transform group-hover:scale-110 duration-300">
                        {feature.icon}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-white/90 text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                        Premium
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-pink-600 transition-colors">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="grid grid-cols-2 gap-4 border-t pt-4">
                    {feature.stats?.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-bold text-pink-600">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-pink-700 mb-4">O que dizem nossas clientes</h2>
            <p className="text-xl text-gray-600">Histórias reais de despedidas inesquecíveis</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Mariana Silva",
                role: "Noiva",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
                quote:
                  "Graças ao BrideSquad, minha despedida foi simplesmente perfeita! As madrinhas conseguiram organizar tudo sem stress.",
                rating: 5
              },
              {
                name: "Carolina Santos",
                role: "Madrinha",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150",
                quote:
                  "A ferramenta ideal para organizar despedidas! Conseguimos dividir tarefas e manter tudo sob controle.",
                rating: 5
              },
              {
                name: "Beatriz Lima",
                role: "Noiva",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150",
                quote:
                  "Amei como ficou fácil coordenar todas as madrinhas e manter as memórias organizadas em um só lugar!",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-pink-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?q=80&w=1200"
              alt="Celebração"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 to-purple-600/90"></div>
          </div>
          
          <div className="relative py-16 px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronta para criar memórias inesquecíveis?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de noivas que já estão planejando suas despedidas perfeitas
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/login"
                className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
              >
                Começar Agora
              </Link>
              <Link
                href="/plano"
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-3 rounded-full font-medium text-lg w-full sm:w-auto transition-all"
              >
                Ver Planos
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
