import heroImg from "@/assets/hero-reading.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg.src}
          alt="Madre leyendo con su hijo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-foreground/20" />
      </div>

      <div className="container mx-auto relative z-10 pt-20">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/90 text-accent-foreground text-sm font-semibold mb-6 animate-fade-in-up">
            Renta de libros infantiles
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-card leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Cada libro es una semilla de{" "}
            <span className="text-accent">sentido</span>
          </h1>
          <p
            className="text-lg md:text-xl text-card/90 mb-8 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Lleva literatura de calidad a tu hogar por solo $100 al mes. Cada
            libro incluye una Guía de Sentido que transforma la lectura en un
            diálogo familiar único.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#como-funciona"
              className="px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-bold text-base hover:opacity-90 transition-opacity text-center"
            >
              Conoce el servicio
            </a>
            <a
              href="#contacto"
              className="px-8 py-3.5 rounded-full border-2 border-card/40 text-card font-semibold text-base hover:bg-card/10 transition-colors text-center"
            >
              Inscribe tu escuela
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
