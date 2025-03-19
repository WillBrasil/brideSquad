"use client"

import { useState } from "react"
import { Calendar, MapPin, Clock, Users, Download, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This is a mock component since we don't have the actual implementation
function DatePicker({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Input type="date" className="w-full" />
    </div>
  )
}

export default function EventPlanner() {
  const [selectedCategory, setSelectedCategory] = useState("balada")

  const categories = [
    { id: "balada", name: "Balada", icon: <Clock className="h-5 w-5" /> },
    { id: "viagem", name: "Viagem", icon: <MapPin className="h-5 w-5" /> },
    { id: "spa", name: "Spa", icon: <Users className="h-5 w-5" /> },
    { id: "jantar", name: "Jantar", icon: <Calendar className="h-5 w-5" /> },
  ]

  const suggestions = {
    balada: [
      { name: "Club XYZ", address: "Rua das Flores, 123", rating: 4.8 },
      { name: "Lounge Bar", address: "Av. Principal, 456", rating: 4.5 },
      { name: "Rooftop Party", address: "Rua do Sol, 789", rating: 4.7 },
    ],
    viagem: [
      { name: "Praia do Forte", address: "Litoral Norte", rating: 4.9 },
      { name: "Campos do Jordão", address: "Serra da Mantiqueira", rating: 4.8 },
      { name: "Vinícola Vale dos Vinhedos", address: "Sul do Brasil", rating: 4.7 },
    ],
    spa: [
      { name: "Spa Relax", address: "Rua da Paz, 123", rating: 4.9 },
      { name: "Wellness Center", address: "Av. Saúde, 456", rating: 4.6 },
      { name: "Zen Spa", address: "Rua do Bem-estar, 789", rating: 4.8 },
    ],
    jantar: [
      { name: "Restaurante Gourmet", address: "Rua da Gastronomia, 123", rating: 4.7 },
      { name: "Bistrô Chique", address: "Av. dos Sabores, 456", rating: 4.5 },
      { name: "Rooftop Dinner", address: "Rua das Estrelas, 789", rating: 4.8 },
    ],
  }

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4">Planejador de Roteiros</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Crie o roteiro perfeito para a despedida de solteira com sugestões personalizadas
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Detalhes do Evento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="event-name">Nome do Evento</Label>
                <Input id="event-name" placeholder="Despedida da Ana" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="event-date">Data</Label>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-pink-500" />
                  <DatePicker className="flex-1" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="event-location">Cidade</Label>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-pink-500" />
                  <Input id="event-location" placeholder="São Paulo" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="event-participants">Número de Participantes</Label>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-pink-500" />
                  <Input id="event-participants" type="number" placeholder="10" min="1" />
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <Label>Categoria Principal</Label>
                <RadioGroup
                  defaultValue={selectedCategory}
                  onValueChange={setSelectedCategory}
                  className="grid grid-cols-2 gap-2"
                >
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={category.id} id={category.id} />
                      <Label htmlFor={category.id} className="flex items-center cursor-pointer">
                        <span className="mr-2">{category.icon}</span>
                        {category.name}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Sugestões de Locais</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={selectedCategory} value={selectedCategory}>
                <TabsList className="grid grid-cols-4 mb-6">
                  {categories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id} onClick={() => setSelectedCategory(category.id)}>
                      <span className="flex items-center">
                        <span className="mr-2">{category.icon}</span>
                        <span className="hidden sm:inline">{category.name}</span>
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {Object.entries(suggestions).map(([category, places]) => (
                  <TabsContent key={category} value={category} className="space-y-4">
                    {places.map((place, index) => (
                      <Card key={index}>
                        <CardContent className="p-4 flex justify-between items-center">
                          <div>
                            <h3 className="font-medium text-lg">{place.name}</h3>
                            <p className="text-gray-500">{place.address}</p>
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center mr-4">
                              <span className="text-yellow-500 mr-1">★</span>
                              <span>{place.rating}</span>
                            </div>
                            <Button variant="outline" size="sm">
                              Adicionar
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}

                    <Button variant="outline" className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Ver mais opções
                    </Button>
                  </TabsContent>
                ))}
              </Tabs>

              <Separator className="my-6" />

              <div>
                <h3 className="font-medium text-lg mb-4">Seu Roteiro</h3>

                <div className="space-y-3 mb-6">
                  <div className="bg-pink-50 p-4 rounded-lg flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-pink-200 rounded-full p-2 mr-3">
                        <Clock className="h-5 w-5 text-pink-700" />
                      </div>
                      <div>
                        <h4 className="font-medium">Lounge Bar</h4>
                        <p className="text-sm text-gray-500">19:00 - 22:00</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Remover
                    </Button>
                  </div>

                  <div className="bg-pink-50 p-4 rounded-lg flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-pink-200 rounded-full p-2 mr-3">
                        <MapPin className="h-5 w-5 text-pink-700" />
                      </div>
                      <div>
                        <h4 className="font-medium">Club XYZ</h4>
                        <p className="text-sm text-gray-500">22:30 - 03:00</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Remover
                    </Button>
                  </div>
                </div>

                <div className="flex justify-end space-x-3">
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Exportar PDF
                  </Button>
                  <Button className="bg-pink-600 hover:bg-pink-700">Salvar Roteiro</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

