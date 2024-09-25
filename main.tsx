import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./src/components/header";
import About from "./src/components/about";
import Banner from "./src/components/banner";
import Projects from "./src/components/projects";
import Experience from "./src/components/experience";
import Contato from "./src/components/contact";
import Footer from "./src/components/footer";
import "./src/index.css";

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <About />
      <Projects />
      <Experience />
      <Contato />
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById("root") as HTMLElement;

createRoot(rootElement).render(
  <Router>
    <App />
  </Router>
);
