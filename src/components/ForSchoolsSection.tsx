import { CheckCircle, XCircle, Star } from "lucide-react";
import schoolImg from "@/assets/school.jpg";

const needs = [
  "Un espacio para la presentación inicial a padres",
  "Un punto de entrega y devolución (dirección o aula)",
  "Un docente enlace como puente de comunicación",
];

const noNeeds = [
  "Inversión económica — el costo lo cubren las familias",
  "Personal adicional — nosotros gestionamos todo",
  "Modificar el currículum — es un complemento para el hogar",
  "Responsabilidad sobre los libros — nosotros la asumimos",
];

const benefits = [
  "Fortalece el hábito lector sin costo para la escuela",
  "Involucra a las familias en el proceso educativo",
  "Se alinea con la Nueva Escuela Mexicana",
  "Posiciona a la escuela como espacio de innovación",
];

const ForSchoolsSection = () => {
  return (
    <section id="escuelas" className="section-padding bg-sage-light">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Para escuelas
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-8">
              Llevar la lectura a las familias es muy sencillo
            </h2>

            <div className="mb-8">
              <h3 className="font-display font-semibold text-foreground mb-3">
                Lo que la escuela necesita:
              </h3>
              <div className="space-y-2">
                {needs.map((n) => (
                  <div key={n} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{n}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-display font-semibold text-foreground mb-3">
                Lo que NO necesita:
              </h3>
              <div className="space-y-2">
                {noNeeds.map((n) => (
                  <div key={n} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{n}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display font-semibold text-foreground mb-3">
                Beneficios:
              </h3>
              <div className="space-y-2">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={schoolImg.src}
              alt="Escuela"
              className="rounded-2xl shadow-elevated w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForSchoolsSection;
