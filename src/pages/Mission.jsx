import { useEffect, useState } from "react";
import Header from "./components/Header";
import Logo_01 from './components/animated/Logo_01.jsx';
import Logo_02 from './components/animated/Logo_02.jsx';
import Logo_03 from './components/animated/Logo_03.jsx';


export default function Mission() {
   const [activeAnimated, setActiveAnimated] = useState(false);
       useEffect(()=>{
           const handleScroll =()=>{
                console.log("scrollY:", window.scrollY);
               if (window.scrollY > 1000) {
                 console.log("Trigger animation!");
                 setActiveAnimated(true);
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
      <Header/>
      <main className="bg-accent/30">
        <div className="max-w-7xl mx-auto pt-[72px] ">
          <div className="relative w-full h-100 lg:hidden">
          <img src="/img/banner_1.jpg" alt="" className="object-cover w-full h-full"/>
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
          </div>
          <div className="flex flex-col justify-center items-center absolute top-[400px] z-40 mx-8 lg:max-w-7xl lg:gap-4 lg:static" >
             <h1 className="text-primary font-heading text-4xl text-center md:text-7xl  lg:text-left lg:pt-[20px] font-semibold ">Unlocking the latent value of time.</h1>
             <p className=" text-primary  text-lg text-center pt-4 md:text-xl  lg:text-left lg:font-light ">A smarter way to delegate life’s small burdens, or turn spare time into fair earnings.</p>
            <img src="/img/banner_1.jpg" alt="" className="hidden rounded-2xl w-full h-full lg:flex"/>
          </div>
          {/*value*/}
        <div className="grid grid-rows-2 gap-4 max-w-7xl pb-[64px] mx-8 pt-[200px]  md:mx-8 ">
          <div className="py-4">
          <h4 className="text-base text-secondary lg:text-xl pb-2">Hora Today</h4>
          <p className="text-primary font-heading text-2xl font-semibold  lg:text-5xl md:w-3/4">We connect people in simple, meaningful ways, giving you more time for what truly matters.</p>
          </div>
          <div className="py-4 flex" >
            <p className="text-primary font-heading text-2xl font-semibold text-right  md:ml-auto md:w-3/4 lg:text-5xl lg:pt-10 ">Whether you’re looking to save time by offloading small tasks, or earn by putting your time to use, we make it effortless. </p>
          </div>
        </div>
        </div>
        {/*our value*/}
        <div className="bg-primary w-full py-[40px]   ">
          <div className="max-w-7xl mx-8 py-8 md:mx-auto">
            <h4 className="text-base text-secondary py-2 md:pl-8 lg:text-xl ">Our Values</h4>
            <p className="text-5xl text-accent font-heading  md:w-4/5  w-full  md:mx-auto lg:w-1/2 lg:mx-8">Protecting what matters most: your time.</p>
            <p className="text-lg text-accent pt-[32px]  md:w-4/5 md:mx-auto lg:w-1/2 lg:mx-8">We never want to waste time, but time never slows down for us.<br/>
            What do we really value in life?
            Meaningful work, genuine connections, and fair rewards.<br/>
            Extra time to pursue these — that’s priceless.</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left mx-4 pt-[72px]">  
                        <div className="flex flex-col items-start justify-center py-8  md:items-center lg:items-start  ">
                         <div className='pb-4  -ml-22 md:ml-0 '>
                          <Logo_01 activeAnimated={activeAnimated} className=""/>
                         </div>
                          <div className="flex flex-col items-start pt-2 md:items-center lg:items-start ">
                            <h3 className="text-3xl font-semibold text-accent pb-4 font-heading md:text-center lg:text-left">
                              Time
                            </h3>
                            <p className="text-xl text-accent max-w-xl md:text-center lg:text-left">
                              We simplify daily complexities so you can dedicate your time to what truly matters — whether that’s business growth, personal goals, or simply having more breathing room in life.
                            </p>
                          </div>
                        </div>
              
                        <div className="flex flex-col items-start justify-center py-8 md:items-center lg:items-start ">
                          <div className='pb-4 -ml-22 md:ml-0'>
                          <Logo_02 activeAnimated={activeAnimated} />
                          </div>
                          <div className="flex flex-col items-start  pt-2 md:items-center lg:items-start md:text-center lg:text-left ">
                            <h3 className="text-3xl font-semibold text-accent pb-4 font-heading md:text-center lg:text-left">
                              Human
                            </h3>
                            <p className="text-lg text-accent max-w-xl md:text-center lg:text-left">
                              Every interaction on Hora is built on trust, transparency, and respect.
                              We value people first, ensuring that both requesters and supporters experience genuine, human-centered connections.
                            </p>
                          </div>
                        </div>
              
                        <div className="flex flex-col items-start justify-center py-8 pb-[72px] md:items-center lg:items-start ">
                          <div className='pb-4 -ml-23 md:ml-0 lg:"w-32" '>
                          <Logo_03 activeAnimated={activeAnimated}/>
                          </div>
                          <div className="flex flex-col items-start pt-2 justify-center md:items-center lg:items-start ">
                            <h3 className="text-3xl font-semibold text-accent pb-4 font-heading md:text-center lg:text-left">
                              Money
                            </h3>
                            <p className="text-lg text-accent max-w-xl">
                              By turning spare time into opportunity, Hora creates a fair system where anyone can earn — and where clients pay only for precisely the time they need, nothing more.
                            </p>
                          </div>
                        </div>
              
            </div>
          </div>
        </div>
        {/**/}
          <div className="max-w-7xl mx-auto relative h-full">
              <div className="flex justify-between ">
                  <div
                    className="h-full w-full overflow-hidden rounded transition-opacity duration-700"
                  >
                    <img
                      src="/img/mission_2.JPG"
                      alt=""
                      className="w-full h-[300px] md:h-[600px] object-cover lg:rounded-2xl lg:w-[700px] lg:absolute lg:top-[-80px] lg:right-0 "
                    />
                  </div>
                </div>
                <div className="py-[108px] mx-4">
                  <h4 className="text-base text-secondary  md:pl-8 lg:text-xl ">Our Pricepile </h4>
                  <p className="text-3xl text-primary font-heading font-semibold md:text-5xl md:w-4/5 md:mx-auto lg:w-1/3 lg:pt-8 lg:mx-8">We stand for respect, trust, fairness, and the empowerment of your time.</p>
                </div>
          </div>
      </main>
    </>
    
  );
}