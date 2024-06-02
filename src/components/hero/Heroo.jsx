import React from 'react'
import './hero.css';
import Lottie from "lottie-react";
import ccAnimation from '../../../src/animation/comp.json';
import { motion } from "framer-motion";
const Heroo = () => {
  return (
    <section className="hero flex">
    <div className="left-section  ">
      <div className="parent-avatar flex">
        <img src="./me.png" className="avatar" alt="" />
        <div className="icon-verified"></div>
      </div>

<motion.h1 
      initial={{opacity:0}}
      animate ={{opacity:1}}
      transition ={{duration:2}}
       className="title">
        WEB DEVELOPER
      </motion.h1>
      <p className="sub-title">
      I am a second year undergraduate student,specializing in software engineering, at the
Mahdia ISIMA Higher Institute of Computer Science, I am currently looking for a company that
could welcome me for a summer internship lasting two months.
      </p>

      <div className="all-icons flex">
        <div className="icon icon-twitter"></div>
        <div className="icon icon-instagram"></div>
        <div className="icon icon-github"></div>
        <div className="icon icon-linkedin"></div>
      </div>
    </div>

    <div>
    <Lottie className="animation"  animationData={ccAnimation} /></div>
  </section>
  )
}
export default Heroo;