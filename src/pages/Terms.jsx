import React, { useState,useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import ReactMarkdown from "react-markdown";

export default function Terms() {
    

    const [content, setContent] = useState("");
    useEffect (()=>{
        fetch('/termText/terms.md')
        .then(res => res.text())
        .then(text => setContent(text));
    },[])



    return (
        <>
        <Header handleColor={'bg-primary'}/>
        <div className="max-w-7xl mx-auto py-[72px] ">
            <div className='flex flex-col justify-center items-start pt-8 mx-8 md:mx-20 lg:mx-30'>
             <ReactMarkdown components={{
                    h1: (props) => (
                        <h1 className=" text-3xl md:text-3xl font-bold my-6" {...props} />
                        ),
                        h2: (props) => (
                        <h2 className=" text-lg md:text-2xl font-semibold my-4" {...props} />
                        ),
                        p: (props) => (
                        <p className="font-secondary text-base md:text-lg leading-relaxed my-2" {...props} />
                        ),
                        li: (props) => (
                        <li className="font-secondary list-disc ml-5 md:ml-8 text-base md:text-lg my-1" {...props} />
                        ),
                        strong: (props) => (
                        <strong className="font-secondary font-semibold" {...props} />
                        ),
                        em: (props) => (
                        <em className="font-secondary italic" {...props} />
                        ),
                    }}>{content}</ReactMarkdown>
            </div>
        </div>
         <Footer/>
        </>
    )
}