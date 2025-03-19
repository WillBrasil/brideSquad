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

export default function LooksGallery() {
  const [selectedTab, setSelectedTab] = useState("todos")
  const [selectedLook, setSelectedLook] = useState<null | {
    id: number
    title: string
    image: string
    price: number
    category: string
  }>(null)

  const looks = [
    {
      id: 1,
      title: "Kit Camisetas Personalizadas",
      image: "/images/look-camisetas.jpg",
      price: 129.9,
      category: "camisetas",
    },
    {
      id: 2,
      title: "Fantasia de Noiva",
      image: "/images/look-fantasia.jpg",
      price: 89.9,
      category: "fantasias",
    },
    {
      id: 3,
      title: "Kit Acessórios Divertidos",
      image: "/placeholder.svg?height=400&width=300",
      price: 59.9,
      category: "acessorios",
    },
    {
      id: 4,
      title: "Camiseta Team Bride",
      image: "/placeholder.svg?height=400&width=300",
      price: 49.9,
      category: "camisetas",
    },
    {
      id: 5,
      title: "Fantasia de Anjo e Diabinha",
      image: "/placeholder.svg?height=400&width=300",
      price: 119.9,
      category: "fantasias",
    },
    {
      id: 6,
      title: "Tiaras Personalizadas",
      image: "/placeholder.svg?height=400&width=300",
      price: 39.9,
      category: "acessorios",
    },
  ]

  const filteredLooks = selectedTab === "todos" ? looks : looks.filter((look) => look.category === selectedTab)

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
            <TabsTrigger value="camisetas">Camisetas</TabsTrigger>
            <TabsTrigger value="fantasias">Fantasias</TabsTrigger>
            <TabsTrigger value="acessorios">Acessórios</TabsTrigger>
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
                src={look.image || "/placeholder.svg"}
                alt={look.title}
                width={300}
                height={400}
                className="w-full h-64 object-cover"
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
                            className={`w-full h-64 ${selectedLook.category === "camisetas" ? "bg-pink-200" : selectedLook.category === "fantasias" ? "bg-purple-200" : "bg-blue-200"} rounded-md flex items-center justify-center`}
                          >
                            <span className="text-6xl">
                              {selectedLook.category === "camisetas"
                                ? "👚"
                                : selectedLook.category === "fantasias"
                                  ? "👗"
                                  : "👑"}
                            </span>
                          </div>
                          <div className="space-y-2">
                            <h3 className="font-medium text-lg">{selectedLook.title}</h3>
                            <p className="text-gray-500">
                              Produto perfeito para despedidas de solteira. Disponível em várias cores e tamanhos.
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-xl font-bold text-pink-600">
                                R$ {selectedLook.price.toFixed(2)}
                              </span>
                              <Badge>Personalização disponível</Badge>
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
              <p className="text-pink-600 font-bold mt-1">R$ {look.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button variant="outline" className="w-full">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Comprar
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

