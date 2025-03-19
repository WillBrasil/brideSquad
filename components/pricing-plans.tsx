import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPlans() {
  const plans = [
    {
      name: "Gratuito",
      price: "R$ 0",
      description: "Perfeito para pequenas despedidas",
      features: [
        "Até 20 fotos no cartão de memórias",
        "Até 5 mensagens personalizadas",
        "1 modelo de cartão básico",
        "Compartilhamento via link",
      ],
      limitations: ["Sem download em alta qualidade", "Sem músicas personalizadas", "Sem templates exclusivos"],
      buttonText: "Começar Grátis",
      popular: false,
    },
    {
      name: "Premium",
      price: "R$ 49,90",
      description: "Ideal para despedidas inesquecíveis",
      features: [
        "Fotos e vídeos ilimitados",
        "Mensagens ilimitadas",
        "10 modelos de cartões exclusivos",
        "Músicas personalizadas",
        "Download em alta qualidade",
        "Cupons de desconto para parceiros",
        "Suporte prioritário",
      ],
      limitations: [],
      buttonText: "Assinar Premium",
      popular: true,
    },
    {
      name: "Grupo",
      price: "R$ 99,90",
      description: "Para equipes de madrinhas",
      features: [
        "Todos os benefícios do Premium",
        "Acesso para até 10 madrinhas",
        "Área de colaboração em tempo real",
        "Ferramentas de organização avançadas",
        "Modelos de convites exclusivos",
        "Relatórios de planejamento",
      ],
      limitations: [],
      buttonText: "Escolher Plano Grupo",
      popular: false,
    },
  ]

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4">Planos e Preços</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Escolha o plano ideal para criar a despedida de solteira perfeita
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`flex flex-col ${plan.popular ? "border-pink-400 shadow-lg relative overflow-hidden" : ""}`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0">
                <div className="bg-pink-600 text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-6 translate-y-3">
                  POPULAR
                </div>
              </div>
            )}

            <CardHeader>
              <CardTitle className={plan.popular ? "text-pink-600" : ""}>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.name !== "Gratuito" && <span className="text-gray-500 ml-2">/mês</span>}
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}

                {plan.limitations.map((limitation, i) => (
                  <li key={i} className="flex items-start text-gray-400">
                    <span className="mr-2">✕</span>
                    <span>{limitation}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full ${plan.popular ? "bg-pink-600 hover:bg-pink-700" : "bg-gray-800 hover:bg-gray-900"}`}
              >
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-500 mb-4">Todos os planos incluem 14 dias de teste grátis. Sem compromisso.</p>
        <Button variant="link" className="text-pink-600">
          Ver comparação completa dos planos
        </Button>
      </div>
    </div>
  )
}

