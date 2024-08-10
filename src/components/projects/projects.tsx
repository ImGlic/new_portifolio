import React from "react";
import Card from "../card/index.tsx";
import ImageTutor from "../../assets/logo-tutor.png";
import ImageNibby from "../../assets/logo-nibby.png";
import ImageFuzzy from "../../assets/logo-fuzzy.png";

const Services = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex justify-center items-center mt-4"
      id="projects"
    >
      <div className="container mx-auto mb-10 ">        
        <div className=" flex flex-wrap justify-evenly items-center gap-2 mt-10">
          <Card
            title="Tutor Inteligente"
            image={ImageTutor}
            objetivo="No Tutor, temos como foco a utilização de ferramentas como Jogos para tornar o 
              ensino mais atrativo para crianças, de maneira a ser algo mais orgânico e fácil de ser 
              inserido na vida da mesma."
            // funcao="Atuei como desevolvedor Front End e ajudandos os demais devs com alguns problemas e duvidas, já que
            //   eu tinha mais expeiência que os demais participantes que atuavam no Front End."
            // tecnologias="Python, Django, Html, Css, BootStrap"
            link="https://tutor.fuzzylab.tech"
          />

          <Card
            title="Nibby"
            image={ImageNibby}
            objetivo="Nossa plataforma foi projetada com a simplicidade em mente, permitindo que você 
              acompanhe seus gastos de forma fácil e rápida, incluindo gráficos e  detalhes."
            // funcao="Atuei como consultor, prestando suporte e ajudando os integrantes da equipe que estavam
            //   desenvolvendo a aplicação. Auxiliando no backlog de tarefas implementações."
            // tecnologias="Python, Django, Html, Css, BootStrap"
            link="https://nibby.fuzzylab.tech"
          />

          <Card
            title="FuzzySite"
            image={ImageFuzzy}
            objetivo="Nossa plataforma foi projetada com a simplicidade em mente, permitindo que você 
              acompanhe seus gastos de forma fácil e rápida, incluindo gráficos e  detalhes."
            // funcao="Atuei como consultor, prestando suporte e ajudando os integrantes da equipe que estavam
            //   desenvolvendo a aplicação. Auxiliando no backlog de tarefas implementações."
            // tecnologias="Python, Django, Html, Css, BootStrap"
            link="https://fuzzylab.tech"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
