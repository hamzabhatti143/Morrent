import React from 'react'
import { FaSearch, FaBell, FaCog, FaHeart } from "react-icons/fa";
import Image from "next/image"
const header = () => {
  return (
    <>
    <div className="w-full p-6 md:p-14 flex flex-col md:flex-row bg-white">
      <div className='w-full md:w-1/2 flex flex-col md:flex-row justify-between'>
        <div className="w-1/5 text-2xl font-bold text-blue-600 mb-4 lg:mb-0">MORENT</div>
        <div className='w-full md:w-3/5 flex'>
        <input
             type="text"
             placeholder="Search something here"
             className="w-full rounded-full border border-gray-300 bg-gray-100 py-2 px-4 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
           />
           <button className="ml-[-30px] text-gray-500">
             <FaSearch />
           </button>

           </div>
      </div>
      <div className='w-full mt-4 md:mt-0 md:w-1/2 flex justify-center md:justify-end gap-6 items-center'>
      <button className=" text-gray-600 hover:text-blue-600">
            <FaHeart size={20} />
          </button>
          <button className=" text-gray-600 hover:text-blue-600">
            <FaBell size={20} />
            <span className=" h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <button className="text-gray-600 hover:text-blue-600">
            <FaCog size={20} />
          </button>
          <Image
            src="/images/profile.svg"
            alt="Profile"
            height={44}
            width={44}
            className="rounded-full border border-gray-300"
          />
      </div>
    </div>
    </>
  )
}

export default header
