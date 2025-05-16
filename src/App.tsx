import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ExperienceSection from './components/sections/ExperienceSection';
import SkillsSection from './components/sections/SkillsSection';
import EducationLanguageSection from './components/sections/EducationLanguageSection';
import ContactSection from './components/sections/ContactSection';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center bg-custom-purple-dark text-gray-400">
      <p>&copy; {new Date().getFullYear()} Daniel Ferreira Lacerda. Todos os direitos reservados.</p>
      <p>Desenvolvido com React, TailwindCSS e muito café!</p>
    </footer>
  );
};

function App() {
  return (
    <div className="App bg-gray-900">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationLanguageSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

