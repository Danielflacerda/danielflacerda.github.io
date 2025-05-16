import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let navbarClasses = "fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out p-4";
  if (scrolled) {
    navbarClasses += " bg-custom-purple-dark shadow-lg";
  } else {
    navbarClasses += " bg-transparent";
  }

  const navLinks = [
    { href: "#hero", label: "Início" },
    { href: "#about", label: "Sobre Mim" },
    { href: "#experience", label: "Experiência" },
    { href: "#skills", label: "Habilidades" },
    { href: "#education", label: "Formação" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-white hover:text-custom-teal-light transition-colors">
          Daniel Lacerda
        </a>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="text-white hover:text-custom-teal-light transition-colors duration-300 ease-in-out text-lg"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Botão de Menu Hamburguer para mobile será adicionado depois */}
      </div>
    </nav>
  );
};

export default Navbar;

