import React from "react";
import leo from './assets/leo.png'

export default  function Navbar(){
    return (
       <nav className=" flex mx-4 justify-between"> 
        <img src={leo} className="w-16 m-0 flex flex-col" />
        <span className="flex-col space-x-6 mt-3  w-[581px] h-[39px] text-white  text- font-medium font-['Kumbh Sans']">
            <a href="#">ABOUT US</a>
            <a href="#">OUR CAUSE</a>
            <a href="#">OUR PAST PROGRAMS</a>
            <a href="#">NEWS FEATURES</a>
        </span>
        
       </nav>
    )
}