import React from 'react';

interface EducationEntryProps {
  institution: string;
  course: string;
  period: string;
}

const EducationEntry: React.FC<EducationEntryProps> = ({ institution, course, period }) => (
  <div className="mb-6 bg-gray-800 p-6 rounded-lg shadow-lg">
    <h4 className="text-xl font-semibold text-custom-teal-light mb-1">{institution}</h4>
    <p className="text-lg text-gray-300 mb-1">{course}</p>
    <p className="text-sm text-gray-500">{period}</p>
  </div>
);

interface LanguageEntryProps {
  language: string;
  level: string;
  details?: string;
}

const LanguageEntry: React.FC<LanguageEntryProps> = ({ language, level, details }) => (
  <div className="mb-4 bg-gray-800 p-4 rounded-lg shadow-md">
    <h5 className="text-lg font-medium text-custom-teal-light">{language}: <span className="text-gray-300 font-normal">{level}</span></h5>
    {details && <p className="text-sm text-gray-400 mt-1">{details}</p>}
  </div>
);

const EducationLanguageSection: React.FC = () => {
  const education = [
    {
      institution: "UFBA - Universidade Federal da Bahia",
      course: "Graduação em Sistemas de Informação",
      period: "2017.1 - 2025.1"
    }
  ];

  const languages = [
    {
      language: "Português",
      level: "Fluente-Nativo"
    },
    {
      language: "Inglês",
      level: "Avançado (Entendimento, fala e escrita)",
      details: "EF SET English Certificate 77/100 (C2 Proficient); Cultura Inglesa (Advanced); CapGemini English Course (Nível 13/16)"
    },
    {
      language: "Espanhol",
      level: "Básico (Entendimento)",
      details: "Entendimento e fala básicos, capaz de me comunicar e sobreviver."
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-purple-teal-gradient">Formação e Idiomas</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-center md:text-left mb-8 text-white">Formação Acadêmica</h3>
            {education.map((edu, index) => (
              <EducationEntry key={index} {...edu} />
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-center md:text-left mb-8 text-white">Idiomas</h3>
            {languages.map((lang, index) => (
              <LanguageEntry key={index} {...lang} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationLanguageSection;

