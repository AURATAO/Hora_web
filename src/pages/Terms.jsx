import React from 'react';
import Header from './components/Header';

export default function Terms() {
    return (
        <>
        <Header />
        <div className="max-w-7xl mx-8 pt-[72px] ">
            <div className='flex flex-col justify-center items-start pt-8'>
            <h1 className="text-primary font-heading text-4xl  font-semibold  lg:text-5xl ">Terms</h1>
            <p className=" text-primary font-semibold  text-lg text-center pt-4 md:text-xl  lg:text-left lg:font-light">TERMS OF USE AGREEMENT</p>
            <p className=" text-primary  text-base text-left  md:text-xl  lg:text-left lg:font-light">Effective on May 14, 2024; click here to download a PDF</p>
            </div>
        </div>
        </>
    )
}