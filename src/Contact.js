import Navbar from "./Navbar/Navbar";
import './Contact.css';
import { FaGithub, FaHeart, FaLinkedin, FaMailBulk } from "react-icons/fa";
import contact3 from "./assets/images/contact3.jpg";

export function Contact() {
    return (
        <div>
            <Navbar />
            <div className="contact-box1">
                <img className=" contact-img" src={contact3} alt="Contact" />
                <div className="contact-heading">
                    <h1>Contact Me</h1>
                    <p>I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with web application, React, Cloud, and Opensource Development.</p>
                </div>
            </div>
            <div className="container2">
                <div className="reach">
                    <h1>Reach me out Via:</h1>
                </div>
                <div className="box-content">
                    <div className="add-icon">
                        <a className="icons" href="https://www.linkedin.com/in/jay-mishra-21b17b200/" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
                            <FaLinkedin size={40} />
                            <h3>Linkedin</h3>
                        </a>
                    </div>
                    <div className="add-icon">
                        <a className="icons" href="https://github.com/PtJayMishra" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
                            <FaGithub size={40} />
                            <h3>Github</h3>
                        </a>
                    </div>
                    <div className="add-icon">
                        <a className="icons" href="mailto:jay123mishrapt@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
                            <FaMailBulk size={40} />
                            <h3>Email</h3>
                        </a>
                    </div>
                </div>
                <div className="cont-btn">
                    <a className="cont-btn2" href=" " target="_blank" rel="noopener noreferrer">
                        See My Resume
                    </a>
                </div>
                <p className="foot-para">Made with <FaHeart size={30} /> by Jay Mishra</p>
            </div>
        </div>
    );
}
