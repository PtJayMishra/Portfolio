import Navbar from "./Navbar/Navbar";
import './Education.css';
import Footer from "./Navbar/Footer";

// Import images from the src folder
// import eduImage from './assets/images/degree2 img.jpg';
import education1 from './assets/images/education1.jpg';
import education2 from './assets/images/education2.jpg';
import collegeLogo from './assets/images/college logo.jpeg';
import schoolLogo from './assets/images/school logo.jpeg';

function Education() {
    return (
        <div className="education">
            <Navbar />
            <div className="main-container">
                <div className="edu-container">
                    {/* <div>
                        <img className="edu-img" src={eduImage} alt="Education" />
                    </div> */}
                    <div className="edu-content">
                        <div className="edu-box">
                            <h1>Education</h1>
                            <p>Basic Education And Certification</p>
                        </div>
                        <div className="grad-icon">
                            <img className="grad" src={education1} alt="Graduation" />
                            
                        </div>
                    </div>
                </div>
                <div>
                    <div className="edu-degree">
                         
                        <div className="bachelors">
                            <img className="college-img" src={collegeLogo} alt="College Logo" />
                            <div className="college-heading">
                                <div className="Title">
                                    <h2> UIT-RGPV</h2>
                                    <p> SEP 2022-PRESENT</p>
                                </div>
                                <div className="duration">
                                    <p>Bachelors of Technology in Electronics and Communication Engineering</p>
                                </div>
                                <div className="content">
                                    <p>
                                        Despite my background in Electronic and Communication, I have pursued various courses in various topics like Artificial Intelligence And Ethics, Blockchain and Social Trust.
                                    </p>
                                    <br />
                                     
                                    <div className="button">
                                        <a className="button1" href="https://www.uitrgpv.ac.in/" target="_blank" rel="noopener noreferrer">
                                            Visit website
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 
            </div>
            <Footer />
        </div>
    );
}

export default Education;
