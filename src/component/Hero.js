import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import "./Hero.css";
import { FaCss3 } from "react-icons/fa6";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";

// Import images from the src folder
import techImage from "../assets/images/experience2.jpeg";
import aboutImage from "../assets/images/image.jpeg";

export default function Hero() {
  return (
    <>
      <Navbar />
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-para">
            <h2>Hello, I'm</h2>
            <h1>Jay Mishra</h1>
            <div className="para-content">
              <p>
                An enthusiastic individual who consistently strives to
                contribute to the development of end-to-end products, with a
                focus on frontend & all related aspects. I aim to build
                sustainable and scalable social and technical systems that make
                a meaningful impact. I am passionate about coding, continuously
                learning new technologies, and implementing best practices in
                software development. My expertise lies in creating dynamic,
                responsive, and user-friendly web applications using modern
                frameworks and libraries. I am proficient in HTML, CSS,
                JavaScript, and React, and have experience with cloud services
                and version control systems like GitHub. I enjoy collaborating
                with cross-functional teams to deliver high-quality software
                solutions that meet user needs and drive business success
              </p>
            </div>
          </div>
          <div>
            <img className="tech-img" src={techImage} alt="Tech Image" />
          </div>
        </div>
        <div className="about-container">
          <h1>What I do?</h1>
          <div className="about-heading">
            <div className="iamge">
              <img className="about-img" src={aboutImage} alt="About Image" />
            </div>
            <div className="about-content">
              <div className="front"><h2>Frontend Development</h2></div>
              
              <div className="tech-icons">
                <div className="react-icon">
                  <FaHtml5 className="react" size={40} />
                </div>
                <div className="react-icon">
                  <FaCss3 className="react" size={40} />
                </div>
                <div className="react-icon">
                  <FaJs className="react" size={40} />
                </div>
                <div className="react-icon">
                  <FaReact className="react" size={40} />
                </div>
              </div>
              <div className="about-para">
                <div>
                  <p>
                    I developed web applications featuring responsive user
                    interfaces through the application of React.js, Redux, HTML,
                    CSS, JavaScript, and Redux Saga. Innovating and implementing
                    new functionalities for applications, accompanied by the
                    development of unit test cases using Jest and React Testing
                    Library. Proficiently integrating APIs with Redux Saga and
                    seamlessly binding API data to user interface screens and
                    many more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
