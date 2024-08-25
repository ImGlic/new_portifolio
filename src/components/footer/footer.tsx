import React from "react";
import { FaCreativeCommons } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <section className="bg-[#474A51] text-white py-4 px-6 flex flex-col sm:flex-row items-center justify-between">
      <div className="text-center sm:text-left">
        <p className="text-sm">Victor Glicério</p>
      </div>
      <div className="flex items-center space-x-2 mt-2 sm:mt-0">
        <FaCreativeCommons size={20} />
        <p className="text-sm">2024</p>
      </div>
    </section>
  );
};

export default Footer;
