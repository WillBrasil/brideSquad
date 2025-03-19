import { Share2, Download, Copy, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function ShareSection() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4">Compartilhe as Memórias</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Compartilhe o cartão de memórias e o roteiro com todas as madrinhas e a noiva
        </p>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Link Exclusivo</CardTitle>
          <CardDescription>
            Compartilhe este link para que a noiva e as madrinhas possam acessar o conteúdo
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex space-x-2">
            <Input value="https://bridesquad.com/despedida/ana-2024" readOnly className="bg-gray-50" />
            <Button variant="outline" size="icon">
              <Copy className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="flex items-center justify-center">
              <Download className="h-4 w-4 mr-2" />
              Baixar Cartão
            </Button>
            <Button variant="outline" className="flex items-center justify-center">
              <Share2 className="h-4 w-4 mr-2" />
              Enviar por Email
            </Button>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">Compartilhar nas redes sociais</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <Instagram className="h-4 w-4 text-pink-600" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="h-4 w-4 text-blue-600" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z" />
                  <path d="M20.52 3.449a12.871 12.871 0 00-9.07-3.769 13 13 0 00-11.144 19.611l-.273 3.979a.75.75 0 00.75.75h.03l3.98-.209A13 13 0 0020.52 3.449zm-7.07 19.861a10.5 10.5 0 01-5.34-1.45l-.39-.234-3.999.21.33-3.999-.239-.37a10.5 10.5 0 112.639 5.843z" />
                </svg>
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-xs text-gray-500">O link expira em 30 dias</p>
          <Button className="bg-pink-600 hover:bg-pink-700">Gerar Novo Link</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

