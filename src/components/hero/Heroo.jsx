import React from 'react';
import './hero.css';
import Lottie from "lottie-react";
import ccAnimation from '../../../src/animation/comp.json';
import { motion } from "framer-motion";

const Heroo = () => {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src="./me.png" className="avatar" alt="avatar" />
          <div className="icon-verified"></div>
        </div>

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="title"
        >
          WEB DEVELOPER
        </motion.h1>
        <p className="sub-title">
          I am a bachelor’s degree candidate in computer science, specializing in software engineering. 
          Passionate about crafting innovative solutions and addressing complex challenges, 
          I am seeking a final-year internship to refine my expertise in web and mobile development. 
          My interests include designing scalable, high-performance architectures and enhancing development 
          processes for greater efficiency and impact.
        </p>

        <div className="all-icons flex">
          <a href="https://twitter.com/your-profile" className="icon icon-twitter" target="_blank" rel="noopener noreferrer">
            {/* Twitter Icon */}
          </a>
          <a href="https://www.instagram.com/chayma_zoueri/" className="icon icon-instagram" target="_blank" rel="noopener noreferrer">
            {/* Instagram Icon */}
          </a>
          <a href="https://github.com/Zwarichayma" className="icon icon-github" target="_blank" rel="noopener noreferrer">
            {/* GitHub Icon */}
          </a>
          <a href="https://www.linkedin.com/in/chayma-zwari/" className="icon icon-linkedin" target="_blank" rel="noopener noreferrer">
            {/* LinkedIn Icon */}
          </a>
        </div>
      </div>

      <div>
        <Lottie className="animation" animationData={ccAnimation} />
      </div>
    </section>
  );
}

export default Heroo;
