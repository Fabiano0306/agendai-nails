
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface PlanFeature {
  text: string;
  available: boolean;
}

interface PlanProps {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  highlighted?: boolean;
  buttonText: string;
  buttonLink: string;
}

const PlanCard = ({ name, price, description, features, highlighted = false, buttonText, buttonLink }: PlanProps) => {
  return (
    <div className={`border rounded-xl p-6 ${highlighted ? 'border-brand-pink ring-2 ring-pink-100' : ''} h-full flex flex-col`}>
      <div>
        <h3 className={`text-xl font-bold ${highlighted ? 'text-brand-pink' : ''}`}>{name}</h3>
        <div className="mt-4 mb-2">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Grátis" && <span className="text-gray-500">/mês</span>}
        </div>
        <p className="text-gray-500 mb-6">{description}</p>
      </div>
      
      <div className="mb-8 flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.available ? (
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
              ) : (
                <div className="h-5 w-5 rounded-full border border-gray-300 mr-2 shrink-0 mt-0.5" />
              )}
              <span className={feature.available ? "" : "text-gray-400"}>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Link to={buttonLink} className="block">
        <Button 
          className={`w-full ${highlighted ? 'bg-brand-pink hover:bg-brand-dark-pink' : 'bg-gray-800 hover:bg-gray-700'}`}
        >
          {buttonText}
        </Button>
      </Link>
    </div>
  );
};

const Pricing = () => {
  const { user } = useAuth();
  const authLink = user ? "/dashboard" : "/auth";
  
  const plans = [
    {
      name: "Grátis",
      price: "Grátis",
      description: "Perfeito para começar e experimentar",
      features: [
        { text: "Até 15 agendamentos/mês", available: true },
        { text: "Dashboard com visão geral", available: true },
        { text: "Calendário de agendamentos", available: true },
        { text: "Gerenciamento de serviços", available: true },
        { text: "Lembretes automáticos", available: false },
        { text: "Link personalizado", available: false },
        { text: "Sistema de fidelidade", available: false },
      ],
      buttonText: user ? "Manter plano atual" : "Começar grátis",
      buttonLink: authLink,
    },
    {
      name: "Pro",
      price: "R$29",
      description: "Para profissionais em crescimento",
      highlighted: true,
      features: [
        { text: "Até 100 agendamentos/mês", available: true },
        { text: "Dashboard com visão geral", available: true },
        { text: "Calendário de agendamentos", available: true },
        { text: "Gerenciamento de serviços", available: true },
        { text: "Lembretes automáticos", available: true },
        { text: "Link personalizado", available: false },
        { text: "Sistema de fidelidade", available: false },
      ],
      buttonText: "Assinar plano Pro",
      buttonLink: authLink,
    },
    {
      name: "Premium",
      price: "R$59",
      description: "Para profissionais estabelecidos",
      features: [
        { text: "Agendamentos ilimitados", available: true },
        { text: "Dashboard com visão geral", available: true },
        { text: "Calendário de agendamentos", available: true },
        { text: "Gerenciamento de serviços", available: true },
        { text: "Lembretes automáticos", available: true },
        { text: "Link personalizado", available: true },
        { text: "Sistema de fidelidade", available: true },
      ],
      buttonText: "Assinar plano Premium",
      buttonLink: authLink,
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="container py-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Planos e <span className="gradient-text">Preços</span>
            </h1>
            <p className="text-lg text-gray-600">
              Escolha o plano ideal para o seu negócio de manicure/pedicure. 
              Todos os planos incluem acesso ao sistema básico de agendamentos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <PlanCard key={index} {...plan} />
            ))}
          </div>
          
          <div className="bg-pink-50 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div>
                <h3 className="font-semibold text-lg mb-2">Posso mudar de plano a qualquer momento?</h3>
                <p className="text-gray-600">Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças serão aplicadas no próximo ciclo de faturamento.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">O que acontece se eu ultrapassar o limite de agendamentos?</h3>
                <p className="text-gray-600">Quando você atingir o limite do seu plano, você receberá uma notificação sugerindo o upgrade. Você poderá continuar usando o sistema, mas não poderá criar novos agendamentos até fazer o upgrade ou iniciar um novo ciclo.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Como funcionam os lembretes automáticos?</h3>
                <p className="text-gray-600">Os lembretes automáticos são enviados para seus clientes por e-mail ou WhatsApp (conforme sua preferência) 24 horas e 1 hora antes do horário agendado.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Como funciona o sistema de fidelidade?</h3>
                <p className="text-gray-600">O sistema de fidelidade permite que seus clientes acumulem pontos a cada agendamento concluído. Quando atingirem 10 pontos, ganharão um serviço gratuito à sua escolha. Você pode personalizar essas regras.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Como é o link personalizado?</h3>
                <p className="text-gray-600">Com o plano Premium, você recebe um link no formato agendainails.com/seunome que pode compartilhar nas redes sociais. Este link leva a uma página personalizada com seu perfil, serviços e sistema de agendamento.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h2>
            <p className="text-gray-600 mb-6">
              Entre em contato com nosso suporte para esclarecer qualquer questão sobre nossos planos e funcionalidades.
            </p>
            <Button variant="outline" className="border-brand-pink text-brand-pink hover:bg-pink-50">
              Fale com o suporte
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
