import { Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Feature {
  title: string;
  description: string;
  image: string;
  alt: string;
  icon?: string;
  href?: string;
  color?: string;
}

export default function Home() {
  const features: Feature[] = [
    {
      title: "Memórias Digitais",
      description: "Crie e compartilhe memórias especiais da despedida",
      image: "/images/features/feature-memories.jpg",
      alt: "Amigas tirando fotos e criando memórias juntas",
      icon: "📸",
      href: "/memories",
      color: "bg-pink-100"
    },
    {
      title: "Planejamento Simplificado",
      description: "Organize todos os detalhes em um só lugar",
      image: "/images/features/feature-planning.jpg",
      alt: "Grupo de amigas planejando eventos",
      icon: "🗓️",
      href: "/planner",
      color: "bg-purple-100"
    },
    {
      title: "Looks Coordenados",
      description: "Inspire-se com ideias de looks para o grupo",
      image: "/images/features/feature-looks.jpg",
      alt: "Grupo usando looks combinando para a festa",
      icon: "👗",
      href: "/looks",
      color: "bg-blue-100"
    },
    {
      title: "Papéis Definidos",
      description: "Defina as responsabilidades de cada madrinha",
      image: "/images/features/feature-roles.jpg",
      alt: "Amigas em diferentes papéis na celebração",
      icon: "👯‍♀️",
      href: "/roles",
      color: "bg-green-100"
    },
    {
      title: "Compartilhamento Fácil",
      description: "Compartilhe os momentos com todos os convidados",
      image: "/images/features/feature-sharing.jpg",
      alt: "Grupo compartilhando fotos e momentos",
      icon: "🔗",
      href: "/share",
      color: "bg-red-100"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      {/* Hero Section */}
      <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banners/banner-despedida.jpg"
            alt="Grupo de amigas celebrando a despedida de solteira"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pink-500/30 to-pink-600/40"></div>
        </div>

        <nav className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
          <div className="flex items-center">
            <Sparkles className="h-6 w-6 text-pink-600" />
            <span className="ml-2 font-bold text-xl text-pink-700">BrideSquad</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/login" className="text-pink-800 hover:text-pink-600 font-medium">
              Memórias
            </Link>
            <Link href="/login" className="text-pink-800 hover:text-pink-600 font-medium">
              Roteiros
            </Link>
            <Link href="/login" className="text-pink-800 hover:text-pink-600 font-medium">
              Looks
            </Link>
            <Link href="/login" className="text-pink-800 hover:text-pink-600 font-medium">
              Madrinhas
            </Link>
            <Link href="/login" className="text-pink-800 hover:text-pink-600 font-medium">
              Planos
            </Link>
          </div>
          <div>
            <Link
              href="/login"
              className="bg-white text-pink-600 px-4 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all"
            >
              Entrar
            </Link>
          </div>
        </nav>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-md">Crie Memórias Inesquecíveis</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
            Planeje a despedida de solteira perfeita e guarde as memórias para sempre
          </p>
          <Link
            href="/login"
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Começar Agora
          </Link>
        </div>
      </header>

      <div className="bg-yellow-50 border-b border-yellow-200 py-2">
        <div className="container mx-auto px-4 text-center">
          <p className="text-yellow-800 text-sm">
            Esta é uma demonstração. Para acessar todas as funcionalidades,
            <Link href="/login" className="font-medium text-pink-600 hover:text-pink-700 ml-1">
              faça login
            </Link>{" "}
            ou{" "}
            <Link href="/plano" className="font-medium text-pink-600 hover:text-pink-700">
              assine o plano Premium
            </Link>
            .
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        {/* Feature Cards */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4">Tudo o que você precisa</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ferramentas completas para criar a despedida de solteira perfeita
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Link href="/login" key={index} className="block h-full">
                <Card className={`h-full hover:shadow-lg transition-shadow border-none overflow-hidden`}>
                  <div className="relative h-40">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.alt}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 ${feature.color} opacity-60`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl">{feature.icon}</span>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-yellow-500 text-white">Exemplo</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button className="w-full bg-pink-600 hover:bg-pink-700">Acessar</Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16 bg-white rounded-xl p-8 shadow-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-pink-700 mb-2">O que dizem nossas clientes</h2>
            <p className="text-gray-600">Histórias reais de despedidas inesquecíveis</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Mariana Silva",
                role: "Noiva",
                quote:
                  "Graças ao BrideSquad, minha despedida foi simplesmente perfeita! As madrinhas conseguiram organizar tudo sem stress.",
              },
              {
                name: "Juliana Costa",
                role: "Madrinha",
                quote:
                  "Super fácil de usar! Conseguimos planejar cada detalhe e criar memórias que vão durar para sempre.",
              },
              {
                name: "Fernanda Oliveira",
                role: "Noiva",
                quote:
                  "As ferramentas de planejamento são incríveis! Tudo ficou organizado e o cartão de memórias emocionou a todas nós.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-pink-50 p-6 rounded-lg">
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
        </section>

        {/* Image Gallery */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-pink-700 mb-2">Momentos Especiais</h2>
            <p className="text-gray-600">Inspire-se com despedidas reais</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["/images/moments/momento1.jpg", "/images/moments/momento2.jpg", "/images/moments/momento3.jpg", "/images/moments/momento4.jpg"].map(
              (image, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Momento especial ${index + 1} da despedida de solteira`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ),
            )}
          </div>
        </section>

        {/* Seção de Exemplos */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-pink-700 mb-2">Cartões Criados Recentemente</h2>
            <p className="text-gray-600">Inspire-se com criações de outras madrinhas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: "abc123",
                title: "Despedida da Ana",
                color: "from-pink-400 to-pink-600",
                emoji: "🎉",
                date: "15 de Junho, 2024",
                location: "Praia do Forte, Bahia",
              },
              {
                id: "def456",
                title: "Celebração da Juliana",
                color: "from-purple-400 to-purple-600",
                emoji: "💃",
                date: "22 de Julho, 2024",
                location: "Campos do Jordão, SP",
              },
              {
                id: "ghi789",
                title: "Último Brinde da Fernanda",
                color: "from-blue-400 to-blue-600",
                emoji: "🥂",
                date: "8 de Agosto, 2024",
                location: "Gramado, RS",
              },
            ].map((card) => (
              <Link href="/login" key={card.id} className="block">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <div className={`relative h-48 bg-gradient-to-r ${card.color} flex items-center justify-center`}>
                    <span className="text-white text-6xl opacity-50">{card.emoji}</span>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-xl font-bold bg-black/30 px-4 py-2 rounded-lg">{card.title}</h3>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-yellow-500 text-white">Exemplo</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription>
                      <div className="flex flex-col space-y-1">
                        <span>{card.date}</span>
                        <span>{card.location}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button className="w-full bg-pink-600 hover:bg-pink-700">Ver Cartão</Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronta para começar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Crie memórias inesquecíveis para a despedida de solteira perfeita
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/login"
              className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium text-lg"
            >
              Criar Cartão de Memórias
            </Link>
            <Link
              href="/login"
              className="bg-transparent hover:bg-pink-700 border-2 border-white px-8 py-3 rounded-full font-medium text-lg"
            >
              Planejar Roteiro
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-pink-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Sparkles className="h-5 w-5 mr-2" />
                BrideSquad
              </h3>
              <p className="text-pink-200">
                Transformando despedidas de solteira em memórias inesquecíveis desde 2024.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/memories" className="text-pink-200 hover:text-white">
                    Criador de Memórias
                  </Link>
                </li>
                <li>
                  <Link href="/planner" className="text-pink-200 hover:text-white">
                    Planejador de Roteiros
                  </Link>
                </li>
                <li>
                  <Link href="/looks" className="text-pink-200 hover:text-white">
                    Ideias de Looks
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-pink-200 hover:text-white">
                    Planos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <p className="text-pink-200 mb-2">contato@bridesquad.com</p>
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="text-pink-200 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-pink-200 hover:text-white">
                  <span className="sr-only">TikTok</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-pink-700 text-center text-pink-300">
            <p>&copy; {new Date().getFullYear()} BrideSquad. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

