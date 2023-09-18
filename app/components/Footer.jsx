import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between text-center p-2 md:px-16'>
    <div>
        <p className='text-sm py-2 px-8 md:px-0'>© 2023 Tamim Mahmud | Web Developer | All right reserved.</p>
      </div>
      <div className="flex justify-center items-center gap-5 text-[#666666]">
        <BsFacebook />
        <BsGithub />
        <BsLinkedin />
      </div>
    </div>
  )
}

export default Footer