import React from 'react'
import people from '../assets/people.webp'
import footer from '../assets/footer.png'
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className='w-full h-80 bg-[#E1D3FA] flex items-center justify-between gap-10 overflow-hidden mt-32'>
      <div className='-m-40 pl-40'><img src={footer} /></div>
      <div className='flex flex-col text-purple-900 gap-4 pr-60'>
        <div className='text-2xl font-bold'>Mr. Arun Aggrawal</div>
        <div className='flex gap-3 items-center'><FaPhoneAlt />+91 999999999</div>
        <div className='flex gap-3 items-center'><SiGmail />arunaggarwal@gmail.com</div>
        <div className='font-bold'>Journalist</div>
        <div className='p-2 bg-purple-900 text-white hover:bg-white hover:text-purple-900 rounded-lg text-center'>Register to course</div>
      </div>
    </div>

  )
}

export default Footer