import { BookOpen, MessageCircle, Heart } from "lucide-react";
import booksImg from "@/assets/books-collection.jpg";

const features = [
  {
    icon: BookOpen,
    title: "Libros de calidad",
    description:
      "Títulos seleccionados por especialistas de editoriales reconocidas como El Barco de Vapor, Colofón y Herder.",
  },
  {
    icon: MessageCircle,
    title: "Guía de Sentido",
    description:
      "Material pedagógico exclusivo con preguntas y actividades que transforman la lectura en diálogo familiar.",
  },
  {
    icon: Heart,
    title: "Encuentro familiar",
    description:
      "Más que leer un libro: vivir un libro. Conversaciones que fortalecen el vínculo entre padres e hijos.",
  },
];

const WhatIsSection = () => {
  return (
    <section className="section-padding bg-sage-light">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Nuestro servicio
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-6">
              ¿Qué es la Biblioteca de Sentido?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Es un servicio de renta mensual de libros infantiles que llega a
              tu hogar a través de la escuela de tus hijos. Pero no es una
              simple renta: cada libro viene acompañado de una{" "}
              <strong className="text-foreground">Guía de Sentido</strong>, un
              material pedagógico único que convierte la lectura en un encuentro
              existencial en familia.
            </p>
            <div className="space-y-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <f.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {f.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={booksImg.src}
              alt="Colección de libros infantiles"
              className="rounded-2xl shadow-elevated w-full object-cover aspect-square"
            />
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-display font-bold text-sm shadow-card">
              +1,300 niños ya leen con nosotros
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
