import React from 'react'
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import Categorycard from '@/components/categorycard'
import Footer from "@/components/footer"
const page = () => {
  return (
    <>
<Header />
    <div className='w-full flex flex-col md:flex-row'>
        
<Sidebar />
<div className='w-full md:w-3/4'>
      <Categorycard /></div>
    </div>


    <Footer />
    </>
  )
}

export default page
