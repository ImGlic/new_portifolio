type info = {
    empresa: string;
    image: string;   
  };
  
  const Card = ({ empresa, image }: info) => {
    return (
      <a className="rounded-lg gap-5 cursor-pointer ">
        <div className="flex flex-col justify-center items-center rounded-t-3xl bg-[#474A51] h-[50px] w-[280px] ">
          <p className="text-white font-lancelot">{empresa}</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-white  h-[300px] w-[280px] ">
          <p className="flex justify-center items-center text-black text-5xl indent-[20px] ">
            <img
              src={`${image}`}
              width="50%"
              height="50%"
              alt={`icone ${empresa}`}
            />
          </p>
        </div>
        <div className="flex flex-col rounded-b-3xl bg-primary h-[50px] w-[280px] ">
          <p className="text-white flex flex-rol justify-center p-2 items-center text-lg font-lancelot ">
            
          </p>
        </div>
      </a>
    );
  };
  
  export default Card;
  