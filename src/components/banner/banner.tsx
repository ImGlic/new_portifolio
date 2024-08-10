//images
import Image from "../../assets/perfil.jpg";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//icons
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
//variants
import { fadeIn } from "../../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex justify-center items-center mt-8 mb-3"
      id="home"
    >
      <div className="container max-auto lg:flex justify-center">
        <div className=" flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {" "}
          {/*image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initiol="hidden"
            whileInView={"show"}
            viewport={{ onde: false, amount: 0.7 }}
            className="flex flex-1 items-center justify-center max-w-[320px] max-w-[482px]
            lg:flex lg:flex-1 lg:items-center lg:justify-center 
            md:flex md:flex-1 md:items-center md:justify-center"
          >
            <img
              className="rounded-full h-[400px] w-[400px] "
              src={Image}
              alt=""
            />
          </motion.div>
          {/*text */}
          <div className="flex-1 text-center text-white lg:text-left ">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initiol="hidden"
              whileInView={"show"}
              viewport={{ onde: false, amount: 0.7 }}
              className="text-[55px] font-bold mb-2"
            >
              VICTOR <span>GLICÉRIO</span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.3)}
              initiol="hidden"
              whileInView={"show"}
              viewport={{ onde: false, amount: 0.7 }}
              className="mb-6 txt-[50px] lg:text-[60px] text-white font-semibold uppercase
              leading-[1]"
            >
              <span className="mr-2 mt-2">I am a</span>
              <TypeAnimation
                sequence={["Full Stack Developer", 500]}
                color="#0a0a0a"
                speed={50}
                wrapper="span"
              />
            </motion.div>

            <p className="mb-8 max-w-lg mx-auto lg:mx-0 ">
              Computer Engineering Student And Full stack Developer
              <br />
              PhP, JavaScript, SqlServer, ReactJs, Python, Django.
              <br />
              Agile, TDD, BDD.
              <br />
              Git, GitHub, Docker.
            </p>
            <div
              className=" flex max-w-max gap-x-6 items-center mb-12 
                 mx-auto lg:mx-0"
            ></div>

            {/*Redes Sociais*/}
            <div className="flex text-[30px] gap-y-5 gap-x-6 max-w-max mx-auto lg:mx-0">
              <a
                target="_blank"
                href="https://instagram.com/imglic?igshid=YmMyMTA2M2Y="
              >
                <FaInstagram />
              </a>
              <a target="_blank" href="https://www.twitter.com/im_glic">
                <FaTwitter />
              </a>
              <a target="_blank" href="https://github.com/ImGlic">
                <FaGithub />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/victorglicerio1"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
