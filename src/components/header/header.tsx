import { useState } from "react";
import brazilFlag from "../../assets/bandeira-brasil.png";
import usaFlag from "../../assets/benadeira-eua.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("pt"); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang); 
  };

  const text = {
    home: language === "en" ? "HOME" : "PÁGINA INICIAL",
    about: language === "en" ? "ABOUT" : "SOBRE",
    projects: language === "en" ? "PROJECTS" : "PROJETOS",
    experience: language === "en" ? "EXPERIENCE" : "EXPERIÊNCIA",
    contact: language === "en" ? "CONTACT" : "CONTATO",
  };

  return (
    <header className="bg-slate-900">
      <nav
        className="flex items-center justify-between p-6 max-w-7xl mx-auto xl:px-12"
        aria-label="Global"
      >
        <div className="flex items-center space-x-4">
          <a
            href="#home"
            className="text-primary font-semibold leading-6 text-Blue-100 uppercase"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#home");
            }}
          >
            {text.home}
          </a>
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => changeLanguage("pt")}
              className="text-primary focus:outline-none"
            >
              <img src={brazilFlag} alt="Português - BR" className="w-6 h-6" />
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className="text-primary focus:outline-none"
            >
              <img src={usaFlag} alt="Inglês - EUA" className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="hidden md:flex space-x-8">
          <a
            href="#about"
            className="text-primary font-semibold leading-6 text-Blue-100 uppercase"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#about");
            }}
          >
            {text.about}
          </a>
          <a
            href="#projects"
            className="text-primary font-semibold leading-6 text-Blue-100 uppercase"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#projects");
            }}
          >
            {text.projects}
          </a>
          <a
            href="#experience"
            className="text-primary font-semibold leading-6 text-Blue-100 uppercase"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#experience");
            }}
          >
            {text.experience}
          </a>
          <a
            href="#contact"
            className="text-primary font-semibold leading-6 text-Blue-100 uppercase"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#contact");
            }}
          >
            {text.contact}
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-primary focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-slate-900 text-center">
          <a
            href="#about"
            className="block py-2 text-primary font-semibold leading-6 text-Blue-100 uppercase"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#about");
            }}
          >
            {text.about}
          </a>
          <a
            href="#projects"
            className="block py-2 text-primary font-semibold leading-6 text-Blue-100 uppercase"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#projects");
            }}
          >
            {text.projects}
          </a>
          <a
            href="#experience"
            className="block py-2 text-primary font-semibold leading-6 text-Blue-100 uppercase"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#experience");
            }}
          >
            {text.experience}
          </a>
          <a
            href="#contact"
            className="block py-2 text-primary font-semibold leading-6 text-Blue-100 uppercase"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#contact");
            }}
          >
            {text.contact}
          </a>
          <div className="flex justify-center space-x-2 mt-4">
            <button
              onClick={() => changeLanguage("pt")}
              className="text-primary focus:outline-none"
            >
              <img src={brazilFlag} alt="Brazilian Flag" className="w-6 h-6" />
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className="text-primary focus:outline-none"
            >
              <img src={usaFlag} alt="US Flag" className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;