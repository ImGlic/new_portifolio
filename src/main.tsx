import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header/index.tsx";
import About from "./components/about/index.tsx";
import Banner from "./components/banner/index.tsx";
import Projects from "./components/projects/index.tsx";
import Experience from "./components/experience/index.tsx";
import Contato from "./components/contact/index.tsx";
import Footer from "./components/footer/index.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-slate-900 bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <About />
      <Projects />
      <Experience />     
      <Contato />
      <Footer />
    </div>
  </StrictMode>
);
