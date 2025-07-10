import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {Download}from 'lucide-react';
import 'hamburgers/dist/hamburgers.min.css';

export default function Header({handleColor, showHeader=true}) {
      const [isActive, setIsActive] = useState(false);
      
      useEffect(()=>{
        if(isActive){
          document.body.classList.add('overflow-hidden');
        }else{
          document.body.classList.remove('overflow-hidden')
        }
      },[isActive])
    return (
        <>
         <header className={` ${showHeader ? 'translate-y-0' : '-translate-y-full'} flex items-center justify-even px-3  h-[72px] w-full fixed shadow-[0_12px_22px_0_rgba(0,0,0,0.08)] z-40 ${handleColor}`} >
            <div className="flex items-center justify-between w-full mx-auto lg:max-w-7xl">
            <nav className="flex space-x-5">
                <div className='hidden lg:flex gap-5'>
                    <Link to="/" className={`${handleColor === 'bg-accent' ? 'text-primary' : 'text-accent'} text-xl font-light hover:text-gray-500`}>Home</Link>
                    <Link to="/mission" className={`${handleColor === 'bg-accent' ? 'text-primary' : 'text-accent'} text-xl font-light hover:text-gray-500`}>Mission</Link>
                </div>
              <div className='flex justify-between items-center lg:hidden'>
               <div
                  className={`hamburger hamburger--squeeze transform scale-75 
                      ${isActive ? 'is-active' : ''} 
                      ${handleColor === 'bg-accent' ? 'hamburger-dark' : 'hamburger-light'}
                    `}                    
                    onClick={() => setIsActive(!isActive)}
                    >
                    <div className=" w-[45px] relative " >
                        <div className={`hamburger-inner ${handleColor === 'bg-accent' ? 'bg-primary' : 'bg-accent'} h-[2px]`} ></div>
                </div>
               </div>
              </div>
            </nav>
            <div className="flex items-center justify-center">
            <h1 className={`text-4xl font-normal font-heading md:text-5xl ${handleColor === 'bg-accent' ? 'text-primary' : 'text-accent'}`}>
              <Link to="/">Hora</Link>
              </h1>
            </div>
            <button className='lg:px-[33px]' >
            <a href="/mission" className="inline-flex text-xs p-2 items-center bg-secondary text-white md:p-3 rounded-full hover:bg-transparent hover:border hover:border-secondary hover:text-secondary transition-colors duration-300 ">
                Download
                <Download className='hidden ml-2 text-accent  hover:text-secondary  sm:flex' size={15}/>
            </a>
            </button>
            </div>
        </header>
        <div
        className={`fixed top-[72px] pt-8 left-0 w-full h-screen bg-primary/70 transition-all duration-500 ease-in-out z-30 flex flex-col items-center justify-start ${
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