const Header = () => {
  return (
    <header className="bg-slate-900">
      <nav
        className="flex max-w-7xl items-center justify-around p-6 xl:px-12"
        aria-label="Global"
      >
          <a href="#" className="text-primary font-semibold leading-6 text-Blue-100">
            HOME
          </a>
          <a href="#" className="text-primary font-semibold leading-6 text-Blue-100">
            ABOUT
          </a>
          <a href="#" className="text-primary font-semibold leading-6 text-Blue-100">
            SERVICES
          </a>
          <a href="#" className="text-primary font-semibold leading-6 text-Blue-100">
            CONTACT
          </a>
      </nav>
    </header>
  );
};

export default Header;
