type info = {
  empresa: string;
  image: string;
  cargo:string;
  atribuicao:string;
  stack:string;
  dataInicio:string;
  dataFim:string;
};

const Card = ({ empresa, image, cargo, atribuicao, stack, dataInicio, dataFim }: info) => {
  return (
    <a className="rounded-lg gap-5 cursor-pointer ">
      <div className="flex justify-center gap-x-4 items-center rounded-t-3xl bg-[#474A51] h-[50px] w-[300px] ">
        <img src={`${image}`} width="8%" height="8%" alt={`icone ${empresa}`} />
        <p className="text-white font-lancelot">{empresa}</p>
      </div>
      <div className="flex flex-col  bg-white rounded-b-3xl h-[350px] w-[300px]">

        <div className="flex ml-2 mt-1">
          <b>Cargo: </b>
          <p className="ml-1">{cargo}</p>
        </div>

        <div className="ml-2 mt-1">
          <b>Atribuições:</b>
          <p className="whitespace-normal break-words">{atribuicao}</p>
        </div>

        <div className="ml-2 mt-1">
          <b>Tecnologias:</b>
          <p className=" ">{stack}</p>
        </div>


        <div className="flex flex-rol ml-2 mt-6 gap-x-2">
          <b>Inicio: </b>
          <p className=" ">{dataInicio}</p>

          <b>Fim: </b>
          <p className=" ">{dataFim}</p>
        </div>

        
      </div>
    </a>
  );
};

export default Card;
