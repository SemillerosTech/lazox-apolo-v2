"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Puedo inscribirme a mitad de mes?",
    a: "Sí. Puedes unirte en cualquier momento del ciclo mensual.",
  },
  {
    q: "¿Puedo rentar libros para hijos de diferentes edades?",
    a: "Por supuesto. Cada libro es independiente. Puedes elegir títulos diferentes para cada hijo y cada uno vendrá con su propia Guía de Sentido adecuada a la edad.",
  },
  {
    q: "¿La Guía de Sentido se devuelve con el libro?",
    a: "No. La Guía de Sentido es tuya para siempre. Solo devuelves el libro físico al final del mes.",
  },
  {
    q: "¿Qué pasa si un libro se daña?",
    a: "El desgaste normal no tiene costo. Para daños significativos, se evalúa caso por caso con la familia. Siempre con diálogo y acuerdos claros.",
  },
  {
    q: "¿Puedo conservar un libro más de un mes?",
    a: "Sí. Si tu familia necesita más tiempo con un libro, simplemente continúas pagando la renta mensual de ese título.",
  },
  {
    q: "¿Esto sustituye la lectura que se hace en clase?",
    a: "No. La Biblioteca de Sentido es un complemento para el hogar que funciona de manera independiente, aunque enriquece enormemente lo que el niño vive en el aula.",
  },
  {
    q: "¿Y si mi hijo aún no sabe leer?",
    a: "¡Mejor aún! La Guía de Sentido está diseñada para lectura compartida. Un padre o hermano mayor lee en voz alta mientras toda la familia conversa.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-sage-light">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
            ¿Tienes dudas?
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-xl px-6 shadow-soft border-none"
            >
              <AccordionTrigger className="font-display font-semibold text-foreground text-left hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
