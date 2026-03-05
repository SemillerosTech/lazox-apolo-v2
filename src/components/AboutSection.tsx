const AboutSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-3xl text-center">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Quiénes somos</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-6">
          Semilleros de Sentido A.C.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Somos una asociación civil dedicada a la educación existencial de niños, adolescentes y familias a través de la literatura y la logoterapia. Actualmente nuestro programa llega a más de 1,300 niños en escuelas públicas de la Ciudad de México.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Nuestro equipo está liderado por la <strong className="text-foreground">Dra. Rosa Adelaida Del Valle Puente</strong>, psicóloga clínica y logoterapeuta con casi tres décadas de experiencia, reconocida como Psicóloga Mexicana Destacada por el Consejo Mexicano de Psicología.
        </p>
        <div className="bg-warm-yellow-light rounded-2xl p-8 italic text-foreground/80 text-lg font-display">
          "La conciencia precede a la economía. La transformación de la persona es anterior y superior a cualquier transacción económica."
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
