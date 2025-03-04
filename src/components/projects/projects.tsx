import { useEffect, useState } from "react";
import Card from "../card/index.tsx";
import ImageTutor from "../../assets/logo-tutor.png";
import ImageNibby from "../../assets/logo-nibby.png";
import ImageFuzzy from "../../assets/logo-fuzzy.png";
import ImageEnergy from "../../assets/myenergy-consult.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const [repos, setRepos] = useState<{ 
    id: number; 
    name: string; 
    description: string | null; 
    html_url: string; 
    language: string | null 
  }[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ImGlic/repos") // Substitua pelo seu usuário
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error("Erro ao buscar repositórios:", error));
  }, []);

  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex flex-col justify-center items-center mt-4"
      id="projects"
    >
      <div>
        <h1 className="h1 text-primary text-3xl font-bold">Projetos</h1>
      </div>

      <div className="container flex flex-wrap justify-center items-center mx-auto mb-10 mt-8">
        {/* Projetos Fixos */}
        <Card
          title="Tutor Inteligente"
          image={ImageTutor}
          objetivo="No Tutor, temos como foco a utilização de ferramentas como Jogos para tornar o ensino mais atrativo para crianças."
          responsabilidade="Atuei como desenvolvedor Full-Stack."
          tecnologia="Python, Django, BootStrap"
          link="https://tutor.fuzzylab.tech"
        />

        <Card
          title="Nibby"
          image={ImageNibby}
          objetivo="Nossa plataforma foi projetada com a simplicidade em mente, permitindo que você acompanhe seus gastos."
          responsabilidade="Atuei como Dev Front End."
          tecnologia="Python, Django, BootStrap"
          link="https://nibby.fuzzylab.tech"
        />

        <Card
          title="FuzzySite"
          image={ImageFuzzy}
          objetivo="Plataforma para atualização de projetos e publicação de artigos pela equipe universitária Fuzzy Lab."
          responsabilidade="Desenvolvedor Full Stack e Responsável de Equipe."
          tecnologia="Python, Django, BootStrap"
          link="https://fuzzylab.tech"
        />

        <Card
          title="My Energy Consult"
          image={ImageEnergy}
          objetivo="Plataforma para encontrar fornecedores de energia baseado no consumo mensal."
          responsabilidade="Atuei como UX/UI Designer e Desenvolvedor."
          tecnologia="React, TypeScript, Tailwind, Django"
          link="https://energyconsult.imglic.tech/"
        />

        {/* Projetos do GitHub */}
        {repos.map((repo) => (
          <Card
            key={repo.id}
            title={repo.name}
            image="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" // Ícone do GitHub
            objetivo={repo.description || "Sem descrição disponível."}
            responsabilidade="Criador do projeto."
            tecnologia={`Principal tecnologia: ${repo.language || "Desconhecida"}`}
            link={repo.html_url}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
