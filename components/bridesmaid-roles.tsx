"use client"

import type React from "react"

import { useState } from "react"
import { UserPlus, Mic, Gift, Camera, Sparkles, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function BridesmaidRoles() {
  const [bridesmaids, setBridesmaids] = useState([
    {
      id: 1,
      name: "Mariana Silva",
      role: "Madrinha da Zueira",
      message: "Vamos fazer dessa despedida a melhor de todas!",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Juliana Costa",
      role: "Madrinha das Fotos",
      message: "Pronta para registrar todos os momentos!",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ])

  const roles = [
    { id: "zueira", name: "Madrinha da Zueira", icon: <Sparkles className="h-5 w-5" /> },
    { id: "fotos", name: "Madrinha das Fotos", icon: <Camera className="h-5 w-5" /> },
    { id: "presentes", name: "Madrinha dos Presentes", icon: <Gift className="h-5 w-5" /> },
    { id: "musica", name: "Madrinha da Música", icon: <Mic className="h-5 w-5" /> },
  ]

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4">Função de Cada Madrinha</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Organize as responsabilidades e deixe recados especiais para a noiva
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Adicionar Madrinha</CardTitle>
              <CardDescription>Defina as funções de cada madrinha para a despedida</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome da Madrinha</Label>
                <Input id="name" placeholder="Digite o nome completo" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Função</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma função" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role.id} value={role.id}>
                        <div className="flex items-center">
                          <span className="mr-2">{role.icon}</span>
                          {role.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Recado para a Noiva</Label>
                <Textarea id="message" placeholder="Escreva um recado especial..." className="min-h-[100px]" />
              </div>

              <div className="space-y-2">
                <Label>Foto (opcional)</Label>
                <div className="border-2 border-dashed border-pink-200 rounded-lg p-4 text-center">
                  <Camera className="h-8 w-8 mx-auto text-pink-300 mb-2" />
                  <p className="text-sm text-gray-500 mb-2">Arraste uma foto ou clique para selecionar</p>
                  <Button variant="outline" size="sm">
                    Selecionar Foto
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-pink-600 hover:bg-pink-700">
                <UserPlus className="h-4 w-4 mr-2" />
                Adicionar Madrinha
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Madrinhas da Despedida</CardTitle>
              <CardDescription>Equipe responsável por tornar esse dia inesquecível</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {bridesmaids.map((bridesmaid) => (
                  <div key={bridesmaid.id} className="flex flex-col md:flex-row gap-4 p-4 bg-pink-50 rounded-lg">
                    <Avatar className="h-16 w-16 border-2 border-pink-200">
                      <AvatarFallback className="bg-pink-200 text-pink-700">
                        {bridesmaid.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="font-medium text-lg">{bridesmaid.name}</h3>
                        <Badge className="bg-pink-200 text-pink-700 hover:bg-pink-300 inline-flex items-center px-2 py-1 rounded-full text-xs">
                          {bridesmaid.role}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-3">{bridesmaid.message}</p>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Mic className="h-4 w-4 mr-2" />
                          Gravar Áudio
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4 mr-2" />
                          Editar
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Exportar Lista</Button>
              <Button className="bg-pink-600 hover:bg-pink-700">Enviar para a Noiva</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Badge component since it's not imported from shadcn/ui
function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}>
      {children}
    </span>
  )
}

