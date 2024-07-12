// import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import logo from "../assets/aalogo4.png";

const Navbar = () => {
  return (
  <nav className='mb-20 flex items-center justify-between py-6'>
    <div className="flex flex-shrink-0 items-center">
        <img className='mx-2 w-20' src={logo} alt="Logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/aryan-agrawal-677b9b289/"><FaLinkedin className="hover:text-cyan-400 hover:text-3xl"/></a>
        <a href="https://github.com/tyson0911"><FaGithub className="hover:text-cyan-400 hover:text-3xl"/></a>
        <a href="https://www.instagram.com/eren_yeager_091?igsh=MWdsdWc4OTlic3N1bw=="><FaInstagram className="hover:text-cyan-400 hover:text-3xl"/></a>
        <a href="https://x.com/Aryan_2190"><FaSquareXTwitter className="hover:text-cyan-400 hover:text-3xl"/></a>
    </div>
  </nav>
  );
}

export default Navbar
