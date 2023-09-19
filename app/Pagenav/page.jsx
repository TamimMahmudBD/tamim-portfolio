"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Pagenav = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');

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

    return (
        <div className='hidden md:block  lg:hidden'>
            <div style={{ backgroundColor: `${navBg}` }}
                className={
                    shadow
                        ? 'fixed w-full mt-0 h-16 shadow-xl z-[100] ease-in-out duration-300  lg:mt-[0]'
                        : 'fixed w-full h-16 z-[100]  lg:mt-[0]'
                }>
                <div className=' w-full h-16 bg-[#ECF0F3]' >
                    <div className='flex justify-between items-center h-16 px-4 md:px-16 mt-0 '>
                        <div>
                            <Link href='/'><h3>TAMIM</h3></Link>
                        </div>
                        <div className='hidden md:flex'>
                            <Link href='/' > <li className='ml-10 text-sm uppercase  '>Home</li></Link>
                            <Link href="/About" > <li className='ml-10 text-sm uppercase  '>About</li></Link>
                            <Link href='/Skills'> <li className='ml-10 text-sm uppercase  '>Skills</li></Link>
                            <Link href='/Projects'> <li className='ml-10 text-sm uppercase  '>Project</li></Link>
                            <Link href='/Contact'> <li className='ml-10 text-sm uppercase  '>Contact</li></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagenav