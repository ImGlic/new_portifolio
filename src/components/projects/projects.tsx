import Slider from "react-slick";
import Card from "../card/index.tsx";
import ImageTutor from "../../assets/logo-tutor.png";
import ImageNibby from "../../assets/logo-nibby.png";
import ImageFuzzy from "../../assets/logo-fuzzy.png";
import ImageEnergy from "../../assets/myenergy-consult.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "15px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex flex-col justify-center items-center mt-4"
      id="projects"
    >
      <div><h1 className="h1 text-primary text-3xl font-bold">Projetos</h1></div>

      <div className="container flex flex-wrap justify-center itens-center mx-auto mb-10 mt-8">
          <Card
            title="Tutor Inteligente"
            image={ImageTutor}
            objetivo="No Tutor, temos como foco a utilização de ferramentas como Jogos para tornar o 
              ensino mais atrativo para crianças, de maneira a ser algo mais orgânico e fácil de ser 
              inserido na vida da mesma.              
              "
            responsabilidade="Atuei como desenvolvedor Full-Stack."
            tecnologia="Nesse projeto foi usados as seguintes tecnologias: Python, Django, BootStrap entre outras."
            link="https://tutor.fuzzylab.tech"
          />

          <Card
            title="Nibby"
            image={ImageNibby}
            objetivo="Nossa plataforma foi projetada com a simplicidade em mente, permitindo que você 
              acompanhe seus gastos de forma fácil e rápida, incluindo gráficos e  detalhes."
            responsabilidade="Realizei uma breve atuação como Dev Front End e realizo pontuais participação."
            tecnologia="Nesse projeto foi usados as seguintes tecnologias: Python, Django, BootStrap entre outras."  
            link="https://nibby.fuzzylab.tech"
          />

          <Card
            title="FuzzySite"
            image={ImageFuzzy}
            objetivo="Nossa plataforma foi projetada para ser usada pelos alunos/participantes da Equipe universitária
            Fuzzy Lab, com o intuito de atualizar projetos e publicar artigos escritos pelos mesmos."
            responsabilidade="Atuo como Desenvolvedor Full Stack e Responsável de Equipe."
            tecnologia="Nesse projeto foi usados as seguintes tecnologias: Python, Django, BootStrap entre outras."
            link="https://fuzzylab.tech"
          />

          <Card
            title="My Energy Consult"
            image={ImageEnergy}
            objetivo="É uma plataforma de busca rápida de fornecedores de energia, aqui você encontrar o melhor fornecedor
            baseado no seu uso mensal de energia KW/H. Esse SPA foi desenvolvido para um teste de uma vaga, foi idealizado e produzido por mim"
              responsabilidade="Atuei como Design UX/UI e Desenvolvedor desta aplicação."
            tecnologia="Nesse projeto foi usados as seguintes tecnologias: Python, Django, Tailwind, React e Typescript."
            link="https://energyconsult.imglic.tech/"
          />
      </div>
    </section>
  );
};

export default Services;
