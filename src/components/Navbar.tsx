
import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold text-theme-600">
            EnglishPro
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#methods" className="text-gray-600 hover:text-theme-600 transition-colors">
              Métodos
            </a>
            <a href="#about" className="text-gray-600 hover:text-theme-600 transition-colors">
              Nosotros
            </a>
            <a href="#contact" className="text-gray-600 hover:text-theme-600 transition-colors">
              Contacto
            </a>
            <Button className="bg-theme-600 hover:bg-theme-700 text-white">
              Comenzar ahora
            </Button>
          </div>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
