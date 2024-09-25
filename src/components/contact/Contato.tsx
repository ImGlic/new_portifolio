import  { useState, ChangeEvent } from "react";
import Input from "../input/index";
import { FaWhatsapp } from "react-icons/fa";
import "./Contato.css";



const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");
 

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    if (id === "nome") setNome(value);
    if (id === "email") setEmail(value);
    if (id === "assunto") setAssunto(value);
    if (id === "mensagem") setMensagem(value);
  };

 

  const handleWhatsAppClick = () => {
    const phoneNumber = "5521989490332";
    const message = `Nome: ${nome}\nEmail: ${email}\nAssunto: ${assunto}\nMensagem: ${mensagem}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div id="contact" className="w-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 mt-4">
      <div>
        <h1 className="h1 text-primary text-3xl font-bold">Contatos</h1>
      </div>

      <form
        className="w-full sm:w-3/4 lg:w-1/2 bg-slate-800 shadow-md rounded-3xl px-8 pt-6 pb-6 mb-4 mt-8"
        
      >
        <div className="flex justify-center mb-8 pb-6">
          <h1 className="text-white text-2xl ml-5">Contato</h1>
        </div>

        <div className="mb-6">
          <Input
            label="Nome"
            id="nome"
            type="text"
            value={nome}
            onChange={handleInputChange}
            placeholder="Digite seu nome"
          />
        </div>

        <div className="mb-6">
          <Input
            label="Email"
            id="email"
            type="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Digite seu email"
          />
        </div>

        <div className="mb-6">
          <Input
            label="Assunto"
            id="assunto"
            type="text"
            value={assunto}
            onChange={handleInputChange}
            placeholder="Digite o assunto"
          />
        </div>

        <div className="mb-6">
          <Input
            label="Mensagem"
            id="mensagem"
            type="textarea"
            value={mensagem}
            onChange={handleInputChange}
            placeholder="Digite sua mensagem"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-around items-center">
          
          <button
            type="button"
            className="bg-green-500 text-white rounded-full p-3 mt-4 sm:mt-0"
            onClick={handleWhatsAppClick}
          >
            <FaWhatsapp size={24} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contato;
