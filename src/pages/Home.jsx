import React, {useEffect, useRef, useState } from 'react';
import TestimonialsSlider from './components/TestimonialsSlider.jsx';
import Logo_01 from './components/animated/Logo_01.jsx';
import Logo_02 from './components/animated/Logo_02.jsx';
import Logo_03 from './components/animated/Logo_03.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Stopwatch from '../pages/components/Stopwatch.jsx';
import Iphone_01 from './components/Iphone_01.jsx';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home({ secondsElapsed } ) {
  const [handleColor, sethandleColor] = useState('bg-accent');
  const [activeAnimated, setActiveAnimated] = useState(false);
  const [isSupporter, setIsSupporter] = useState(false);

  const [flipped, setFlipped] = useState(false);


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
  
  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(titleRef.current, { opacity: 0, y: 80, skewY: 9 });
  gsap.set(stopwatchRef.current, { opacity: 0, x: -100 });

  const tl = gsap.timeline();
  tl.to(titleRef.current, {
    opacity: 1,
    y: 0,
    skewY: 0,
    duration: 1.5,
    ease: "back.out"
  })
  .to(stopwatchRef.current, {
    opacity: 1,
    x: 0,
    duration: 1
  }, "-=0.5");

  gsap.from(h2Ref.current, {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: h2Ref.current,
      start: "top 90%",
      toggleActions: "play none none none",
    }
  });

  gsap.from([...paragraphs.current], {
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: h2Ref.current,
      start: "top 90%",
      toggleActions: "play none none none",
    }
  });

  return () => {
    tl.kill();
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
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

  const titleRef = useRef(null)
  const stopwatchRef = useRef(null)
  const pinSectionRef = useRef(null)
  const h2Ref = useRef(null)
  const paragraphs = useRef([])

useEffect(() => {
  paragraphs.current = paragraphs.current.slice(0, 2)
  gsap.set(titleRef.current, { opacity: 0, y: 80, skewY: 9 })
  gsap.set(stopwatchRef.current, { opacity: 0, x: -100 })

  const tl = gsap.timeline()
  tl.to(titleRef.current, {
    opacity: 1,
    y: 0,
    skewY: 0,
    duration: 1.5,
    ease: "back.out"
  })
  .to(stopwatchRef.current, {
    opacity: 1,
    x: 0,
    duration: 1
  }, "-=0.5")

   // h2 單獨 scrollTrigger
  gsap.from(h2Ref.current, {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: h2Ref.current,
      start: "top bottom", // 保證一進 viewport 就觸發
     // 加上 debug markers 看位置
    }
  })

  // paragraphs 用 batch 處理
  ScrollTrigger.batch(paragraphs.current, {
    onEnter: batch => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        overwrite: true
      })
    },
    start: "top 90%"
  })

  return () => {
    tl.kill()
    ScrollTrigger.getAll()?.forEach(trigger => trigger.kill())
  }
}, [])

useEffect(() => {
  AOS.init({
    duration: 1200,
  });
}, []);


  return (
  <>
 <Header handleColor={handleColor} secondsElapsed={secondsElapsed} flipped={flipped}/>
  <main className="flex max-x-7xl flex-col items-center justify-center min-h-screen bg-accent " ref={pinSectionRef}>
    {/*banner*/}
    {/* <div className="bg-[url(/img/banner_3.JPG)] bg-cover bg-[position:80%_center] w-full min-h-[844px] md:bg-center"> */}
      <div className="max-w-7xl mx-auto min-h-screen px-6 pb-10 pt-[350px]">  
          <div className='text-center flex flex-col justify-center items-center  md:items-start md:justify-end md:text-left'>
          <h1 className="text-6xl font-bold text-primary leading-tight mb-6 hero" ref={titleRef}>Your Hour, Your Way</h1>
          <div ref={stopwatchRef} style={{ opacity: 0, transform: "translateX(-100px)" }}>
          <Stopwatch  secondsElapsed={secondsElapsed} />
          </div>
          </div>
    </div>

    {/* Section 1 */}
    <div className="py-[100px] pt-10 w-full px-2 flex flex-col items-center justify-center md:py-[150px]">
      <h2 className=" text-5xl text-left font-semibold mb-4 text-primary p-4 md:text-6xl " data-aos="fade-up">What is Hora?</h2>
      <div className="text-lg mb-8 max-w-2xl text-left space-y-3 mx-8 ">
        <p className=" text-primary font-secondary " ref={el => paragraphs.current[0] = el}>Life’s busy. <br/>
          Get your time back. <br/>
          
          From errands to quiet company — it’s handled.</p>

        <p  className=" text-primary  font-secondary " ref={el => paragraphs.current[1] = el}>Your day runs lighter.
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
    <div className="py-[90px] w-full mx-auto flex flex-col items-center justify-center bg-primary">
      <div className="flex flex-col items-start justify-center px-4 w-full md:items-center lg:items-start lg:px-0 max-w-7xl">
        <div className="pb-[64px] mx-4  pt-8"> 
          <h2 className="text-4xl text-accent md:text-6xl  " data-aos="fade-up">Why Hora?</h2>
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
    <div className=" bg-accent w-full mx-auto flex flex-col items-center justify-center max-w-7xl py-[90px]">
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
    <div className= {`w-full mx-auto pt-8 flex-col items-center justify-center lg:flex-row-reverse lg:py-4 ${isSupporter ? "hidden" : "flex"}`}>
      <div className=" max-w-3xl mx-auto px-6 pb-4 flex flex-col items-center justify-center">
        <h2 className="text-4xl  text-primary pb-10">How to Request Support</h2>
        {/* Step 1 */}
        <div className="flex flex-col w-full items-start pb-12">
          <h2 className="text-[80px] font-semibold text-primary leading-none mb-4"  >01</h2>
          <h3 className="text-2xl  font-semibold text-primary mb-4"> Create your profile</h3>
          <p className="text-lg text-primary font-secondary max-w-lg">
            Join our verified network. Trust starts here.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col w-full items-start pb-12">
          <h2 className="text-[80px] font-semibold text-primary leading-none mb-4">02</h2>
          <h3 className="text-2xl  font-semibold text-primary mb-4">Post your request</h3>
          <p className="text-lg text-primary font-secondary max-w-lg ">
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
      {/* <div className="bg-[url(/img/requester_1.png)] w-full h-[300px] bg-cover bg-top md:w-1/2 md:h-[700px] lg:m-8 lg:h-lvh transition-transform duration-500 hover:scale-105"/> */}
      <div className='w-full md:w-1/2' ><Iphone_01/></div>
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
      {/* <div className=" bg-[url(/img/supporter_1.png)] w-full h-[400px] bg-cover bg-top md:h-[700px] lg:h-lvh lg:m-8 transition-transform duration-500 hover:scale-105 " /> */}
      <div className='w-full md:w-1/2'><img src="/img/Group1.png" alt="" className='w-[300px]'/></div>
    </div>
    </div>
    {/*team*/}
    <div className='bg-primary w-full py-[90px]'>
      <div className='max-w-7xl mx-auto px-10'>
      <div class="flex items-center gap-4 px-30">
          <div class="flex-1 h-px bg-gray-300 "></div>
          <div class="text-base font-semibold tracking-widest uppercase text-gray-600" data-aos="fade-up">
            Team
          </div>
          <div class="flex-1 h-px bg-gray-300"></div>
        </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-30 p-6">
      {/* Founder 1 */}
      <div className="flex flex-col items-center">
        <img
          src="/img/founder1.JPG"
          alt="Anna"
          className="w-32 h-32 rounded-full object-cover transition-transform duration-300 hover:scale-110 mb-4  filter grayscale"
        />
        <h3 className="text-sm  text-accent/50 ">co-Founder</h3>
        <h3 className="text-xl text-accent" data-aos="fade-left" >Liang you</h3>
        <div className="flex gap-2 mt-2">
          <a href="https://www.linkedin.com/in/liang-you-tao-658705106/" target="_blank" rel="noopener noreferrer" className='text-accent/30 text-sm'>
            Linkedin
          </a>
          <a href="https://github.com/AURATAO" target="_blank" rel="noopener noreferrer" className='text-accent/30  text-sm'>
            github
          </a>
        </div>
      </div>

      {/* Founder 2 */}
      <div className="flex flex-col items-center">
        <img
          src="/img/founder2.jpg"
          alt="Leo"
          className="w-32 h-32 rounded-full object-cover object-left-bottom mb-4 transition-transform duration-300 hover:scale-110  filter grayscale"
        />
         <h3 className="text-sm  text-accent/50 ">co-Founder</h3>
        <h3 className="text-xl text-accent" data-aos="fade-left">Daniele</h3>
        <div className="flex gap-4 mt-2">
          <a href="https://linkedin.com/in/leo" target="_blank" rel="noopener noreferrer" className='text-accent/30  text-sm'>
            Linkedin
          </a>
        </div>
      </div>
      </div>
      </div>
    </div>
    {/* Section 3 未來補上 */}
    {/* <div className=' w-full mx-auto flex flex-col items-center justify-center bg-neutralbg'>
    <div className="py-[32px] w-full mx-auto max-w-7xl flex flex-wrap items-center justify-center gap-x-32 ">
      <img src="/img/logo/Forbes.png" alt="Forbes" className="w-24 opacity-60"/>
      <img src="/img/logo/Stripe.png" alt="Stripe" className="w-24 opacity-60"/>
      <img src="/img/logo/Visa.png" alt="Visa" className="w-24 opacity-60"/>
      <img src="/img/logo/Vogue.png" alt="Vogue" className="w-24 opacity-60"/>
      <img src="/img/logo/Forbes.png" alt="Forbes" className="w-24 opacity-60"/>
    </div>
    </div> */}
    {/* Section 4 未來補上*/}
    {/* <div className='w-full mx-auto flex flex-col items-center justify-center bg-primary py-[32px]'>
    <div className="w-full mx-auto max-w-7xl flex flex-col items-start justify-center gap-24">
    <p className='text-secondary text-xl pt-8 mx-3'>What our users say</p>
    <TestimonialsSlider />
  </div>
    </div> */}
    {/* Section 5 */}
    <div className='w-full h-[300px] mx-auto flex flex-col items-center justify-center bg-[url(/img/section_5_1.JPG)] bg-cover bg-center  bg-no-repeat py-[64px]'/>

    {/* Footer */}
    <Footer />
  </main>
    
  </>
  );
}