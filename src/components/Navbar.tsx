
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold text-gray-900">
            EnglishPro
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#methods" className="text-gray-600 hover:text-gray-800 transition-colors hover:border-b hover:border-gray-900">
              Métodos
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-800 transition-colors hover:border-b hover:border-gray-900">
              Nosotros
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors hover:border-b hover:border-gray-900">
              Contacto
            </a>
            <Button className="bg-gray-600 hover:bg-gray-800 text-white">
              Comenzar ahora
            </Button>
          </div>
          
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobile && (
          <div
            className={`${
              isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
          >
            <div className="py-4 space-y-4 px-4">
              <a
                href="#methods"
                className="block text-gray-500 hover:text-gray-900 transition-colors "
                onClick={() => setIsMenuOpen(false)}
              >
                Métodos
              </a>
              <a
                href="#about"
                className="block text-gray-500 hover:text-gray-900 transition-colors "
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </a>
              <a
                href="#contact"
                className="block text-gray-500 hover:text-gray-900 transition-colors "
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <Button className="w-full bg-gray-600 hover:bg-gray-700 text-white">
                Comenzar ahora
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
