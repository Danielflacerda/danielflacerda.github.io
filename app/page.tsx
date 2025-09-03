"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Moon, Sun, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Calendar, Building } from "lucide-react"
import { useTheme } from "next-themes"

interface Language {
  code: "pt" | "en"
  name: string
}

const languages: Language[] = [
  { code: "pt", name: "PT" },
  { code: "en", name: "EN" },
]

const translations = {
  pt: {
    about: "Sobre Mim",
    experience: "Experiências",
    skills: "Habilidades",
    projects: "Projetos",
    contact: "Contato",
    aboutDescription:
      "Desenvolvedor Fullstack .NET Sênior com mais de 6 anos de experiência entregando soluções de software escaláveis, robustas e de alta qualidade. Especializado em todo o ciclo de desenvolvimento (Front-end, Back-end e Bancos de Dados), com forte expertise em arquitetura, modernização de sistemas legados e liderança técnica. Reconhecido por alinhar expertise técnica com soft skills, entregando produtos centrados no usuário, impulsionando eficiência técnica e contribuindo para o crescimento da equipe.",
    experienceTitle: "Experiência Profissional",
    skillsTitle: "Habilidades Técnicas",
    projectsTitle: "Projetos em Destaque",
    contactTitle: "Entre em Contato",
    contactForm: {
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      send: "Enviar Mensagem",
    },
    location: "Salvador - BA, Brasil",
    currentPosition: "Analista de Sistemas .NET Full Stack Sênior",
    currentCompany: "Ciberian IT",
    period: "Período",
    present: "Atual",
    backendSkills: "Back-end",
    frontendSkills: "Front-end",
    databaseSkills: "Bancos de Dados",
    devopsSkills: "DevOps & CI/CD",
    methodologiesSkills: "Metodologias Ágeis",
  },
  en: {
    about: "About Me",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    aboutDescription:
      "Senior Fullstack .NET Developer with over 6 years of experience delivering scalable, robust, and high-quality software solutions. Skilled across the entire development lifecycle (Front-end, Back-end, and Databases), with strong expertise in architecture, legacy system modernization, and technical leadership. Recognized for aligning technical expertise with soft skills, delivering user-centric products, driving technical efficiency, and contributing to team growth.",
    experienceTitle: "Professional Experience",
    skillsTitle: "Technical Skills",
    projectsTitle: "Featured Projects",
    contactTitle: "Get in Touch",
    contactForm: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
    },
    location: "Salvador - BA, Brazil",
    currentPosition: "Senior .NET Full Stack Systems Analyst",
    currentCompany: "Ciberian IT",
    period: "Period",
    present: "Present",
    backendSkills: "Back-end",
    frontendSkills: "Front-end",
    databaseSkills: "Databases",
    devopsSkills: "DevOps & CI/CD",
    methodologiesSkills: "Agile Methodologies",
  },
}

const experiences = {
  pt: [
    {
      title: "Analista de Sistemas .NET Full Stack Sênior",
      company: "Ciberian IT",
      period: "09/2021 - Atual",
      description:
        "Desenvolvimento full-stack em C#, .NET Framework/Core, ASP.NET, PHP, SQL Server, MySQL, HTML, CSS, JavaScript. Design e desenvolvimento de APIs RESTful, Windows Services, definição de arquitetura de software e modernização de sistemas legados. Implementação de pipelines CI/CD e mentoria de desenvolvedores.",
    },
    {
      title: "Analista de Sistemas Fullstack Júnior",
      company: "CapGemini",
      period: "10/2020 - 09/2021",
      description:
        "Desenvolvimento em C#, .NET Framework/Core, ASP.NET, SQL, HTML, CSS, JavaScript. Criação de APIs e Windows Services, controle de versão com Git e adoção do padrão MVC. Documentação de requisitos, testes e deploy de sistemas.",
    },
    {
      title: "Desenvolvedor",
      company: "TecnoTRENDS",
      period: "06/2019 - 10/2020",
      description:
        "Desenvolvimento e customizações em ASP.NET Framework/Core e PowerBuilder. Migração de sistemas desktop para web e otimização de performance de banco de dados. Uso de Scrum, Kanban e gerenciamento de branches no Azure.",
    },
  ],
  en: [
    {
      title: "Senior .NET Full Stack Systems Analyst",
      company: "Ciberian IT",
      period: "09/2021 - Present",
      description:
        "Full-stack development in C#, .NET Framework/Core, ASP.NET, PHP, SQL Server, MySQL, HTML, CSS, JavaScript. Design and development of RESTful APIs, Windows Services, software architecture definition, and modernization of legacy systems. Implementation of CI/CD pipelines and mentorship of developers.",
    },
    {
      title: "Junior Fullstack Systems Analyst",
      company: "CapGemini",
      period: "10/2020 - 09/2021",
      description:
        "Development in C#, .NET Framework/Core, ASP.NET, SQL, HTML, CSS, JavaScript. Creation of APIs and Windows Services, version control with Git, and adoption of MVC pattern. Requirements documentation, testing, and system deployment.",
    },
    {
      title: "Developer",
      company: "TecnoTRENDS",
      period: "06/2019 - 10/2020",
      description:
        "Development and customizations in ASP.NET Framework/Core and PowerBuilder. Migration of desktop systems to web and database performance optimization. Use of Scrum, Kanban, and branch management in Azure.",
    },
  ],
}

const skills = {
  pt: {
    backend: ["C#", ".NET Framework/Core", "ASP.NET", "PHP", "Java", "Python"],
    frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "React", "Vue", "Angular"],
    database: ["SQL Server", "MySQL", "MongoDB", "Redis"],
    devops: ["Git", "Jenkins", "RedHat OpenShift", "Azure", "Docker"],
    methodologies: ["Scrum", "Kanban", "XP", "SOLID", "Clean Code"],
  },
  en: {
    backend: ["C#", ".NET Framework/Core", "ASP.NET", "PHP", "Java", "Python"],
    frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "React", "Vue", "Angular"],
    database: ["SQL Server", "MySQL", "MongoDB", "Redis"],
    devops: ["Git", "Jenkins", "RedHat OpenShift", "Azure", "Docker"],
    methodologies: ["Scrum", "Kanban", "XP", "SOLID", "Clean Code"],
  },
}

const projects = {
  pt: [
    {
      title: "Sistema de Gestão Empresarial",
      description:
        "Sistema completo de gestão empresarial desenvolvido em .NET Core com arquitetura de microserviços, incluindo módulos de vendas, estoque e financeiro.",
      technologies: ["C#", ".NET Core", "SQL Server", "React", "Docker"],
      link: "#",
    },
    {
      title: "API de Integração Bancária",
      description:
        "API RESTful para integração com sistemas bancários, processando transações financeiras com alta disponibilidade e segurança.",
      technologies: ["ASP.NET Core", "Redis", "JWT", "OpenAPI"],
      link: "#",
    },
    {
      title: "Portal de Modernização Legacy",
      description:
        "Migração de sistema desktop PowerBuilder para aplicação web moderna, mantendo funcionalidades críticas e melhorando UX.",
      technologies: ["ASP.NET MVC", "jQuery", "Bootstrap", "SQL Server"],
      link: "#",
    },
  ],
  en: [
    {
      title: "Enterprise Management System",
      description:
        "Complete enterprise management system developed in .NET Core with microservices architecture, including sales, inventory, and financial modules.",
      technologies: ["C#", ".NET Core", "SQL Server", "React", "Docker"],
      link: "#",
    },
    {
      title: "Banking Integration API",
      description:
        "RESTful API for banking system integration, processing financial transactions with high availability and security.",
      technologies: ["ASP.NET Core", "Redis", "JWT", "OpenAPI"],
      link: "#",
    },
    {
      title: "Legacy Modernization Portal",
      description:
        "Migration of PowerBuilder desktop system to modern web application, maintaining critical functionalities and improving UX.",
      technologies: ["ASP.NET MVC", "jQuery", "Bootstrap", "SQL Server"],
      link: "#",
    },
  ],
}

export default function Portfolio() {
  const [currentLang, setCurrentLang] = useState<"pt" | "en">("pt")
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const t = translations[currentLang]
  const exp = experiences[currentLang]
  const skillsData = skills[currentLang]
  const projectsData = projects[currentLang]

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header with gradient background */}
      <header className="bg-gradient-vs dark:bg-gradient-vs-dark text-white py-8 px-4 transition-all duration-300">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Daniel Ferreira Lacerda</h1>
            <p className="text-base sm:text-lg opacity-90">{t.currentPosition}</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-sm opacity-80">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {t.location}
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                (71) 99666-3080
              </div>
              <div className="flex items-center gap-1 break-all">
                <Mail className="w-4 h-4" />
                daniel.felacerda@hotmail.com
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            {/* Language Toggle */}
            <div className="flex bg-white/20 rounded-lg p-1">
              {languages.map((lang) => (
                <Button
                  key={lang.code}
                  variant={currentLang === lang.code ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setCurrentLang(lang.code)}
                  className={currentLang === lang.code ? "bg-white text-primary" : "text-white hover:bg-white/20"}
                >
                  {lang.name}
                </Button>
              ))}
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-white hover:bg-white/20 transition-colors"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 sm:grid sm:grid-cols-5 mb-8">
            <TabsTrigger value="about" className="text-sm">
              {t.about}
            </TabsTrigger>
            <TabsTrigger value="experience" className="text-sm">
              {t.experience}
            </TabsTrigger>
            <TabsTrigger value="skills" className="text-sm">
              {t.skills}
            </TabsTrigger>
            <TabsTrigger value="projects" className="text-sm">
              {t.projects}
            </TabsTrigger>
            <TabsTrigger value="contact" className="text-sm">
              {t.contact}
            </TabsTrigger>
          </TabsList>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-6">
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <Avatar className="w-32 h-32">
                      <AvatarImage src="/professional-developer-portrait.png" alt="Daniel Ferreira Lacerda" />
                      <AvatarFallback className="text-2xl bg-gradient-vs text-white">DL</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4 text-gradient-vs">{t.about}</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">{t.aboutDescription}</p>
                    <div className="flex gap-4 mt-6">
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://www.linkedin.com/in/071daniellacerda/" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://github.com/Danielflacerda" target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience" className="space-y-6">
            <h2 className="text-2xl font-bold text-gradient-vs">{t.experienceTitle}</h2>
            <div className="space-y-6">
              {exp.map((experience, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{experience.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <Building className="w-4 h-4" />
                          {experience.company}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {experience.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            <h2 className="text-2xl font-bold text-gradient-vs">{t.skillsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t.backendSkills}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.backend.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t.frontendSkills}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t.databaseSkills}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.database.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t.devopsSkills}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.devops.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t.methodologiesSkills}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.methodologies.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <h2 className="text-2xl font-bold text-gradient-vs">{t.projectsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsData.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                      <a href={project.link}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Projeto
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-6">
            <h2 className="text-2xl font-bold text-gradient-vs">{t.contactTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>daniel.felacerda@hotmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>(71) 99666-3080</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>{t.location}</span>
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://linkedin.com/in/daniel-lacerda" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/daniel-lacerda" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t.contactForm.send}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder={t.contactForm.name} />
                    </div>
                    <div>
                      <Input type="email" placeholder={t.contactForm.email} />
                    </div>
                    <div>
                      <Textarea placeholder={t.contactForm.message} rows={4} />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-vs hover:opacity-90">
                      {t.contactForm.send}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
