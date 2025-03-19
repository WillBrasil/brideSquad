"use client"

import { useState } from "react"
import { Heart, ShoppingBag, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"

interface Look {
  id: number
  title: string
  description: string
  image: string
  alt: string
  tags: string[]
}

export default function LooksGallery() {
  const [selectedTab, setSelectedTab] = useState("todos")
  const [selectedLook, setSelectedLook] = useState<null | Look>(null)

  const looks = [
    {
      id: 1,
      title: "Camisetas Personalizadas",
      description: "Looks com camisetas personalizadas para o grupo",
      image: "/images/looks/look-camisetas.jpg",
      alt: "Grupo usando camisetas personalizadas combinando",
      tags: ["casual", "personalizado"]
    },
    {
      id: 2,
      title: "Fantasias Temáticas",
      description: "Ideias de fantasias para festas temáticas",
      image: "/images/looks/look-fantasia.jpg",
      alt: "Grupo usando fantasias temáticas divertidas",
      tags: ["fantasia", "temático"]
    },
    {
      id: 3,
      title: "Look Praia",
      description: "Looks para despedida na praia",
      image: "/images/looks/look-praia.jpg",
      alt: "Grupo com looks coordenados para praia",
      tags: ["praia", "verão"]
    },
    {
      id: 4,
      title: "Look Noite",
      description: "Looks elegantes para festa noturna",
      image: "/images/looks/look-noite.jpg",
      alt: "Grupo com looks elegantes para festa noturna",
      tags: ["noite", "elegante"]
    },
    {
      id: 5,
      title: "Look Spa Day",
      description: "Looks confortáveis para dia de spa",
      image: "/images/looks/look-spa.jpg",
      alt: "Grupo com looks confortáveis para spa",
      tags: ["spa", "relax"]
    },
    {
      id: 6,
      title: "Look Temático",
      description: "Looks para festas com tema específico",
      image: "/images/looks/look-tematico.jpg",
      alt: "Grupo com looks temáticos especiais",
      tags: ["temático", "festa"]
    }
  ]

  const filteredLooks = selectedTab === "todos" ? looks : looks.filter((look) => look.tags.includes(selectedTab))

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4">Ideias de Looks e Temas</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Encontre inspirações para looks, fantasias e acessórios para a despedida perfeita
        </p>
      </div>

      <div className="mb-8 flex justify-between items-center">
        <Tabs defaultValue="todos" value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList>
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="casual">Casual</TabsTrigger>
            <TabsTrigger value="personalizado">Personalizado</TabsTrigger>
            <TabsTrigger value="fantasia">Fantasia</TabsTrigger>
            <TabsTrigger value="temático">Tema</TabsTrigger>
            <TabsTrigger value="praia">Praia</TabsTrigger>
            <TabsTrigger value="verão">Verão</TabsTrigger>
            <TabsTrigger value="noite">Noite</TabsTrigger>
            <TabsTrigger value="elegante">Elegante</TabsTrigger>
            <TabsTrigger value="spa">Spa</TabsTrigger>
            <TabsTrigger value="relax">Relax</TabsTrigger>
          </TabsList>
        </Tabs>

        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filtrar
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLooks.map((look) => (
          <Card key={look.id} className="overflow-hidden group">
            <div className="relative">
              <Image
                src={look.image}
                alt={look.alt}
                fill
                className="object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3">
                <Button variant="ghost" size="icon" className="rounded-full bg-white/80 hover:bg-white">
                  <Heart className="h-5 w-5 text-pink-600" />
                </Button>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-white text-pink-600 hover:bg-white/90" onClick={() => setSelectedLook(look)}>
                      Ver Detalhes
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>{selectedLook?.title}</DialogTitle>
                      <DialogDescription>Detalhes do produto e opções de personalização</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      {selectedLook && (
                        <div className="grid gap-4">
                          <div
                            className={`w-full h-64 ${selectedLook.tags.includes("casual") ? "bg-pink-200" : selectedLook.tags.includes("fantasia") ? "bg-purple-200" : selectedLook.tags.includes("temático") ? "bg-blue-200" : "bg-blue-200"} rounded-md flex items-center justify-center`}
                          >
                            <span className="text-6xl">
                              {selectedLook.tags.includes("casual")
                                ? "👚"
                                : selectedLook.tags.includes("fantasia")
                                  ? "👗"
                                  : selectedLook.tags.includes("temático")
                                    ? "👑"
                                    : "👑"}
                            </span>
                          </div>
                          <div className="space-y-2">
                            <h3 className="font-medium text-lg">{selectedLook.title}</h3>
                            <p className="text-gray-500">
                              {selectedLook.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                {selectedLook.tags.map((tag, index) => (
                                  <Badge key={index} variant="secondary">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          <Button className="w-full bg-pink-600 hover:bg-pink-700">
                            <ShoppingBag className="h-4 w-4 mr-2" />
                            Adicionar ao Carrinho
                          </Button>
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium">{look.title}</h3>
              <p className="text-gray-500 mt-1">{look.description}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button variant="outline" className="w-full">
                Ver Detalhes
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline">Carregar Mais</Button>
      </div>
    </div>
  )
}

