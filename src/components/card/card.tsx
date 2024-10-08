import  { useState } from "react";
import Modal from "../modal/index";

type info = {
  title: string;
  image: string;
  objetivo: string;
  responsabilidade: string;
  tecnologia: string;
  link?: string;
};

const Card = ({
  title,
  image,
  objetivo,
  responsabilidade,
  tecnologia,
  link,
}: info) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="rounded-lg cursor-pointer  ml-4 mt-4">
      {/* Ao clicar no título, o modal é aberto */}
      <div
        onClick={openModal}
        className="flex flex-col justify-center items-center rounded-t-3xl bg-[#474A51] h-[50px] w-[300px] "
      >
        <p className="text-white font-lancelot">{title}</p>
      </div>

      <div
        onClick={openModal}
        className="flex flex-col justify-center items-center bg-white h-[300px] w-[300px] "
      >
        <p className="flex justify-center items-center text-black text-5xl indent-[20px] ">
          <img
            src={`${image}`}
            width="50%"
            height="50%"
            alt={`icone do card ${title}`}
          />
        </p>
      </div>

      <a
        target="_blank"
        href={link || ""}
        className="flex flex-col rounded-b-3xl bg-primary h-[50px] w-[300px] "
      >
        <p className="text-white flex justify-center p-2 items-center text-lg font-lancelot ">
          Visitar
        </p>
      </a>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={title}>
        <div>
          <div className="flex justify-center itens-center">
            <img
              src={image}
              width="50%"
              height="25%"
              alt={`imagem do card ${title}`}
            />
          </div>
          <p className="text-black mt-4">{objetivo}</p>
          <p className="text-black mt-4">{responsabilidade}</p>
          <p className="text-black mt-4">{tecnologia}</p>
        </div>
      </Modal>
    </div>
  );
};

export default Card;
