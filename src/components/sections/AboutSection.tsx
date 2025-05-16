import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-purple-teal-gradient">Sobre Mim</span>
        </h2>
        <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl">
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            Desenvolvedor Sênior Fullstack .NET com mais de 5 anos de experiência na criação de soluções de software de alta qualidade. 
            Habilidoso em todo o ciclo de desenvolvimento (Front/Back/DataBase), capaz de orientar equipes, promover a colaboração e entregar produtos centrados nas necessidades do usuário. 
            Buscando sempre utilizar meu KnowHow em .NET e SoftSkills para liderar projetos contribuindo tanto para a excelência, como para a eficiência técnica e para o crescimento da equipe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

