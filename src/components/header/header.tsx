import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <header className="bg-slate-900">
      <nav
        className="flex max-w-7xl items-center justify-between p-6 xl:px-12"
        aria-label="Global"
      >
        <a
          href="#home"
          className="text-primary font-semibold leading-6 text-Blue-100"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("#home");
          }}
        >
          HOME
        </a>
        <div className="hidden md:flex space-x-8">
          <a
            href="#about"
            className="text-primary font-semibold leading-6 text-Blue-100"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#about");
            }}
          >
            ABOUT
          </a>
          <a
            href="#projects"
            className="text-primary font-semibold leading-6 text-Blue-100"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#projects");
            }}
          >
            PROJECTS
          </a>
          <a
            href="#experience"
            className="text-primary font-semibold leading-6 text-Blue-100"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#experience");
            }}
          >
            EXPERIENCE
          </a>
          <a
            href="#contact"
            className="text-primary font-semibold leading-6 text-Blue-100"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#contact");
            }}
          >
            CONTACT
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
            className="block py-2 text-primary font-semibold leading-6 text-Blue-100"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#about");
            }}
          >
            ABOUT
          </a>
          <a
            href="#projects"
            className="block py-2 text-primary font-semibold leading-6 text-Blue-100"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#projects");
            }}
          >
            PROJECTS
          </a>
          <a
            href="#experience"
            className="block py-2 text-primary font-semibold leading-6 text-Blue-100"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#experience");
            }}
          >
            EXPERIENCE
          </a>
          <a
            href="#contact"
            className="block py-2 text-primary font-semibold leading-6 text-Blue-100"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#contact");
            }}
          >
            CONTACT
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
