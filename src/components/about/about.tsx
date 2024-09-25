import { useInView } from "react-intersection-observer";
import imageMinhaTirandoFoto from "../../assets/foto-tirandofoto.jpg";
import imageMinhaEventocarro from "../../assets/foto-eventocarro.jpg";
import imageMinhaEventoaviacao from "../../assets/foto-eventoaviacao.jpg";
import imageMinhaVolei from "../../assets/foto-volei.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const [ref] = useInView({
    threshold: 0.5,
  });  

  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex flex-col justify-center items-center mt-4"
      id="about"
      ref={ref}
    >
      <div>
        <h1 className="h1 text-primary text-3xl font-bold">Sobre Mim</h1>
      </div>
      <div className="container mx-auto my-10">
          <div className="text-center p-6 bg-slate-800 rounded-lg">
            <h1 className="mb-4 text-slate-50 font-2xl font-bold">
              Minha história
            </h1>
            {/* <div className="flex justify-center mt-2 mb-2 gap-x-3">
              <img
                src={imageMinhaHistoria}
                width="20%"
                height="50%"
                alt={`icone`}
                className="rounded"
              />

              <img
                src={imageMinhaHistoria2}
                width="20%"
                height=""
                alt={`icone`}
                className="rounded"
              />
            </div> */}

            <p className="text-slate-50">
              Desde criança, sempre fui curioso e adorava desmontar objetos para
              entender o que havia dentro. O desafio vinha depois, quando eu
              tentava remontar e nem sempre conseguia, mas essa busca por criar
              ou consertar algo me fez apaixonar por tecnologia. Hoje, sou um
              engenheiro de software que adora aprender, resolver problemas e
              estar em constante evolução. No ecossistema JavaScript, Python e
              PHP e integrações de APIs, sempre buscando novos desafios.
            </p>
          </div>

          <div className="text-center p-6 bg-slate-800 rounded-lg">
            <h1 className="mb-4 text-slate-50 font-2xl font-bold">
              Estudos e Futuro
            </h1>
            {/* <div className="flex justify-center mt-2 mb-2 gap-x-3">
              <img
                src={imageMinhaEstudando}
                width="20%"
                height="50%"
                alt={`icone`}
                className="rounded"
              />
            </div> */}
            <p className="text-slate-50">
              Atualmente, estou mergulhado nos estudos de Engenharia da
              Computação e desempenhando o papel de Desenvolvedor FullStack.
              Minhas principais Stacks são JavaScript, TypeScript e Python, que
              manejo com destreza. No horizonte, meus planos incluem mergulhar
              ainda mais fundo no mundo da inteligência artificial e deixar
              minha marca nas inovações tecnológicas. Quem sabe, talvez um dia
              eu até consiga entender todos os mistérios do universo digital.
            </p>
          </div>

          <div className="text-center p-6 bg-slate-800 rounded-lg">
            <h3 className="mb-4 text-slate-50 font-2xl font-bold">
              Meus Hobbies
            </h3>
            <div className="flex justify-center mt-2 mb-2 gap-x-3">
              <img
                src={imageMinhaTirandoFoto}
                width="20%"
                height="50%"
                alt={`icone`}
                className="rounded"
              />

              <img
                src={imageMinhaEventoaviacao}
                width="20%"
                height=""
                alt={`icone`}
                className="rounded"
              />

              <img
                src={imageMinhaEventocarro}
                width="20%"
                height=""
                alt={`icone`}
                className="rounded"
              />

              <img
                src={imageMinhaVolei}
                width="20%"
                height=""
                alt={`icone`}
                className="rounded"
              />
            </div>
            <p className="text-slate-50">
                Quando não estou programando, adoro me dedicar a várias atividades
                que me mantêm ativo e engajado. Pratico corrida para manter a
                forma e o bem-estar, e jogo vôlei tanto para me divertir quanto
                para competir. Além disso, tenho um grande interesse por carros e
                aviação, e frequentemente participo de eventos relacionados a
                esses temas. Meu passado como atleta de futebol americano também
                me trouxe valiosas experiências e desafios. Fora dos esportes, sou
                um entusiasta da música, gosto de explorar novos sons e cozinhar
                pratos variados. A fotografia e as viagens são duas das minhas
                grandes paixões, e estou sempre em busca de novas aventuras para
                capturar e explorar.
            </p>
          </div>
      </div>
    </section>
  );
};

export default About;
