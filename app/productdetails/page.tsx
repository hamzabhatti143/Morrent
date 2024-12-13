import React from 'react'
import Header from "@/components/header"
import Categorycard from '@/components/categorycard'
import Footer from "@/components/footer"
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import Link from "next/link";
import Image from "next/image"
import Sidebar from "@/components/sidebar"
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
const page = () => {
  return (
    <>
      <Header />
      <div className='w-full flex flex-col md:flex-row'>
      <Sidebar />

      <div className="w-full md:w-3/4 p-4 md:p-10 flex flex-col md:flex-row  border-b-2">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="w-full mt-4 md:mt-0">
            <Image
              src={"/images/view.png"}
              alt="Product"
              width={600}
              height={500}
              className="w-full"
            />
          </div>

          <div
            className="w-full p-0 flex flex-wrap md:flex-nowrap flex-row 
            justify-center items-center gap-2 mt-4"
          >
            <Image
              src={"/images/View.png"}
              alt="Product"
              width={100}
              height={100}
              className="w-[120px] h-[140px] bg-[#F9F1E7] md:h-20"
            />

            <Image
              src={"/images/View 1.png"}
              alt="Product"
              width={100}
              height={100}
              className="w-[120px] h-[100px] md:h-20 "
            />

            <Image
              src={"/images/View 2.png"}
              alt="Product"
              width={100}
              height={100}
              className="w-[120px] h-[100px] md:h-20 "
            />

            <Image
              src={"/images/View 3.png"}
              alt="Product"
              width={100}
              height={100}
              className="w-[120px] h-[100px] md:h-20 "
            />
          </div>
        </div>
        <div className="w-full bg-white  md:w-1/2 p-4">
          <div className="">
            <h3 className="font-semibold leading-6 text-4xl md:text-[42px]">
              Asgaard sofa
            </h3>
            <p className="text-[#9F9F9F] font-medium text-2xl mt-4">
              Rs. 250,000.00
            </p>
            <div className="flex justify-around items-center w-full md:w-1/2">
              <MdOutlineStarPurple500 className="fill-amber-400" />
              <MdOutlineStarPurple500 className="fill-amber-400" />
              <MdOutlineStarPurple500 className="fill-amber-400" />
              <MdOutlineStarPurple500 className="fill-amber-400" />
              <MdOutlineStarBorderPurple500 />|{" "}
              <p className="text-[#9F9F9F]">5 Customer Review</p>
            </div>
            <p className="w-full md:w-3/4 text-justify mt-4">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
          </div>

          <div>
            <div className="w-full md:w-1/2 mt-4 mb-10">
              <h2 className="text-[#9F9F9F]">Size </h2>
              <div className="flex w-full md:w-1/2 gap-2">
                <p className="w-7 h-7 rounded-md text-center bg-[#B88E2F] text-white">
                  L
                </p>
                <p className="w-7 h-7 rounded-md text-center bg-[#F9F1E7]">
                  XL
                </p>
                <p className="w-7 h-7 rounded-md text-center bg-[#F9F1E7]">
                  XS
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 mt-4">
              <h2 className="text-[#9F9F9F]">Colors </h2>
              <div className="w-full md:w-1/2 flex">
                <p className="w-7 h-7 rounded-full border-2 bg-[#816DFA]"></p>
                <p className="w-7 h-7 rounded-full border-2 bg-[#000000]"></p>
                <p className="w-7 h-7 rounded-full border-2 bg-[#B88E2F]"></p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[#9F9F9F] mt-4">SKU : SS001</p>
            <p className="text-[#9F9F9F] mt-4">Category : Sofas</p>
            <p className="text-[#9F9F9F] mt-4">
              Tags : Sofa, Chair, Home, Shop
            </p>
            <p className="flex w-1/2 gap-4 mt-4">
              <span className="text-[#9F9F9F]">Share : </span>
              <Link href="">
                <FaFacebookF />
              </Link>
              <Link href="">
                <LuLinkedin />
              </Link>
              <Link href="">
                <LuTwitter />
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>

</div>


<div className='w-full flex flex-col md:flex-row'>
        <div className="w-1/4 bg-white"></div>
<div className='w-full md:w-3/4'>
      <Categorycard /></div>
    </div>
      <Footer />
    </>
  )
}

export default page
