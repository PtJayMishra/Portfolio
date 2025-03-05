import { useState } from "react";
import { X } from "lucide-react";


const Navbar = ({ setIsOpen }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  return (
    <nav className="bg-nav text-white h-screen p-5 w-64 md:w-72 fixed md:relative flex flex-col">
      {/* Mobile Close (X) Button */}
      {isMobile && (
        <div className="flex justify-end">
          <button onClick={() => setIsOpen(false)}>
            <X size={28} className="text-icon" />
          </button>
        </div>
      )}

      {/* Logo */}
      <h1 className="text-2xl font-bold">Jay Mishra</h1>

      {/* Navigation Links */}
      <ul className="mt-8 space-y-4">
        
        <li className="hover:text-icon cursor-pointer">  About </li>
        <li className="hover:text-icon cursor-pointer">Work</li>
        <li className="hover:text-icon cursor-pointer">Projects</li>
        <li className="hover:text-icon cursor-pointer">Get In Touch</li>
        <br />
        <span className="bg-nav">Quick Links </span>
         
        <li className="hover:text-icon cursor-pointer">Twitter</li>
        <li className="hover:text-icon cursor-pointer">Linkedin</li>
        <li className="hover:text-icon cursor-pointer">Github</li>
        <li className="hover:text-icon cursor-pointer">Read CV</li>
        <br />
      </ul>
    </nav>
  );
};

export default Navbar;