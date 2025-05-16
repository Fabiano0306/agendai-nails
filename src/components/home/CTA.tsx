
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <div className="bg-gradient-to-r from-brand-pink to-brand-dark-pink py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Comece agora a transformar sua agenda
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
          Junte-se a milhares de profissionais que estão modernizando seu atendimento e crescendo seus negócios.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/cadastro">
            <Button className="bg-white text-brand-pink hover:bg-gray-100 hover:text-brand-dark-pink rounded-full px-8 py-6 text-lg">
              Criar conta grátis
            </Button>
          </Link>
          <Link to="/demo">
            <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg">
              Agendar demonstração
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
