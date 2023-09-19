"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');

  const handleNav = () => {
    setNav(!nav)
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id='nav' style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full mt-0 h-16 shadow-xl z-[100] ease-in-out duration-300 md:mt-[-100px] lg:mt-[0]'
          : 'fixed w-full h-16 z-[100] md:mt-[-100px] lg:mt-[0]'
      }>
      <div className='flex justify-between items-center w-full h-full px-4 md:px-16 mt-0 '>
        <div>
          <Link href='/'><h3>TAMIM</h3></Link>
        </div>
        <div style={{ color: `${linkColor}` }} className='hidden md:flex'>
          <Link href='/' > <li className='ml-10 text-sm uppercase  '>Home</li></Link>
          <Link href="/About" > <li className='ml-10 text-sm uppercase  '>About</li></Link>
          <Link href='/Skills'> <li className='ml-10 text-sm uppercase  '>Skills</li></Link>
          <Link href='/Projects'> <li className='ml-10 text-sm uppercase  '>Project</li></Link>
          <Link href='/Contact'> <li className='ml-10 text-sm uppercase  '>Contact</li></Link>
        </div>
        <div onClick={handleNav} className='md:hidden rounded-full shadow-xl shadow-gray p-3 cursor-pointer'>
          <AiOutlineMenu />
        </div>
      </div>
      {/* Mobile Menu */}

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ' : ''}>
        <div className={nav ? 'md:hidden px-4 fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] ease-in duration-500' : 'px-4 fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] ease-in duration-500'}>
          <div className=''>
            <div className=' pt-3 flex w-full items-center justify-between'>
              <div onClick={() => setNav(false)}>
              <Link href='/'><h3 >TAMIM</h3></Link>
                <p className=' text-sm'>Let's buld your dream</p>
              </div>
              <div style={{ color: `${linkColor}` }} onClick={handleNav} className='rounded-full shadow-xl shadow-gray p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 mt-2'> </div>
          </div>
          <div className='py-4'>
            <ul className='capitalize'>
              <Link href='/'><li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li></Link>
              <Link href='/About'><li onClick={() => setNav(false)} className='py-4 text-sm'>About</li></Link>
              <Link href='/Skills'><li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li></Link>
              <Link href='/Projects'><li onClick={() => setNav(false)} className='py-4 text-sm'>Project</li></Link>
              <Link href='/Contact'><li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li></Link>
            </ul>
            <div className='pt-10 uppercase tracking-widest text-[#0f0f0ffa]'>
              <p>Let's Connect</p>
              <div className='flex justify-between my-4 w-[80%]'>
                <div className='rounded-full shadow-xl shadow-gray p-3 cursor-pointer hover:cals-105 ease-in duration-300'>
                  <FaLinkedin />
                </div>
                <div className='rounded-full shadow-xl shadow-gray p-3 cursor-pointer hover:cals-105 ease-in duration-300'>
                  <FaGithub />
                </div>
                <div className='rounded-full shadow-xl shadow-gray p-3 cursor-pointer hover:cals-105 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-xl shadow-gray p-3 cursor-pointer hover:cals-105 ease-in duration-300'>
                  <BsPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar