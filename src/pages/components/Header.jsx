import React, { useEffect, useState } from 'react';

export default function Header() {
    const [handleColor, sethandleColor] = useState('bg-primary/20');

    useEffect(()=>{
        const handleScroll =()=>{
            const y = window.scrollY;
            console.log(y);
           if (y > 3347) {
            sethandleColor('bg-primary');
            } else if (y > 2148) {
            sethandleColor('bg-accent');
            } else if (y > 1410) {
            sethandleColor('bg-primary');
            } else if (y > 772) {
            sethandleColor('bg-accent');
            } else {
            sethandleColor('bg-accent/20');
            }
        }
         window.addEventListener('scroll', handleScroll);
         return () => window.removeEventListener('scroll', handleScroll);
    },[])

    return (
        <>
         <header className={`flex items-center justify-between py-4 px-[50px] h-[72px] w-full fixed shadow-[0_12px_22px_0_rgba(0,0,0,0.08)] z-40 ${handleColor}`} >
            <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
            <nav className="flex space-x-5">
            <a href="/" className={`${handleColor === 'bg-accent' ? 'text-primary' : 'text-accent'} text-xl font-light hover:text-gray-500`}>Home</a>
            <a href="/mission" className={`${handleColor === 'bg-accent' ? 'text-primary' : 'text-accent'} text-xl font-light hover:text-gray-500`}>Mission</a>
            </nav>
            <div className="flex items-center">
            <h1 className={`text-5xl font-normal font-heading ${handleColor=== 'bg-accent' ? 'text-primary' : 'text-accent'}`}>Hora</h1>
            </div>
            <button>
            <a href="/mission" className="px-5 py-2 bg-secondary text-white rounded-full hover:bg-transparent hover:border-secondary hover:border-1 hover:text-secondary transition-colors duration-300">
                Download
            </a>
            </button>
            </div>

        </header>
        </>
    )
}