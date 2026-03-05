const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-foreground">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display font-bold text-background text-sm">
          Biblioteca de Sentido
        </p>
        <p className="text-background/50 text-xs">
          © {new Date().getFullYear()} Semilleros de Sentido A.C. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
