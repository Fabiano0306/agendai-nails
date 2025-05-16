
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Grátis",
    price: "0",
    description: "Perfeito para começar a organizar sua agenda",
    features: [
      "Até 15 agendamentos/mês",
      "Cadastro de 5 serviços",
      "Agenda online básica",
      "Link de agendamento padrão",
    ],
    buttonText: "Começar agora",
    buttonVariant: "outline",
    popular: false,
  },
  {
    name: "Pro",
    price: "29",
    description: "Ideal para profissionais em crescimento",
    features: [
      "Até 100 agendamentos/mês",
      "Cadastro ilimitado de serviços",
      "Lembretes automáticos",
      "Relatórios básicos",
      "Link de agendamento personalizado",
    ],
    buttonText: "Assinar Pro",
    buttonVariant: "default",
    popular: true,
  },
  {
    name: "Premium",
    price: "59",
    description: "Completo para profissionais estabelecidos",
    features: [
      "Agendamentos ilimitados",
      "Cadastro ilimitado de serviços",
      "Lembretes automáticos",
      "Relatórios avançados",
      "Link personalizado",
      "Sistema de fidelidade",
      "Suporte prioritário",
    ],
    buttonText: "Assinar Premium",
    buttonVariant: "outline",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <div className="bg-brand-light-pink/20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold gradient-text mb-4">Planos para cada fase do seu negócio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comece grátis e atualize conforme o seu negócio cresce
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl overflow-hidden transition-all ${
                plan.popular 
                  ? "shadow-lg ring-2 ring-brand-pink/70 transform md:-translate-y-4" 
                  : "shadow-md hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="bg-brand-pink text-white text-center py-2 text-sm font-medium">
                  Mais popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">R${plan.price}</span>
                  <span className="text-gray-500">/mês</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <Link to="/cadastro">
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? "bg-brand-pink hover:bg-brand-dark-pink text-white" 
                        : "border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white"
                    } rounded-md py-5`}
                  >
                    {plan.buttonText}
                  </Button>
                </Link>
                <div className="mt-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Recursos inclusos</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-brand-pink shrink-0 mr-3" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
