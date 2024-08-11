
const Header = () => {
  return (
    <header className="bg-slate-900">
      <nav
        className="flex max-w-7xl items-center justify-around p-6 xl:px-12"
        aria-label="Global"
      >
        <a
          href="#home"
          className="text-primary font-semibold leading-6 text-Blue-100"
        >
          HOME
        </a>
        <a
          href="#about"
          className="text-primary font-semibold leading-6 text-Blue-100"
        >
          ABOUT
        </a>
        <a
          href="#projects"
          className="text-primary font-semibold leading-6 text-Blue-100"
        >
          PROJECTS
        </a>
        <a
          href="#experience"
          className="text-primary font-semibold leading-6 text-Blue-100"
        >
          EXPERIENCE
        </a>
        <a
          href="#"
          className="text-primary font-semibold leading-6 text-Blue-100"
        >
          CONTACT
        </a>
      </nav>
    </header>
  );
};

export default Header;
