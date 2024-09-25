import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./components/header";
import About from "./components/about";
import Banner from "./components/banner";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Contato from "./components/contact";
import Footer from "./components/footer";
import "./index.css";

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
