import { useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  return (
    <header className="  flex">
      <button onClick={() => {
        setshowModal(true)
      }} className="menu icon-menu flex">    </button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="">Profile</a>
          </li>
          <li>
            <a href="">Experiences</a>
          </li>
          <li>
            <a href="">Projet Académique</a>
          </li>
          <li>
            <a href="#Certifications">Certifications</a>
          </li>
          <li>
            <a href="">Compétances</a>

          </li>
          <li>
            <a href="">Contact</a>
            
          </li>
        </ul>
      </nav>

      <button className="mode flex">
        <span className="icon-moon-o">  </span>
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li >
              <button className="icon-close" onClick={() => {
                setshowModal(false)
              }} />   
              
             
              
           
            </li>
            <li>
            <a href="">Profile</a>
          </li>
          <li>
            <a href="">Experiences</a>
          </li>
          <li>
            <a href="">Projet Académique</a>
          </li>
          <li>
            <a href="#Certifications">Certifications</a>
          </li>
          <li>
            <a href="">Compétances</a>

          </li>
          <li>
            <a href="">Contact</a>
            
          </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
