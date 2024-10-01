import React, { useState } from "react";
import leo from './assets/leo.png'
import 'boxicons';
import menu from './assets/menu.png'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="flex mx-4 pt-3 pl-4 justify-between items-center relative"> 
            <img src={leo} alt="Leo logo" className="w-16 m-0" />
            
            <div className="hidden md:flex space-x-6 pr-6 items-center text-white text-bsml2 font-medium font-['Kumbh Sans']">
                <a href="#" className="hover:text-yellow-400">ABOUT US</a>
                <a href="#" className="hover:text-yellow-400">OUR CAUSE</a>
                <a href="#" className="hover:text-yellow-400">OUR PAST PROGRAMS</a>
                <button className="bg-yellow-400 text-white hover:bg-yellow-300 active:bg-slate-100 active:text-yellow-300 px-4 py-2 rounded-full">
                    CONTACT US
                </button>
            </div>

            <div className="md:hidden">
                <button
                    className="text-white p-2"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <img src={menu}/>
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-full  left-0 right-0 bg-gray-800 p-4 md:hidden">
                    <div className="flex flex-col space-y-4 text-white text-bsml2 font-medium font-['Kumbh Sans']">
                        <a href="#" className="hover:text-yellow-400">ABOUT US</a>
                        <a href="#" className="hover:text-yellow-400">OUR CAUSE</a>
                        <a href="#" className="hover:text-yellow-400">OUR PAST PROGRAMS</a>
                        <button className="bg-yellow-400 text-white hover:bg-yellow-300 active:bg-slate-100 active:text-yellow-300 px-4 py-2 rounded-full w-40 ">
                            CONTACT US
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}