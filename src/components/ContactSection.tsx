import { Mail, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding bg-primary">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
          Lleva la Biblioteca de Sentido a tu escuela
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8">
          Si eres directivo, docente o padre de familia y quieres que este servicio llegue a tu comunidad escolar, contáctanos.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <a
            href="mailto:rossy@semillerosdesentido.org"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            <Mail className="w-5 h-5" />
            rossy@semillerosdesentido.org
          </a>
          <a
            href="https://www.semillerosdesentido.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <Globe className="w-5 h-5" />
            semillerosdesentido.org
          </a>
        </div>

        <p className="text-primary-foreground/60 text-sm">
          Semilleros de Sentido A.C. · Ciudad de México · Ciclo Escolar 2025–2026
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
