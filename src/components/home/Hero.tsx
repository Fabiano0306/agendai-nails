
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-brand-light-pink/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="gradient-text">Agenda inteligente</span> para{" "}
              <span className="gradient-text">manicures</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Transforme sua rotina com agendamentos online, lembretes automáticos e um sistema 
              completo para fidelizar seus clientes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/cadastro">
                <Button className="bg-brand-pink hover:bg-brand-dark-pink text-white rounded-full px-8 py-6 text-lg">
                  Começar grátis
                </Button>
              </Link>
              <Link to="/como-funciona">
                <Button variant="outline" className="rounded-full border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white px-8 py-6 text-lg">
                  Saiba mais
                </Button>
              </Link>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-pink mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Teste grátis por 14 dias. Sem necessidade de cartão.
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg shadow-xl bg-white p-2 max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="AgendAI Nails Dashboard" 
                className="rounded-lg w-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-pink rounded-full opacity-20 animate-float"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-brand-pink rounded-full opacity-30 animate-float" style={{ animationDelay: "2s" }}></div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 50" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,21,960,16C1120,11,1280,21,1360,26.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
