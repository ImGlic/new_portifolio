
//oberver hook
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto my-10">
        <div>
          {/*text*/}
          <div className="flex-1">
            <h3 className="h3 mb-4 text-slate-50">I'm a Front End  Developer with many years of experience </h3>
            <p className="text-slate-50">
            Computer engineering student, full stack developer, passionate about robotics in healthcare. 
            I am the author of a patent with my teammates at SnakeTech, where I am part of as a researcher, 
            a robotics team created in college that aims to develop solutions and improvements that can 
            contribute to the medical and patient experience, making it more simplified and less risky
            </p>
          </div>
          {/*stats*/}
          <div className="flex gap-x-6 lg:gap-x-10 mb-5 mt-3 ">
            <div>
              <div className="text-[40px]  text-slate-50 mb-2 font-primary ">
               3+
              </div>
              <div className=" font-tertiary text-slate-50 text-sm tracking-[2px]">
                Years of <br />
                Experience
              </div>              
            </div>
          </div>
                  
        </div>
      </div>
    </section>
  );
};

export default About;
