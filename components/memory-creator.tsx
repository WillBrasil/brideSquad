"use client"

import { useState } from "react"
import { Upload, ImageIcon, Music, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

export default function MemoryCreator() {
  const router = useRouter()
  const [selectedTab, setSelectedTab] = useState("fotos")
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([
    "/placeholder.svg?height=400&width=600&text=Foto+1",
    "/placeholder.svg?height=400&width=600&text=Foto+2",
  ])
  const [title, setTitle] = useState("Despedida da Ana")
  const [description, setDescription] = useState("")

  const handlePreview = () => {
    // Normalmente, você salvaria os dados e obteria um ID
    // Aqui estamos apenas simulando com um ID fixo
    router.push("/preview/abc123")
  }

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4">Criador de Cartão de Memórias</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Crie um cartão digital especial com fotos, vídeos e mensagens personalizadas para a noiva
        </p>
      </div>

      <div className="mb-8">
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="card-title">Título do Cartão</Label>
              <Input
                id="card-title"
                placeholder="Ex: Despedida da Ana"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mb-4"
              />

              <Label htmlFor="card-description">Descrição</Label>
              <Textarea
                id="card-description"
                placeholder="Descreva o evento em poucas palavras..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mb-4"
              />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="event-date">Data do Evento</Label>
                  <Input id="event-date" type="date" className="mb-4" />
                </div>
                <div>
                  <Label htmlFor="event-location">Local</Label>
                  <Input id="event-location" placeholder="Ex: Praia do Forte, Bahia" className="mb-4" />
                </div>
              </div>
            </div>

            <div>
              <Label>Imagem de Capa</Label>
              <div className="border-2 border-dashed border-pink-200 rounded-lg p-8 text-center h-[200px] flex flex-col items-center justify-center">
                <ImageIcon className="h-12 w-12 text-pink-300 mb-4" />
                <p className="text-gray-500 mb-4">Arraste uma imagem ou clique para selecionar</p>
                <Button variant="outline" size="sm">
                  Selecionar Imagem
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-xl p-6">
          <Tabs defaultValue="fotos" onValueChange={setSelectedTab}>
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="fotos" className="text-sm md:text-base">
                <ImageIcon className="h-4 w-4 mr-2" />
                Fotos
              </TabsTrigger>
              <TabsTrigger value="mensagens" className="text-sm md:text-base">
                <Upload className="h-4 w-4 mr-2" />
                Mensagens
              </TabsTrigger>
              <TabsTrigger value="musica" className="text-sm md:text-base">
                <Music className="h-4 w-4 mr-2" />
                Música
              </TabsTrigger>
            </TabsList>

            <TabsContent value="fotos" className="space-y-4">
              <div className="border-2 border-dashed border-pink-200 rounded-lg p-8 text-center">
                <ImageIcon className="h-12 w-12 mx-auto text-pink-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-700 mb-2">Arraste e solte suas fotos aqui</h3>
                <p className="text-gray-500 mb-4">ou</p>
                <Button className="bg-pink-600 hover:bg-pink-700">Selecionar Arquivos</Button>
                <p className="text-xs text-gray-400 mt-4">Formatos suportados: JPG, PNG, GIF. Tamanho máximo: 10MB</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                {[0, 1].map((index) => (
                  <div key={index} className="relative group">
                    <div className="w-full h-32 bg-pink-200 rounded-lg flex items-center justify-center">
                      <ImageIcon className="h-8 w-8 text-pink-500" />
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                      <Button variant="ghost" size="icon" className="text-white">
                        <Upload className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="mensagens" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="sender-name">Seu nome</Label>
                  <Input id="sender-name" placeholder="Digite seu nome" />
                </div>
                <div>
                  <Label htmlFor="message">Mensagem para a noiva</Label>
                  <Textarea id="message" placeholder="Escreva uma mensagem especial..." className="min-h-[150px]" />
                </div>
                <div className="pt-2">
                  <Button className="bg-pink-600 hover:bg-pink-700 w-full">Adicionar Mensagem</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="musica" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="music-search">Buscar música</Label>
                  <div className="flex gap-2">
                    <Input id="music-search" placeholder="Nome da música ou artista" />
                    <Button variant="outline">Buscar</Button>
                  </div>
                </div>

                <div className="space-y-2 mt-6">
                  <p className="font-medium text-gray-700">Músicas populares para despedida</p>

                  {[
                    "Girls Just Want to Have Fun - Cyndi Lauper",
                    "Single Ladies - Beyoncé",
                    "Wannabe - Spice Girls",
                    "Dancing Queen - ABBA",
                  ].map((song, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-pink-50 rounded-lg">
                      <div className="flex items-center">
                        <Music className="h-5 w-5 text-pink-500 mr-3" />
                        <span>{song}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        Selecionar
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-pink-400 to-pink-600 p-4 text-white">
              <h3 className="text-xl font-bold">Prévia do Cartão</h3>
            </div>
            <CardContent className="p-0">
              {selectedTab === "fotos" && (
                <div className="relative h-[400px] bg-gradient-to-r from-pink-300 to-purple-300 flex items-center justify-center">
                  <div className="text-white text-8xl opacity-20">💖</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/60 text-white p-6 rounded-lg max-w-xs text-center">
                      <h3 className="text-2xl font-bold mb-2">{title || "Despedida da Ana"}</h3>
                      <p>{description || "Um dia especial para uma pessoa incrível!"}</p>
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === "mensagens" && (
                <div className="p-6 min-h-[400px] flex items-center justify-center">
                  <div className="text-center max-w-md">
                    <h3 className="text-2xl font-bold text-pink-600 mb-4">Mensagens de Carinho</h3>
                    <div className="bg-pink-50 p-4 rounded-lg mb-4">
                      <p className="italic text-gray-700">
                        "Ana, que essa nova fase seja repleta de amor e felicidade! Estou muito feliz por você!"
                      </p>
                      <p className="text-right text-sm font-medium text-pink-600 mt-2">- Mariana</p>
                    </div>
                    <p className="text-gray-500">Adicione sua mensagem para aparecer aqui</p>
                  </div>
                </div>
              )}

              {selectedTab === "musica" && (
                <div className="p-6 min-h-[400px] flex items-center justify-center">
                  <div className="text-center">
                    <Music className="h-16 w-16 text-pink-400 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Música Selecionada</h3>
                    <p className="text-pink-600 font-medium">Nenhuma música selecionada</p>
                    <p className="text-gray-500 mt-4">
                      Selecione uma música para tocar durante a apresentação do cartão
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-6 flex justify-between">
            <Button variant="outline">Salvar Rascunho</Button>
            <Button className="bg-pink-600 hover:bg-pink-700" onClick={handlePreview}>
              <Share2 className="h-4 w-4 mr-2" />
              Visualizar Resultado
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

