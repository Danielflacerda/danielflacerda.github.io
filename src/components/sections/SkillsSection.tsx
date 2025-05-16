import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <div className="mb-6">
    <h4 className="text-xl font-semibold text-custom-teal-light mb-2">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm shadow-md hover:bg-custom-teal hover:text-custom-purple-dark transition-all duration-200 cursor-default">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const SkillsSection: React.FC = () => {
  const techSkills = {
    languages: ["C#", "HTML5", "CSS3", "JavaScript", "SQL", "Python", "PHP", "C", "C++", "Java", "Prolog", "Racket"],
    frameworks: [".NET Core", ".NET Framework", "ASP Clássico", "React", "Node.js", "jQuery", "Bootstrap"],
    databases: ["Microsoft SQL Server", "MySQL", "MongoDB", "Bancos Relacionais"],
    tools: ["Azure", "Android Studio", "Microsoft Visual Studio", "PowerBuilder", "StarUML", "GitHub", "SQL Server Profiler", "IIS", "Postman", "SoapUI", "Jenkins"],
    concepts: ["Desenvolvimento Ágil (Scrum, Kanban)", "MVC", "MVVM", "POO", "SOLID", "Clean Code", "DDD", "BDD", "TDD", "APIs REST/SOAP", "Web Services", "Microservices", "Testes Automatizados (Java/Selenium)", "Testes Unitários", "Testes de Ponta a Ponta"],
    others: ["Bots do Telegram com .NET", "Pacote Office", "Formatação de Equipamentos", "Manutenção de Equipamentos", "Photoshop", "Edição de vídeo"]
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-800 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-purple-teal-gradient">Conhecimentos em T.I.</span>
        </h2>
        <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-xl">
          <SkillCategory title="Linguagens" skills={techSkills.languages} />
          <SkillCategory title="Frameworks & Bibliotecas" skills={techSkills.frameworks} />
          <SkillCategory title="Bancos de Dados" skills={techSkills.databases} />
          <SkillCategory title="Ferramentas" skills={techSkills.tools} />
          <SkillCategory title="Conceitos e Metodologias" skills={techSkills.concepts} />
          <SkillCategory title="Outros" skills={techSkills.others} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

