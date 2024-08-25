import React from "react";
import "./Card.css";

const Cards = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <h2>Project | Web3-wallet</h2>
        <p className="card-content">
        <b>Login/Signup Platform:</b> 
        Able to recover old account or create new account. 
<br></br><br></br>
 <b>Seed Phrase Generation: </b>  Generate a unique seed phrase from bip39.<br></br><br></br>
 <b>Wallet Generation:</b> Create a unique wallet with public and private key easily searchable<br></br><br></br>
 <b>Transaction: </b> : Send and receive Eth and show recent transcation with hash. .<br></br><br></br>
  
 <b>Other Tools:</b> Git for version control, npm for pakage management.
        </p>
      </div>
      <div className="card">
        <h2>Project | My Portfolio</h2>
        <p className="card-content"> 
        <b>Portfolio Structure and Navigation:</b> Designed and implemented a multi-page portfolio including Home, Experience, Skills, Projects, Education, and Contact Me sections, with a user-friendly navigation system ensuring seamless transitions between pages.<br></br><br></br>
 <b>Interactive Features:</b>
Created custom accordion components to display content under headers, enhancing user engagement and content organization, and integrated social media links for direct redirection to respective platforms, increasing connectivity and networking opportunities.<br></br><br></br>
 <b>Technical Skills Demonstrated:</b> Showcased proficiency in web development technologies and frameworks (e.g., HTML, CSS, JavaScript, React). .</p>
      </div>
    </div>
  );
};

export default Cards;