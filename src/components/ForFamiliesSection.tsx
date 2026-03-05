import { Repeat, BookHeart, CalendarDays, Users } from "lucide-react";
import familyImg from "@/assets/family-reading.jpg";

const benefits = [
  {
    icon: Repeat,
    title: "Variedad constante",
    description:
      "Un libro diferente cada mes. En un año, hasta 10 títulos distintos por lo que pagarías uno solo en librería.",
  },
  {
    icon: BookHeart,
    title: "Guía exclusiva",
    description:
      "La Guía de Sentido no se compra en ninguna librería. Es tuya para siempre y transforma la lectura en diálogo.",
  },
  {
    icon: CalendarDays,
    title: "Sin compromiso",
    description:
      "Es mes a mes. Si un mes no puedes continuar, devuelves el libro y listo. Sin penalizaciones.",
  },
  {
    icon: Users,
    title: "Experiencia familiar",
    description:
      "No importa si tu hijo aún no lee solo. La lectura compartida en voz alta fortalece los lazos familiares.",
  },
];

const ForFamiliesSection = () => {
  return (
    <section id="familias" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={familyImg.src}
              alt="Familia leyendo junta"
              className="rounded-2xl shadow-elevated w-full object-cover aspect-square"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Para familias
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
              ¿Por qué rentar y no comprar?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Por $100 pesos al mes accedes al mismo libro que cuesta entre $450
              y $800 en librería, y además recibes la guía pedagógica que no
              existe en ningún otro lugar.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="bg-card rounded-xl p-5 shadow-soft"
                >
                  <b.icon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-display font-semibold text-foreground text-sm mb-1">
                    {b.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForFamiliesSection;
