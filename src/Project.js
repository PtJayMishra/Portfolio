import Footer from "./Navbar/Footer";
import Navbar from "./Navbar/Navbar";
import './Project.css';
import Cards from "./component/Card";
import project2 from "./assets/images/project2.webp";

function Projects() {
    return (
        <div>
            <Navbar/>
            <div className="project-container">
                <div className="proj-box1">
                    <div>
                        <img className="project-img" src={project2} alt="Project" />
                    </div>
                    <div className="proj-heading">
                        <h1>Projects</h1>
                        <p>My projects leverage a wide array of the latest technology tools. I particularly enjoy creating web applications and deploying them using cloud infrastructure.</p>
                    </div>
                </div>
            </div>
            <div>
                <Cards/>
            </div>
            <Footer/>
        </div>
    );
}

export default Projects;
