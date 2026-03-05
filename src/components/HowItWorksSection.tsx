import { ClipboardList, BookMarked, Send, Users, RefreshCw, CreditCard } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Inscripción", description: "La familia se registra en la escuela e indica cuántos libros desea rentar (de 1 a 10)." },
  { icon: BookMarked, title: "Elige tus libros", description: "Selecciona del catálogo con orientación de nuestro equipo según la edad e intereses." },
  { icon: Send, title: "Recibe libro + Guía", description: "Cada libro llega con su Guía de Sentido: preguntas, actividades y reflexiones para la familia." },
  { icon: Users, title: "Lean en familia", description: "Sin presión, sin tareas. Solo diálogo auténtico a su ritmo durante el mes." },
  { icon: RefreshCw, title: "Intercambio mensual", description: "Devuelve el libro en la escuela y elige uno nuevo. La Guía de Sentido es tuya para siempre." },
  { icon: CreditCard, title: "Pago flexible", description: "$100 MXN por libro al mes. Sin contratos. Cancela cuando quieras." },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Paso a paso</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-muted-foreground text-lg">
            Un proceso sencillo diseñado para que tu familia disfrute la lectura sin complicaciones.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent-foreground font-display font-bold text-sm">
                  {i + 1}
                </div>
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
