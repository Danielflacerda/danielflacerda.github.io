import React from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react'; // Usando Lucide para ícones

const ContactSection: React.FC = () => {
  const contactInfo = {
    email: "daniel.felacerda@hotmail.com",
    phone: "(71) 99666-3080",
    linkedin: "https://www.linkedin.com/in/daniel-ferreira-lacerda/", // Placeholder, substitua pelo link real
    github: "https://github.com/danielfelacerda" // Placeholder, substitua pelo link real
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-800 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-purple-teal-gradient">Entre em Contato</span>
        </h2>
        <div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg shadow-xl text-center">
          <p className="text-lg text-gray-300 mb-8">
            Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato!
          </p>
          <div className="space-y-6">
            <a href={`mailto:${contactInfo.email}`} className="flex items-center justify-center p-3 bg-gray-700 rounded-lg hover:bg-custom-teal hover:text-custom-purple-dark transition-all duration-200">
              <Mail className="w-6 h-6 mr-3" />
              <span>{contactInfo.email}</span>
            </a>
            <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`} className="flex items-center justify-center p-3 bg-gray-700 rounded-lg hover:bg-custom-teal hover:text-custom-purple-dark transition-all duration-200">
              <Phone className="w-6 h-6 mr-3" />
              <span>{contactInfo.phone}</span>
            </a>
            {/* Adicionar links para LinkedIn e GitHub quando disponíveis */}
            {/* Exemplo de como adicionar (descomente e substitua placeholders): 
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-3 bg-gray-700 rounded-lg hover:bg-custom-teal hover:text-custom-purple-dark transition-all duration-200">
              <Linkedin className="w-6 h-6 mr-3" />
              <span>LinkedIn</span>
            </a>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-3 bg-gray-700 rounded-lg hover:bg-custom-teal hover:text-custom-purple-dark transition-all duration-200">
              <Github className="w-6 h-6 mr-3" />
              <span>GitHub</span>
            </a>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

