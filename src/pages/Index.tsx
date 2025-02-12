import React from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { BookOpen, Users, Target, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col justify-between items-center md:flex-row ">
            <div className="md:w-1/2 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Domina el inglés con clases personalizadas
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Aprende inglés de manera efectiva y personalizada. Mejora tu fluidez y confianza en el idioma.
              </p>
              <div className="flex gap-4">
                <Button className="bg-theme-600 hover:bg-theme-700 text-white">
                  Comenzar ahora
                </Button>
                <Button variant="outline" className="border-theme-600 text-theme-600">
                  Más información
                </Button>
              </div>
            </div>
            <div className="mt-12 md:mt-0 animate-fade-in-slow">
              <img
                src="/lovable-uploads/518fb0e6-1651-4ccd-b2b9-44d7b515e7e4.png"
                alt="English Learning"
                className="w-96 "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50" id="methods">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Métodos de enseñanza personalizados y efectivos
            </h2>
            <p className="text-xl text-gray-600">
              Cada lección se adapta a tus necesidades específicas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-theme-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-theme-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Clases interactivas</h3>
              <p className="text-gray-600">
                Las sesiones en línea fomentan la participación activa y el aprendizaje dinámico.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-theme-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-theme-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Enfoque personalizado</h3>
              <p className="text-gray-600">
                Desarrollamos habilidades comunicativas en un ambiente seguro y confiable.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-theme-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-theme-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Materiales adaptados</h3>
              <p className="text-gray-600">
                Utilizamos recursos que se ajustan a tu progreso y objetivos de aprendizaje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sobre Nosotros
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                En EnglishPro, somos un equipo apasionado de profesores nativos y experimentados, dedicados a ayudarte a alcanzar tus metas con el idioma inglés.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Con más de 10 años de experiencia en la enseñanza del inglés, hemos desarrollado métodos efectivos que se adaptan a las necesidades individuales de cada estudiante.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-theme-600" />
                  <span>Profesores nativos certificados</span>
                </li>
                <li className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-theme-600" />
                  <span>Metodología probada y efectiva</span>
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-theme-600" />
                  <span>Clases personalizadas a tu nivel</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="/lovable-uploads/518fb0e6-1651-4ccd-b2b9-44d7b515e7e4.png"
                alt="Nuestro equipo"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-theme-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            ¡Mejora tu inglés hoy mismo!
          </h2>
          <Button size="lg" className="bg-white text-theme-600 hover:bg-gray-100">
            Inscríbete ahora <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Contáctanos
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Estamos aquí para ayudarte con tus consultas
            </p>
            <div className="space-y-4">
              <p className="text-gray-600">
                <span className="font-semibold">Email:</span> contacto@englishpro.com
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Teléfono:</span> +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 EnglishPro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
