import CardWork from './cardExperience/index.tsx'
import imageNtl from "../../assets/logo-ntl-semfundo.png";


const Work = () => {
  return (
    <div className='div mt-8' id='experience'>
      <div className='container mx-auto'>
        <div className="flex-1">
          <h2 className="h2 text-gradient">Experience</h2>
        </div>

        <div className='flex flex-wrap justify-evenly items-center gap-2 mt-10'>

          <CardWork
            empresa="Ntl Nova Tecnologia"
            image={imageNtl}
            // cargo="Desenvolvedor FullStack Jr"
            // descricao="Responsável por criar e fazer manutenção nos modulos do sistema ERP da empresa,
            // participando de levantamentos de requisitos e analises preditivos dos projetos antes mesmo
            // de ser iniciado."
            // tecnologiasUsadas="Php, JavaScript, BootStrap, Jquery, Ajax, SQLServer"
            // dataInicio="01/07/2023"
            // dataFim="Atual"
          />

          {/* <CardWork
            empresa="FuzzyLab"
            cargo="Integrante e Desenvolvedor"
            descricao="A Fuzzy é uma equipe universitária que tem como intuito
              ajudar os alunos a se inserirem no mercado de trabalho, efetuando projetos para diversos
              clientes, e aqui eu atuo como desenvolvedor e responsável por alguns projetos."
            tecnologiasUsadas="Python, Django, BootStrap, OpenCV, entre outros.."
            dataInicio="01/10/2023"
            dataFim="Atual"
          /> */}
          
        </div>
      </div>
    </div>
  )
};


export default Work;
