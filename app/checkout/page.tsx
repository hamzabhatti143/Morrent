import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
const page = () => {
  return (
    <>
      <Header />
      <div className="w-full p-4 flex flex-col md:flex-row justify-around items-center gap-2">
        <div className="w-full md:w-2/3 bg-white">
        <div>
            <h3 className="leading-[30px] text-xl font-bold p-2">Billing Info</h3>
            <div className="w-full flex justify-between p-2">
            <h5 className="text-[#90A3BF] font-medium text-sm leading-[21px]">Please enter your billing info</h5>
            <h5 className="text-[#90A3BF] font-medium text-sm leading-[21px]">Step 1 to 4</h5>
            </div>

            <div className="w-full flex justify-around items-center gap-2 p-4">
            <div className="flex flex-col w-1/2">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Your Name" className="p-4 bg-[#F6F7F9] rounded-lg"/>
            </div>
            <div className="flex flex-col w-1/2">
                <label htmlFor="">Phone Number</label>
                <input type="text" placeholder="Phone Number" className="p-4 bg-[#F6F7F9] rounded-lg"/>
            </div>

            </div>

            <div className="w-full flex justify-around items-center gap-2 p-4">
            <div className="flex flex-col w-1/2">
                <label htmlFor="">Address</label>
                <input type="text" placeholder="Address" className="p-4 bg-[#F6F7F9] rounded-lg"/>
            </div>
            <div className="flex flex-col w-1/2">
                <label htmlFor="">Town / city</label>
                <input type="text" placeholder="Town / city" className="p-4 bg-[#F6F7F9] rounded-lg"/>
            </div>

            </div>
        </div>
        </div>
        <div className="w-10/12 md:w-1/3 bg-white">hello</div>
      </div>
      <Footer />
    </>
  );
};

export default page;
