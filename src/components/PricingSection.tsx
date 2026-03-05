import { Check } from "lucide-react";

const plans = [
  { name: "Una Semilla", books: "1 libro", price: "$100", description: "Ideal para comenzar", highlight: false },
  { name: "Dos Semillas", books: "2 libros", price: "$200", description: "Para familias con 2 hijos", highlight: false },
  { name: "Familia Lectora", books: "3–4 libros", price: "$300–$400", description: "Padres e hijos leen", highlight: true },
  { name: "Lector Voraz", books: "Hasta 10 libros", price: "$1,000", description: "Máximo aprovechamiento", highlight: false },
];

const included = [
  "Libro físico de calidad editorial",
  "Guía de Sentido exclusiva (tuya para siempre)",
  "Orientación personalizada por edad",
  "Intercambio mensual sin costo extra",
  "Sin contratos ni permanencia mínima",
];

const PricingSection = () => {
  return (
    <section id="precios" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Inversión</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            $100 MXN por libro al mes
          </h2>
          <p className="text-muted-foreground text-lg">
            Un libro nuevo cuesta entre $450 y $800. Con nosotros, por menos de la mitad del precio recibes el libro más la Guía de Sentido.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 text-center transition-shadow ${
                plan.highlight
                  ? "bg-primary text-primary-foreground shadow-elevated ring-2 ring-accent"
                  : "bg-card shadow-soft"
              }`}
            >
              <p className={`text-sm font-semibold mb-2 ${plan.highlight ? "text-accent" : "text-primary"}`}>
                {plan.name}
              </p>
              <p className={`text-3xl font-display font-bold mb-1 ${plan.highlight ? "" : "text-foreground"}`}>
                {plan.price}
              </p>
              <p className={`text-sm mb-3 ${plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.books} / mes
              </p>
              <p className={`text-xs ${plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-warm-yellow-light rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="font-display font-bold text-foreground text-lg mb-4 text-center">
            Cada renta incluye:
          </h3>
          <div className="space-y-3">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
