import React, { useState } from 'react';
import {Download}from 'lucide-react';
import 'hamburgers/dist/hamburgers.min.css';

export default function Header({handleColor}) {
      const [isActive, setIsActive] = useState(false);
    
    
    return (
        <>
         <header className={`flex items-center justify-even px-3 h-[72px] w-full fixed shadow-[0_12px_22px_0_rgba(0,0,0,0.08)] z-40 ${handleColor}`} >
            <div className="flex items-center justify-between w-full mx-auto lg:max-w-7xl">
            <nav className="flex space-x-5">
                <div className='hidden lg:flex gap-5'>
                    <a href="/" className={`${handleColor === 'bg-accent' ? 'text-primary' : 'text-accent'} text-xl font-light hover:text-gray-500`}>Home</a>
                    <a href="/mission" className={`${handleColor === 'bg-accent' ? 'text-primary' : 'text-accent'} text-xl font-light hover:text-gray-500`}>Mission</a>
                </div>
              <div className='lg:hidden'>
               <div
                    className={`hamburger hamburger--squeeze ${isActive ? 'is-active' : ''} `}
                    onClick={() => setIsActive(!isActive)}
                    >
                    <div className="hamburger-box w-[20px]  " >
                        <div className="hamburger-inner" ></div>
                </div>
               </div>
              </div>
            </nav>
            <div className="flex items-center justify-center">
            <h1 className={`text-3xl font-normal font-heading md:text-5xl ${handleColor === 'bg-accent' ? 'text-primary' : 'text-accent'}`}>Hora</h1>
            </div>
            <button >
            <a href="/mission" className="inline-flex text-sm p-2 items-center bg-secondary text-white md:p-3 rounded-full hover:bg-transparent hover:border hover:border-secondary hover:text-secondary transition-colors duration-300">
                Download
                <Download className='hidden ml-2 text-accent  hover:text-secondary  sm:flex' size={15}/>
            </a>
            </button>
            </div>
        </header>
        <div
        className={`fixed top-[80px] left-0 w-full h-screen bg-primary/70 transition-all duration-500 ease-in-out z-30 flex flex-col items-center justify-start ${
          isActive ? "opacity-100" : "opacity-0 pointer-events-none"
        } lg:hidden` }
      >
        <a
          href="/"
          className="text-2xl text-center text-accent mb-6 border-b border-accent/20 w-2/4 md:w-3/4"
          
        >
          Home
        </a>
        <a
          href="/mission"
          className="text-2xl text-center text-accent mb-6 border-b border-accent/20 w-2/4 md:w-3/4"
         
        >
          Mission
        </a>
        <a
          href="/about"
          className="text-2xl text-center text-accent mb-6 border-b border-accent/20 w-2/4 md:w-3/4"
          
        >
          About
        </a>
      </div>
        </>
    )
}