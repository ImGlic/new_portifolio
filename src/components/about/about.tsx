import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const [ref] = useInView({
    threshold: 0.5,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto my-10">
        <Slider {...settings}>
          <div className="text-center p-6 bg-slate-800 rounded-lg">
            <h1 className="h1 mb-4 text-slate-50">About Me</h1>
            <p className="text-slate-50">
              I am a technology enthusiast, always curious about how things work. I started my journey in technology by creating simple websites and playing with electronics. I love exploring new technologies and am always seeking new challenges.
            </p>
          </div>

          <div className="text-center p-6 bg-slate-800 rounded-lg">
            <h3 className="h3 mb-4 text-slate-50">Studies and Future</h3>
            <p className="text-slate-50">
              I am currently studying computer engineering and working as a full stack developer. My main programming languages include JavaScript, TypeScript, and Python. In the future, I plan to deepen my knowledge in artificial intelligence and contribute to technological innovations.
            </p>
          </div>

          <div className="text-center p-6 bg-slate-800 rounded-lg">
            <h3 className="h3 mb-4 text-slate-50">My Hobbies</h3>
            <p className="text-slate-50">
              When I'm not coding, I enjoy playing sports, exploring new music, and cooking. I'm also passionate about photography and travel, always looking for new adventures.
            </p>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default About;
