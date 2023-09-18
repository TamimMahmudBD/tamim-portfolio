import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full md:h-[100vh] text-center md:text-left flex flex-col md:flex-row md:px-14 md:my-24 lg:my-0'>
      <div className='max-w-[1240px]  w-full md:w-3/5 h-full mx-auto p-4 flex justify-center items-center my-24 md:my-0'>
        <div className='pt-6 md:pt-0'>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <div className='md:text-[1rem]'>
            <h1 className='py-4 text-gray-700 md:text-[2rem] lg:text-[2rem] xl:text-[3rem]'>
              Hi, I&#39;m <span className='text-[#1488A1]'> Tamim</span>
            </h1>
            <h1 className='py-2 text-gray-700 md:text-[2rem] lg:text-[2.5rem] xl:text-[3.5rem]'>A Front-End Web Developer</h1>
          </div>
          <p className='py-4 text-gray-600 sm:max-w-[70%] '>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className='flex items-center justify-between md:max-w-[330px] py-4 px-4 md:px-0'>
            <a
              href='https://www.linkedin.com/in/tamim2010/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/tamim-jr'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div class="w-full md:w-2/5 p-4 flex flex-wrap items-center justify-center">
        <div class="flex flex-wrap items-center justify-center">
          <Image src="/assets/tamim-img.png" height='420' width='420' alt="..." class="shadow rounded-full max-w-full h-auto align-middle border-2 border-[#1488A1]" />
        </div>
      </div>
    </div>
  );
};

export default Main;