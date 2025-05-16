
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold gradient-text mb-4">AgendAI Nails</h2>
            <p className="text-gray-500 text-sm">
              A solução completa de agendamento para profissionais de manicure e pedicure.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Plataforma
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/como-funciona" className="text-gray-500 hover:text-brand-pink">
                  Como funciona
                </Link>
              </li>
              <li>
                <Link to="/planos" className="text-gray-500 hover:text-brand-pink">
                  Planos
                </Link>
              </li>
              <li>
                <Link to="/recursos" className="text-gray-500 hover:text-brand-pink">
                  Recursos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Suporte
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-500 hover:text-brand-pink">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-500 hover:text-brand-pink">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/tutoriais" className="text-gray-500 hover:text-brand-pink">
                  Tutoriais
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/termos" className="text-gray-500 hover:text-brand-pink">
                  Termos de uso
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-gray-500 hover:text-brand-pink">
                  Política de privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} AgendAI Nails. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
