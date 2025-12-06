import React from "react";
import { LuSunMedium } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa";



const Task = ({title, description, className}) => {
    const currentdate = new Date().toDateString();

    
    
  return (
    <div>
      <div className="h-[50vh] w-[75vw] border-white border-2 rounded ">
        <div className="h-20 w-[100%] border-b-2 border-white flex items-center pl-4">
          <LuSunMedium className="text-[#4CDDE6] text-3xl" />
          <h4 className="text-[#4CDDE6] text-3xl ">AI Hosted Challenge</h4>
        </div>

        <div className="h-54 w-[100%]  border-b-2 border-white">
          <h1 className={`pl-7 pt-5 text-white text-4xl ${className}`}>{title}</h1>
          <h4 className={`pl-7 pt-8 text-[#D9D9D9] text-[20px] ${className}`}>
           
           {description}
          </h4>

          <div className="flex  ">
<SlCalender className="text-[#4CDDE6] text-6xl pl-7 "/>
<h4 className=' pt-4 pl-8 text-[#D9D9D9] text-[20px]'>{currentdate}</h4>
          </div>
        </div>
 <div className="h-17 w-full pt-4 flex justify-around ">
    <h4 className="pl-3  text-[#D9D9D9] text-[20px]">💡 Create audio based on today's topic to get featured on the homepage!</h4>
    <div className=" h-10 w-39 border-b-2 border-[#CC8A07]   pr-4 flex items-center justify-between">
        <button className="text-[#4CDDE6] w-30 whitespace-nowrap">Accept Challenge</button>
        <FaArrowRight className="text-[#4CDDE6] "/>
    </div>
 </div>
      </div>
    </div>
  );
};

export default Task;
