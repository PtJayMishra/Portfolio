import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills/Skills';
import Projects from './Project';
import { Contact } from './Contact';

function App() {
    return (
        <div>
            <Router basename="/Portfolio">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
