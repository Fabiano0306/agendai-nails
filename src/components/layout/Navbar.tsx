
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold gradient-text">AgendAI Nails</h1>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link to="/como-funciona" className="text-gray-600 hover:text-brand-pink px-3 py-2 rounded-md font-medium">
                  Como funciona
                </Link>
                <Link to="/planos" className="text-gray-600 hover:text-brand-pink px-3 py-2 rounded-md font-medium">
                  Planos
                </Link>
                <Link to="/contato" className="text-gray-600 hover:text-brand-pink px-3 py-2 rounded-md font-medium">
                  Contato
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline" className="rounded-full border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white">
                  Entrar
                </Button>
              </Link>
              <Link to="/cadastro">
                <Button className="bg-brand-pink hover:bg-brand-dark-pink text-white rounded-full">
                  Cadastre-se
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-brand-pink"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            <Link
              to="/como-funciona"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-brand-pink"
              onClick={() => setIsMenuOpen(false)}
            >
              Como funciona
            </Link>
            <Link
              to="/planos"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-brand-pink"
              onClick={() => setIsMenuOpen(false)}
            >
              Planos
            </Link>
            <Link
              to="/contato"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-brand-pink"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-pink hover:bg-brand-light-pink"
              onClick={() => setIsMenuOpen(false)}
            >
              Entrar
            </Link>
            <Link
              to="/cadastro"
              className="block px-3 py-2 rounded-md text-base font-medium bg-brand-pink text-white hover:bg-brand-dark-pink"
              onClick={() => setIsMenuOpen(false)}
            >
              Cadastre-se
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
