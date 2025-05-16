import React from 'react';
import developerPhoto from '@/assets/developer-photo.jpg'; // Ajuste o caminho se necessário

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-gradient-to-br from-custom-purple via-custom-purple-dark to-custom-teal text-white">
      <img 
        src={developerPhoto}
        alt="Daniel Ferreira Lacerda" 
        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover mx-auto mb-8 border-4 border-custom-teal-light shadow-lg"
      />
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Daniel Ferreira Lacerda
      </h1>
      <p className="text-xl md:text-2xl mb-2 text-custom-teal-light">
        Desenvolvedor Sênior Fullstack .NET
      </p>
      <p className="text-lg md:text-xl max-w-2xl mx-auto">
        Mais de 5 anos de experiência transformando ideias em soluções de software de alta qualidade, com foco em .NET, e paixão por criar produtos centrados no usuário.
      </p>
      {/* Adicionar botões de CTA ou links para seções depois */}
    </section>
  );
};

export default HeroSection;

