"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Cómo Funciona", href: "#como-funciona" },
  { label: "Colecciones", href: "#colecciones" },
  { label: "Precios", href: "#precios" },
  { label: "Escuelas", href: "#escuelas" },
  { label: "Familias", href: "#familias" },
  { label: "Preguntas", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        <a
          href="#inicio"
          className="font-display font-bold text-xl md:text-2xl text-primary"
        >
          <Image
            src="/lazox-biblioteca-logo.svg"
            alt="Logo"
            width={150}
            height={150}
          />
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Contáctanos
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-b border-border animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold text-center"
            >
              Contáctanos
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
