import Slider from "react-slick";
import CardWork from "./cardExperience/index.tsx";
import imageNtl from "../../assets/logo-ntl-semfundo.png";
import imageFuzzy from "../../assets/logo-fuzzy.png";
import imageSnake from "../../assets/logo-snake.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Work = () => {
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
      id="experience"
    >
      <div>
        <h1 className="h1 text-primary text-3xl font-bold">Experiência</h1>
      </div>

      <div className="container mx-auto mb-10 mt-8">
        <Slider {...settings}>
          <div className="px-4">
            <CardWork
              empresa="Ntl Nova Tecnologia"
              image={imageNtl}
              cargo="Desenvolvedor FullStack Jr"
              atribuicao="Responsável por criar e fazer manutenção nos modulos do sistema ERP da empresa,
              participando de levantamentos de requisitos e analises preditivos dos projetos antes mesmo
              de ser iniciado."
              stack="Php, JavaScript, BootStrap, Jquery, Ajax, SQLServer"
              dataInicio="01/07/2022"
              dataFim="Atual"
            />
          </div>

          <div className="px-4">
            <CardWork
              empresa="FuzzyLab"
              image={imageFuzzy}
              cargo="Desenvolvedor FullStack"
              atribuicao="Responsável por criar e fazer manutenção no site da equipe, participando de levantamentos de 
              requisitos e analises preditivas dos projetos antes mesmo  de ser iniciado e gerenciar uma equipe responsável pela manutenção do site."
              stack="Python, JavaScript, BootStrap, Css, PostgreSql"
              dataInicio="01/08/2023"
              dataFim="Atual"
            />
          </div>

          <div className="px-4">
            <CardWork
              empresa="Snake Tech"
              image={imageSnake}
              cargo="Desenvolvedor Pesquisador"
              atribuicao="Meu papel é desenvolver soluções e melhorias que possam contribuir para a experiência médica e do paciente, tornando-a mais simplificada e menos arriscada.
              Aqui tive a oportunidade de conhecer a tecnologia aplicada a saúde."
              stack="Impressão 3d, Modelagem 3d, C++"
              dataInicio="22/02/2022"
              dataFim="24/05/2024"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Work;
