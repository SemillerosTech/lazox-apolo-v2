import herderImg from "@/assets/herder.png";
import colofonImg from "@/assets/colofon.png";
import barcoDeVaporImg from "@/assets/barco-de-vapor.png";
import trazaurusImg from "@/assets/trazaurus.png";

const collections = [
  {
    name: "El Barco de Vapor",
    publisher: "Editorial SM",
    ages: "6–12 años",
    description:
      "Serie clásica de literatura infantil con cuatro niveles que acompaña el crecimiento lector. Historias sobre emociones, familia, amistad y descubrimiento personal.",
    color: "bg-primary/10 text-primary",
    image: barcoDeVaporImg,
  },
  {
    name: "Colección Colofón",
    publisher: "Editorial Colofón",
    ages: "6–12 años",
    description:
      "Títulos con enfoque humanista y desarrollo personal. Editorial reconocida por su compromiso con la educación existencial en México.",
    color: "bg-accent/20 text-accent-foreground",
    image: colofonImg,
  },
  {
    name: "Colección Herder",
    publisher: "Editorial Herder",
    ages: "Padres y docentes",
    description:
      "Libros de logoterapia y desarrollo humano para adultos. Complemento para que padres profundicen en el enfoque educativo.",
    color: "bg-coral/10 text-coral",
    image: herderImg,
  },
  {
    name: "Trazaurus",
    publisher: "Editorial Educrea",
    ages: "4–7 años",
    description:
      "Serie propia que combina lectoescritura con desarrollo emocional y sentido de vida. Ideal para los más pequeños.",
    color: "bg-secondary text-secondary-foreground",
    image: trazaurusImg,
  },
];

const CollectionsSection = () => {
  return (
    <section id="colecciones" className="section-padding bg-sage-light">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Catálogo
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            Nuestras colecciones
          </h2>
          <p className="text-muted-foreground text-lg">
            Libros cuidadosamente seleccionados por calidad literaria y
            potencial de diálogo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {collections.map((col) => (
            <div key={col.name} className="bg-card rounded-2xl p-6 shadow-soft">
              <div className="flex items-center justify-between mb-4">
                <img
                  src={col.image.src}
                  alt={`${col.name} logo`}
                  className="h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${col.color}`}
                >
                  {col.ages}
                </span>
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-1">
                {col.name}
              </h3>
              <p className="text-xs text-muted-foreground mb-3">
                {col.publisher}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {col.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
