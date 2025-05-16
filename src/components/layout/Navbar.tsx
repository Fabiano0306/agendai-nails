
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { user, profile, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
      scrolled ? "bg-white shadow-md" : "bg-transparent"
    }`}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-xl font-bold gradient-text">
          AgendAI Nails
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-brand-pink">
            Home
          </Link>
          <Link to="/como-funciona" className="text-gray-700 hover:text-brand-pink">
            Como Funciona
          </Link>
          <Link to="/planos" className="text-gray-700 hover:text-brand-pink">
            Planos
          </Link>
          
          {user ? (
            <>
              {profile?.user_type === "professional" ? (
                <Link to="/dashboard" className="text-gray-700 hover:text-brand-pink">
                  Dashboard
                </Link>
              ) : (
                <Link to="/agendamento" className="text-gray-700 hover:text-brand-pink">
                  Agendamento
                </Link>
              )}
              <Button onClick={signOut} variant="outline" className="ml-4">
                Sair
              </Button>
            </>
          ) : (
            <Link to="/auth">
              <Button className="bg-brand-pink hover:bg-brand-dark-pink">
                Entrar
              </Button>
            </Link>
          )}
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-gray-700"
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="container py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="px-4 py-2 text-gray-700 hover:bg-pink-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/como-funciona" 
              className="px-4 py-2 text-gray-700 hover:bg-pink-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Como Funciona
            </Link>
            <Link 
              to="/planos" 
              className="px-4 py-2 text-gray-700 hover:bg-pink-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Planos
            </Link>
            
            {user ? (
              <>
                {profile?.user_type === "professional" ? (
                  <Link 
                    to="/dashboard" 
                    className="px-4 py-2 text-gray-700 hover:bg-pink-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link 
                    to="/agendamento" 
                    className="px-4 py-2 text-gray-700 hover:bg-pink-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Agendamento
                  </Link>
                )}
                <Button 
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }} 
                  variant="outline" 
                  className="w-full"
                >
                  Sair
                </Button>
              </>
            ) : (
              <Link 
                to="/auth" 
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full bg-brand-pink hover:bg-brand-dark-pink">
                  Entrar
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
