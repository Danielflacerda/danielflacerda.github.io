import React from 'react';

interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  description: string[];
  isCurrent?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ company, role, period, description, isCurrent }) => {
  return (
    <div className="mb-8 p-6 bg-gray-800 rounded-lg shadow-xl relative">
      {isCurrent && (
        <span className="absolute top-0 right-0 mt-2 mr-2 bg-custom-teal text-custom-purple-dark text-xs font-bold px-2 py-1 rounded">
          Atual
        </span>
      )}
      <h3 className="text-2xl font-semibold text-custom-teal-light mb-1">{company}</h3>
      <p className="text-lg text-gray-400 mb-1">{role}</p>
      <p className="text-sm text-gray-500 mb-3">{period}</p>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      company: "Ciberian IT",
      role: "Analista de Desenvolvimento de Sistemas .NET Full Stack Sr.",
      period: "09/2024 - Atualmente",
      isCurrent: true,
      description: [
        "Desenvolvimento com C#, Front(HTML, CSS, JS[Bootstrap, Jquery]), ASP, PHP, SQL Server, MySQL e .NET Framework/Core.",
        "Criação de novas features/bug fixes, APIs e Windows Services.",
        "Definição de arquitetura e design de novos projetos.",
        "Versionamento com Git, MVC, MVVM, Publicação de aplicações.",
        "Contato com Cliente, Análise de tecnologias, Modernização de Legado.",
        "Assistência a Desenvolvedores Juniores e Plenos, Testes unitários e e2e.",
        "Deploy automatizado com Jenkins, DDD, BDD, Redis."
      ]
    },
    {
      company: "ACP Group",
      role: "Analista de Desenvolvimento de Sistemas .NET Full Stack Sr.",
      period: "09/2021 - 09/2024",
      description: [
        "Desenvolvimento com C#, Front(HTML, CSS, JS[Bootstrap, Jquery]), ASP, PHP, SQL Server, MySQL e .NET Framework/Core.",
        "Desenvolvimento de novas features/bug fixes para o software, criação de APIs e Windows Services.",
        "Definir arquitetura e design de novos projetos focando em escalabilidade, usabilidade e intuitividade.",
        "Microsoft SQL Server Management Studio, Versionamento e divisão de branchs pelo Git, MVC, MVVM.",
        "Publicação de aplicações, Reuniões de Q.A com equipe de requisitos, Contato constante com o Cliente.",
        "Análise e levantamento de novas tecnologias para melhorias internas e novos projetos.",
        "Ponte com núcleo de segurança da Informação para identificação de falhas de S.I. e aplicação de soluções.",
        "Modernização de Sistemas Legado, FTP com Filezilla, Dar assistência a Desenvolvedores Juniores e Plenos.",
        "Testes unitários e de ponta a ponta, Deploy automatizado com uso de Jenkins, DDD e BDD, Redis."
      ]
    },
    {
      company: "CapGemini",
      role: "Analista de Soluções Customizadas I (Analista de Desenvolvimento de Sistemas Jr. FullStack)",
      period: "10/2020 - 09/2021",
      description: [
        "Desenvolvimento com C#, Web(HTML, CSS, JS), ASP, SQL e .NET Framework/Core.",
        "Desenvolvimento de novas features/bug fixes, criação de APIs e Windows Services.",
        "Microsoft SQL Server Management Studio, Quadro Kanban, Versionamento e divisão de branchs pelo Git.",
        "Divisão multi camadas MVC, Documentação pré-desenvolvimento e pós-desenvolvimento.",
        "Criação de pacotes para implantação em ambientes, Reuniões de Quality Assurance.",
        "Contato constante com o Cliente, Modernização de Sistemas Legado, DDD e BDD."
      ]
    },
    {
      company: "TecnoTRENDS",
      role: "Estagiário no setor de Desenvolvimento",
      period: "06/2019 - 10/2020",
      description: [
        "Desenvolvimento de soluções e customizações para aplicações ASP.NET FrameWork/Core.",
        "PowerBuilder, Migração de interfaces em sistema legado Desktop para sistema Web.",
        "Análise de inconsistências de banco, Melhoria de performance de rotinas de banco.",
        "Scrum/Quadro Kanban e administração de branchs com Azure, TDD, BDD e DDD."
      ]
    },
    {
      company: "TecnoTRENDS",
      role: "Estagiário no setor de Atendimento e Suporte a Desenvolvimento",
      period: "01/2018 - 06/2019",
      description: [
        "Suporte aos Desenvolvedores, Apoio ao cliente.",
        "Análise de inconsistências e manutenção de banco de dados.",
        "Aplicação de treinamento e apresentação de novas funcionalidades."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-purple-teal-gradient">Experiência Profissional</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

