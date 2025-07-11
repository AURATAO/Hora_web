import React, { useEffect, useState } from 'react';
import TestimonialsSlider from './components/TestimonialsSlider.jsx';
import Logo_01 from './components/animated/Logo_01.jsx';
import Logo_02 from './components/animated/Logo_02.jsx';
import Logo_03 from './components/animated/Logo_03.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Stopwatch from '../pages/components/Stopwatch.jsx';



export default function Home() {
const [handleColor, sethandleColor] = useState('bg-accent');
const [activeAnimated, setActiveAnimated] = useState(false);
const [isSupporter, setIsSupporter] = useState(false);
const [secondsElapsed, setSecondsElapsed] = useState(0);
 const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsElapsed(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
    }, []);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setFlipped(!entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      const hero = document.querySelector('.hero');
      if (hero) observer.observe(hero);
      return () => observer.disconnect();
    }, []);

    useEffect(()=>{
        const handleScroll =()=>{
            const y = window.scrollY;
            const width = window.innerWidth;
             console.log("scrollY:", window.scrollY);
            if (window.scrollY > 1000) {
              console.log("Trigger animation!");
              setActiveAnimated(true);
            }

           //setHandleColor 
           if(width < 1024 ){
            if(y > 4136){
              sethandleColor('bg-primary');
            }else if(y>3113){
              sethandleColor('bg-accent');
            }else if(y > 1496 ){
              sethandleColor('bg-primary');
            }else if(y > 774){
              sethandleColor('bg-accent');
            } else {
              sethandleColor('bg-accent');
            }

           } else {

             if (y > 3347) {
              sethandleColor('bg-primary');
              } else if (y > 2148) {
              sethandleColor('bg-accent');
              } else if (y > 1410) {
              sethandleColor('bg-primary');
              } else if (y > 772 ) {
              sethandleColor('bg-accent');
              } else {
              sethandleColor('bg-accent');
              }
           }
        }
         window.addEventListener('scroll', handleScroll);
         return () => window.removeEventListener('scroll', handleScroll);
    },[])

     useEffect(() => {
    console.log("activeAnimated changed:", activeAnimated);
  }, [activeAnimated]);


  return (
  <>
 <Header handleColor={handleColor} secondsElapsed={secondsElapsed} flipped={flipped}/>
  <main className="flex max-x-7xl flex-col items-center justify-center min-h-screen bg-accent ">
    {/*banner*/}
    {/* <div className="bg-[url(/img/banner_3.JPG)] bg-cover bg-[position:80%_center] w-full min-h-[844px] md:bg-center"> */}
      <div className="max-w-7xl mx-auto min-h-screen px-6 pb-10 py-[40px] ">  
          <div className='text-center flex flex-col justify-center items-center pt-[400px] md:items-start md:justify-end md:text-left'>
          <h1 className="text-6xl font-bold text-primary leading-tight mb-6 hero">Your Hour, Your Way</h1>
          <Stopwatch  secondsElapsed={secondsElapsed}/>
          </div>
    </div>
    {/* Section 1 */}
    <div className="py-[90px] w-full px-2 flex flex-col items-center justify-center md:py-[150px]">
      <h2 className=" text-5xl text-left font-semibold mb-4 text-primary p-4 md:text-6xl">What is Hora?</h2>
      <div className="text-lg mb-8 max-w-2xl text-left space-y-3 mx-8 ">
        <p className=" text-primary font-secondary ">Life’s busy. <br/>
          Get your time back. <br/>
          
          From errands to quiet company — it’s handled.</p>

        <p  className=" text-primary  font-secondary ">Your day runs lighter.
          Your mind stays sharp. <br/>
          Life doesn’t slow down. Neither do you. 
          </p>

      </div>
      <button className="py-9 font-secondary">
      <a href="/mission" className="button-tech font-secondary">
        How we do it
      </a>
      </button>
    </div>
    <div className="py-[32px] w-full mx-auto flex flex-col items-center justify-center bg-primary">
      <div className="flex flex-col items-start justify-center px-4 w-full md:items-center lg:items-start lg:px-0 max-w-7xl">
        <div className="pb-[64px] pt-8"> 
          <h2 className="text-4xl text-accent md:text-6xl">Why Hora?</h2>
          <p className="text-lg text-accent max-w-2xl pt-4 font-secondary">
            Your time, your needs — matched with trust and ease.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-[32px] w-full pt-[32px] pb-2 md:items-center lg:items-start lg:px-4 max-w-7xl">
          <div className="flex flex-col items-start justify-between py-4 md:items-center lg:items-start ">
           <div className='pb-4'>
            <Logo_01 activeAnimated={activeAnimated}/>
           </div>
            <div className="flex flex-col items-start pt-2 md:items-center lg:items-start ">
              <h3 className="text-3xl font-semibold text-accent pb-4  md:text-center lg:text-left">
                Safety is standard.
              </h3>
              <p className="text-lg font-secondary text-accent max-w-xl md:text-center lg:text-left">
              All supporters and requesters complete secure ID verification and background checks. Hire or earn with confidence. </p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between py-4 md:items-center lg:items-start ">
            <div className='pb-4'>
            <Logo_02 activeAnimated ={activeAnimated}/>
            </div>
            <div className="flex flex-col items-start pt-2 md:items-center lg:items-start md:text-center lg:text-left ">
              <h3 className="text-3xl font-semibold text-accent pb-4  md:text-center lg:text-left">
                Payments, safeguarded.
              </h3>
              <p className="text-lg  font-secondary text-accent max-w-xl md:text-center lg:text-left">
               Transactions run on Stripe. Funds stay protected, always.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between py-4 md:items-center lg:items-start ">
            <div className='pb-4 '>
            <Logo_03 activeAnimated ={activeAnimated}/>
            </div>
            <div className="flex flex-col items-start justify-center pt-2 md:items-center lg:items-start ">
              <h3 className="text-3xl font-semibold text-accent pb-4  md:text-center lg:text-left">
                Only pay for real time.
              </h3>
              <p className="text-lg font-secondary text-accent max-w-xl">
                We charge by the minute — no rounding. You pay precisely for time used.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Section 2 */}
    <div className=" bg-accent w-full mx-auto flex flex-col items-center justify-center max-w-7xl">
      <label className="label flex self-end pt-5 mx-5" >
        <div className="toggle" >
          <input className="toggle-state" type="checkbox" name="check" value="check" checked={isSupporter}  onChange={() => setIsSupporter(!isSupporter)}/>
           <div className="labels" >
              <span className="icon-left text-sm text-primary/30">Requester</span>
              <span className="icon-right text-sm text-primary/30">Supporter</span>
            </div>
          <div className="indicator">
          </div>
        </div>
      </label>
    {/* Section requester */}
    <div className= {`w-full mx-auto py-8 flex-col items-center justify-center lg:flex-row-reverse lg:py-4 ${isSupporter ? "hidden" : "flex"}`}>
      <div className=" max-w-3xl mx-auto px-6 pb-4 flex flex-col items-center justify-center">
        <h2 className="text-4xl  text-primary pb-10">How to Request Support</h2>
        {/* Step 1 */}
        <div className="flex flex-col w-full items-start pb-12">
          <h2 className="text-[80px] font-semibold text-primary leading-none mb-4">01</h2>
          <h3 className="text-2xl  font-semibold text-primary mb-4"> Create your profile</h3>
          <p className="text-lg text-primary font-secondary max-w-lg">
            Join our verified network. Trust starts here.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col w-full items-start lg:items-end pb-12">
          <h2 className="text-[80px] font-semibold text-primary leading-none mb-4">02</h2>
          <h3 className="text-2xl  font-semibold text-primary mb-4">Post your request</h3>
          <p className="text-lg text-primary font-secondary max-w-lg lg:text-right">
            Define exactly what you need. We match you with top supporters.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col w-full items-start pb-8">
          <h2 className="text-[80px] font-semibold text-primary leading-none mb-4">03</h2>
          <h3 className="text-2xl  font-semibold text-primary mb-4">Review & pay</h3>
          <p className="text-lg text-primary font-secondary max-w-lg">
            Approve when satisfied. Pay seamlessly.
          </p>
        </div>
      </div>
      <div className="bg-[url(/img/requester_1.png)] w-full h-[400px] bg-cover bg-top md:w-1/2 md:h-[700px] lg:m-8 lg:h-lvh transition-transform duration-500 hover:scale-105"/>

    </div>
    {/* Section supporter */}
    <div className={`w-full mx-auto pt-4 flex-col items-center justify-center lg:flex-row lg:p-4 ${isSupporter ? "flex" : "hidden"}`}>
      <div className="w-full max-w-7xl mx-auto px-6 pb-4 flex flex-col items-center justify-center ">
        <h2 className="text-4xl text-primary pb-10">How to Become a Supporter</h2>
        {/* Step 1 */}
        <div className="flex flex-col items-start pb-12">
          <h2 className="text-[80px] font-semibold text-primary leading-none mb-4">01</h2>
          <h3 className="text-2xl   font-semibold text-primary mb-4">Verify your profile</h3>
          <p className="text-lg text-primary font-secondary max-w-lg">
          Register and complete ID checks. Join a network built on trust and quality.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-start pb-12">
          <h2 className="text-[80px] font-semibold text-primary leading-none mb-4">02</h2>
          <h3 className="text-2xl  font-semibold text-primary mb-4">Select your tasks</h3>
          <p className="text-lg text-primary font-secondary max-w-lg ">
            Browse requests and choose engagements aligned with your time and expertise.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-start pb-8">
          <h2 className="text-[80px] font-semibold text-primary leading-none mb-4">03</h2>
          <h3 className="text-2xl font-semibold text-primary mb-4">Deliver and Earn</h3>
          <p className="text-lg text-primary  font-secondary max-w-lg">
            Complete tasks confidently. Turn free hours into secure earnings. 
          </p>
        </div>
      </div>
      <div className=" bg-[url(/img/supporter_1.png)] w-full h-[400px] bg-cover bg-top md:h-[700px] lg:h-lvh lg:m-8 transition-transform duration-500 hover:scale-105 " />
    </div>
    </div>
    {/* Section 3 */}
    <div className=' w-full mx-auto flex flex-col items-center justify-center bg-neutralbg'>
    <div className="py-[32px] w-full mx-auto max-w-7xl flex flex-wrap items-center justify-center gap-x-32 ">
      <img src="/img/logo/Forbes.png" alt="Forbes" className="w-24 opacity-60"/>
      <img src="/img/logo/Stripe.png" alt="Stripe" className="w-24 opacity-60"/>
      <img src="/img/logo/Visa.png" alt="Visa" className="w-24 opacity-60"/>
      <img src="/img/logo/Vogue.png" alt="Vogue" className="w-24 opacity-60"/>
      <img src="/img/logo/Forbes.png" alt="Forbes" className="w-24 opacity-60"/>
    </div>
    </div>
    {/* Section 4 */}
    <div className='w-full mx-auto flex flex-col items-center justify-center bg-primary py-[32px]'>
    <div className="w-full mx-auto max-w-7xl flex flex-col items-start justify-center gap-24">
    <p className='text-secondary text-xl pt-8 mx-3'>What our users say</p>
    <TestimonialsSlider />
  </div>
    </div>
    {/* Section 5 */}
    <div className='w-full h-[300px] mx-auto flex flex-col items-center justify-center bg-[url(/img/section_5_1.JPG)] bg-cover bg-center  bg-no-repeat py-[64px]'/>

    {/* Footer */}
    <Footer />
  </main>
    
  </>
  );
}