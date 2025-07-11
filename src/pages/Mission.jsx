import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx"
import Logo_01 from './components/animated/Logo_01.jsx';
import Logo_02 from './components/animated/Logo_02.jsx';
import Logo_03 from './components/animated/Logo_03.jsx';
import { TECollapse } from "tw-elements-react";


export default function Mission() {
   const lastScrollY = useRef(0);
   const [showHeader, setShowHeader] = useState(true);
   const [handleColor, setHandleColor] = useState('bg-primary');
   const [activeAnimated, setActiveAnimated] = useState(false);
   const timeoutId = useRef(null);


   useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      if (y <= 0) {
        // 回到頂部，永遠顯示
        setShowHeader(true);
      } else if(y > lastScrollY.current || y < lastScrollY.current) {
          // 向下滾動，隱藏
          setShowHeader(false);
      } 

      // 清掉上一次的定時器
      clearTimeout(timeoutId.current);

      // 停止滾動 200ms 後顯示
      timeoutId.current = setTimeout(() => {
        setShowHeader(true);
      }, 200);

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId.current);
    };
  }, []);

  useEffect(()=>{
           const handleScroll =()=>{
            const y = window.scrollY;
            const width = window.innerWidth;
                console.log("scrollY:", y);
               if (y> 1630) {
                 console.log("Trigger animation!");
                 setActiveAnimated(true);
               }

                //setHandleColor 
             if (width < 1024) {
              // 手機
              if(y > 4360){
                setHandleColor('bg-primary');
              } else if (y > 3660) {
                setHandleColor('bg-accent');
              } else if (y > 331){
                setHandleColor('bg-primary');
              }else {
                setHandleColor('bg-accent/40');
              }
            } else {
              // 桌機
              if(y > 3615 ){
                setHandleColor('bg-primary')
              } else if (y > 2581) {
                setHandleColor('bg-accent');
              } else if (y > 1596) {
                setHandleColor('bg-primary');
              } else {
                setHandleColor('bg-accent');
              }
            }
           }
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
       },[])

  useEffect(() => {
       console.log("activeAnimated changed:", activeAnimated);
     }, [activeAnimated]);

  useEffect(() => {
       console.log("activeAnimated changed:", activeAnimated);
     }, [activeAnimated]);

     const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  }

  return (
    <>
      <Header showHeader={showHeader} handleColor={handleColor}  />
      <main className="bg-accent/30 md:pt-[72px]">
        <div className="max-w-7xl mx-auto ">
          <div className="relative w-full h-100 lg:hidden">
          <img src="/img/banner_1.jpg" alt="" className="object-cover w-full h-full"/>
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
          </div>
          <div className="flex flex-col justify-center items-center absolute top-[350px] mx-8 lg:max-w-7xl lg:gap-4 lg:static" >
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
                         <div className='pb-4  -ml-30 md:ml-0 '>
                          <Logo_01 activeAnimated={activeAnimated} />
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
                          <div className='pb-4 -ml-29 md:ml-0'>
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
                          <div className='pb-4 -ml-29 md:ml-0 '>
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
        {/*our principle*/}
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
                <div className="py-10 mx-8 lg:py-[108px] ">
                  <h4 className="text-base text-secondary  md:pl-8 lg:text-xl ">Our Principle </h4>
                  <p className="text-3xl text-primary font-heading font-semibold md:text-5xl md:w-4/5 md:mx-auto lg:w-1/3 lg:pt-8 lg:mx-8">We stand for respect, trust, fairness, and the empowerment of your time.</p>
                </div> 
          </div>
           <div className="relative w-full pb-10">
                  <div className="hidden pointer-events-none absolute right-0 top-0 bottom-0 w-90 bg-gradient-to-l from-white to-transparent z-10 lg:flex"></div>
                <div className="flex justify-start items-start max-w-7xl mx-auto snap-x overflow-x-auto space-x-8 px-4 md:px-[64px] md:pt-[64px] scroll-container ">
                  <div className="snap-center shrink-0 w-[200px] flex flex-col justify-center items-start md:w-[300px]">
                    <h1 className="text-secondary/70 text-5xl pb-2 ">01</h1>
                    <h2 className="text-primary text-3xl font-semibold">Respect for Time</h2>
                    <p className="text-primary text-lg py-8 text-left md:text-xl lg:text-2xl">We honor each person’s time — whether it’s our clients delegating tasks or supporters providing services. Time is the one asset we never get back.</p>
                  </div>
                  <div className="snap-center shrink-0 w-[200px]  flex flex-col justify-center items-start md:w-[300px]">
                    <h1 className="text-secondary/70 text-5xl pb-2">02</h1>
                    <h2 className="text-primary text-3xl font-semibold">Trust & Transparency</h2>
                    <p className="text-primary text-lg py-8 text-left md:text-xl lg:text-2xl">Every interaction on our platform is built on openness. We believe transparency fosters respect, safety, and genuine human connection.</p>
                  </div>
                  <div className="snap-center shrink-0 w-[200px]  flex flex-col justify-center items-start md:w-[300px]">
                    <h1 className="text-secondary/70 text-5xl pb-2 ">03</h1>
                    <h2 className="text-primary text-3xl font-semibold">Fairness & Value</h2>
                    <p className="text-primary text-lg py-8 text-left md:text-xl lg:text-2xl">We ensure fair compensation for supporters, and fair pricing for requesters. Everyone gets exactly what they need — and pays only for what they use.</p>
                  </div>
                    <div className="snap-center shrink-0 w-[200px]  flex flex-col justify-center items-start md:w-[300px]">
                     <h1 className="text-secondary/70 text-5xl pb-2">04</h1>
                    <h2 className="text-primary text-3xl font-semibold">Empowerment & Simplicity</h2>
                    <p className="text-primary text-lg py-8 text-left md:text-xl lg:text-2xl">We simplify complexity, empowering people to reclaim time for what truly matters, without friction or confusion.</p>
                  </div>
                </div>
              </div>
              {/* our difference */}
              <div className="bg-primary w-full py-10 ">
                <div className="max-w-7xl mx-auto">
                  <div className="mx-8" >
                      <h1 className="text-base text-secondary py-4 md:pl-8 lg:text-xl">Our Apporach</h1> 
                      <p className="text-5xl text-accent font-heading  md:w-4/5  w-full  md:mx-auto lg:w-1/2 lg:mx-8">The Hora Difference</p>
                     <div className="py-10 md:hidden">
                       <div id="accordionExample">
                        <div >
                          <h2 className="mb-0" id="headingOne">
                            <button
                              className={`font-semibold text-xl ${
                                activeElement === "element2" &&
                                `text-accent [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
                              } group relative flex w-full items-center rounded-none  bg-primary px-2 py-4 text-left text-base text-accent transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
                              type="button"
                              onClick={() => handleClick("element2")}
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Verified & Safe Community
                              <span
                                className={` ${
                                  activeElement === "element2"
                                    ? `rotate-[-180deg] -mr-1`
                                    : `rotate-0 fill-[#dfe8f0]`
                                } ml-auto h-5 w-5 shrink-0 fill-secondary transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                  />
                                </svg>
                              </span>
                            </button>
                          </h2>
                          <TECollapse
                            show={activeElement === "element2"}
                            className="!mt-0 !rounded-b-none !shadow-none text-accent"
                          >
                            <div className="px-5 py-4">
                              <strong>All users complete ID verification and background checks</strong> , so every connection happens in a secure, trusted environment.

                            </div>
                          </TECollapse>
                        </div>
                        <div>
                          <h2 className="mb-0" id="headingOne">
                            <button
                              className={`font-semibold text-xl ${
                                activeElement === "element1" &&
                                `text-accent [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
                              } group relative flex w-full items-center rounded-none  bg-primary px-2 py-4 text-left text-base text-accent transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
                              type="button"
                              onClick={() => handleClick("element1")}
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Fully Flexible Requests
                              <span
                                className={` ${
                                  activeElement === "element1"
                                    ? `rotate-[-180deg] -mr-1`
                                    : `rotate-0 fill-[#dfe8f0]`
                                } ml-auto h-5 w-5 shrink-0 fill-secondary transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                  />
                                </svg>
                              </span>
                            </button>
                          </h2>
                          <TECollapse
                            show={activeElement === "element1"}
                            className="!mt-0 !rounded-b-none !shadow-none text-accent"
                          >
                            <div className="px-5 py-4">
                               Post any kind of request — big or small — as long as it meets our community guidelines. <strong>We’re built to handle whatever support you need.</strong>

                            </div>
                          </TECollapse>
                        </div>
                         <div>
                          <h2 className="mb-0" id="headingOne">
                            <button
                              className={`font-semibold text-xl ${
                                activeElement === "element3" &&
                                `text-accent [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
                              } group relative flex w-full items-center rounded-none  bg-primary px-2 py-4 text-left text-base text-accent transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
                              type="button"
                              onClick={() => handleClick("element3")}
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Emotional Support
                              <span
                                className={` ${
                                  activeElement === "element3"
                                    ? `rotate-[-180deg] -mr-1`
                                    : `rotate-0 fill-[#dfe8f0]`
                                } ml-auto h-5 w-5 shrink-0 fill-secondary transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                  />
                                </svg>
                              </span>
                            </button>
                          </h2>
                          <TECollapse
                            show={activeElement === "element3"}
                            className="!mt-0 !rounded-b-none !shadow-none text-accent"
                          >
                            <div className="px-5 py-4">
                              <strong>We’re the first platform where you can seek genuine emotional support</strong>  — verified people to talk, walk, and build healthy connections with. 
                            </div>
                          </TECollapse>
                        </div>
                         <div>
                          <h2 className="mb-0" id="headingOne">
                            <button
                              className={`font-semibold text-xl ${
                                activeElement === "element4" &&
                                `text-accent [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
                              } group relative flex w-full items-center rounded-none  bg-primary px-2 py-4 text-left text-base text-accent transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
                              type="button"
                              onClick={() => handleClick("element4")}
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Every Minute Counts
                              <span
                                className={` ${
                                  activeElement === "element4"
                                    ? `rotate-[-180deg] -mr-1`
                                    : `rotate-0 fill-[#dfe8f0]`
                                } ml-auto h-5 w-5 shrink-0 fill-secondary transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                  />
                                </svg>
                              </span>
                            </button>
                          </h2>
                          <TECollapse
                            show={activeElement === "element4"}
                            className="!mt-0 !rounded-b-none !shadow-none text-accent"
                          >
                            <div className="px-5 py-4">
                            <strong>Only pay for the time you actually use.</strong>  If your session ends early, we automatically refund the unused minutes.
                            </div>
                          </TECollapse>
                        </div>
                         <div >
                          <h2 className="mb-0" id="headingOne">
                            <button
                              className={`font-semibold text-xl ${
                                activeElement === "element5" &&
                                `text-accent [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
                              } group relative flex w-full items-center rounded-none  bg-primary px-2 py-4 text-left text-base text-accent transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
                              type="button"
                              onClick={() => handleClick("element5")}
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Zero Cost to Earn
                              <span
                                className={` ${
                                  activeElement === "element5"
                                    ? `rotate-[-180deg] -mr-1`
                                    : `rotate-0 fill-[#dfe8f0]`
                                } ml-auto h-5 w-5 shrink-0 fill-secondary transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                  />
                                </svg>
                              </span>
                            </button>
                          </h2>
                          <TECollapse
                            show={activeElement === "element5"}
                            className="!mt-0 !rounded-b-none !shadow-none text-accent"
                          >
                            <div className="px-5 py-4">
                             <strong>Become a supporter without paying any upfront registration or verification fees.</strong> Join freely and start earning right away.
                            </div>
                          </TECollapse>
                        </div>
                         <div >
                          <h2 className="mb-0" id="headingOne">
                            <button
                              className={`font-semibold text-xl ${
                                activeElement === "element6" &&
                                `text-accent [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
                              } group relative flex w-full items-center rounded-none  bg-primary px-2 py-4 text-left text-base text-accent transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
                              type="button"
                              onClick={() => handleClick("element6")}
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Reputation Check
                              <span
                                className={` ${
                                  activeElement === "element6"
                                    ? `rotate-[-180deg] -mr-1`
                                    : `rotate-0 fill-[#dfe8f0]`
                                } ml-auto h-5 w-5 shrink-0 fill-secondary transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                  />
                                </svg>
                              </span>
                            </button>
                          </h2>
                          <TECollapse
                            show={activeElement === "element6"}
                            className="!mt-0 !rounded-b-none !shadow-none text-accent"
                          >
                            <div className="px-5 py-4">
                              Our playful, transparent review system helps everyone feel secure. In fact, 81% of people feel more confident reaching out to strangers when backed by trusted ratings and recommendations. 
                            </div>
                          </TECollapse>
                        </div>
                         <div >
                          <h2 className="mb-0" id="headingOne">
                            <button
                              className={`font-semibold text-xl ${
                                activeElement === "element7" &&
                                `text-accent [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
                              } group relative flex w-full items-center rounded-none  bg-primary px-2 py-4 text-left text-base text-accent transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
                              type="button"
                              onClick={() => handleClick("element7")}
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Bonus Tips
                              <span
                                className={` ${
                                  activeElement === "element7"
                                    ? `rotate-[-180deg] -mr-1`
                                    : `rotate-0 fill-[#dfe8f0]`
                                } ml-auto h-5 w-5 shrink-0 fill-secondary transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                  />
                                </svg>
                              </span>
                            </button>
                          </h2>
                          <TECollapse
                            show={activeElement === "element7"}
                            className="!mt-0 !rounded-b-none !shadow-none text-accent"
                          >
                            <div className="px-5 py-4">
                              Great service deserves more. <strong>Supporters can receive tips without limits</strong> , giving them even more ways to earn.
                            </div>
                          </TECollapse>
                        </div>
                        <div >
                          <h2 className="mb-0" id="headingOne">
                            <button
                              className={`font-semibold text-xl ${
                                activeElement === "element8" &&
                                `text-accent [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
                              } group relative flex w-full items-center rounded-none  bg-primary px-2 py-4 text-left text-base text-accent transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
                              type="button"
                              onClick={() => handleClick("element8")}
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Smart Matchmaking
                              <span
                                className={` ${
                                  activeElement === "element8"
                                    ? `rotate-[-180deg] -mr-1`
                                    : `rotate-0 fill-[#dfe8f0]`
                                } ml-auto h-5 w-5 shrink-0 fill-secondary transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                  />
                                </svg>
                              </span>
                            </button>
                          </h2>
                          <TECollapse
                            show={activeElement === "element8"}
                            className="!mt-0 !rounded-b-none !shadow-none text-accent"
                          >
                            <div className="px-5 py-4">
                             Our proprietary algorithm connects you to the best supporters based on location, availability, and shared interests — so every match feels just right.
                            </div>
                          </TECollapse>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:flex md:mx-8 md:py-10">
                      <div className="grid grid-cols-2 lg:grid-cols-3 space-x-2 lg:space-x-1">
                        <div className="py-4">
                           <h2 className="text-accent text-3xl font-semibold  "><span className="relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-secondary/50 hover:after:w-full after:transition-all after:duration-300 ">Verified & Safety</span></h2>
                           <p className="text-accent text-lg py-4 text-left lg:text-base">All users complete ID verification and background checks, so every connection happens in a secure, trusted environment.</p>
                        </div>
                         <div className="py-4">
                           <h2 className="text-accent text-3xl font-semibold"><span  className="relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-secondary/50 hover:after:w-full after:transition-all after:duration-300">Fully Flexible Requests</span> </h2>
                           <p className="text-accent text-lg py-4 text-left lg:text-base ">Post any kind of request — big or small — as long as it meets our community guidelines. We’re built to handle whatever support you need.</p>
                        </div>
                        <div className="py-4">
                           <h2 className="text-accent text-3xl font-semibold"> <span  className="relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-secondary/50 hover:after:w-full after:transition-all after:duration-300">Emotional Support</span> </h2>
                           <p className="text-accent text-sm py-4 text-left lg:text-base">We’re the first platform where you can seek genuine emotional support — verified people to talk, walk, and build healthy connections with. </p>
                        </div  >
                        <div className="py-4">
                           <h2 className="text-accent text-3xl font-semibold"> <span  className="relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-secondary/50 hover:after:w-full after:transition-all after:duration-300">Every Minute Counts</span> </h2>
                           <p className="text-accent text-sm py-4 text-left lg:text-base">Only pay for the time you actually use. If your session ends early, we automatically refund the unused minutes.</p>
                        </div>
                         <div className="py-4">
                           <h2 className="text-accent text-3xl font-semibold"> <span  className="relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-secondary/50 hover:after:w-full after:transition-all after:duration-300">Zero Cost to Earn</span> </h2>
                           <p className="text-accent text-sm py-4 text-left lg:text-base">Become a supporter without paying any upfront registration or verification fees. Join freely and start earning right away.</p>
                        </div>
                         <div className="py-4">
                           <h2 className="text-accent text-3xl font-semibold"><span  className="relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-secondary/50 hover:after:w-full after:transition-all after:duration-300">Reputation Check </span> </h2>
                           <p className="text-accent text-sm py-4 text-left lg:text-base">Our playful, transparent review system helps everyone feel secure. In fact, 81% of people feel more confident reaching out to strangers when backed by trusted ratings and recommendations.</p>
                        </div>
                        <div className="py-4">
                           <h2 className="text-accent text-3xl font-semibold"> <span  className="relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-secondary/50 hover:after:w-full after:transition-all after:duration-300"> Bonus Tips</span></h2>
                           <p className="text-accent text-sm py-4 text-left  lg:text-base"> Great service deserves more. Supporters can receive tips without limits, giving them even more ways to earn.</p>
                        </div>
                        <div className="py-4">
                           <h2 className="text-accent text-3xl font-semibold"> <span  className="relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-secondary/50 hover:after:w-full after:transition-all after:duration-300">Smart Matchmaking</span></h2>
                           <p className="text-accent text-sm py-4 text-left  lg:text-base">Our proprietary algorithm connects you to the best supporters based on location, availability, and shared interests — so every match feels just right.</p>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
         <div className='w-full h-[300px] mx-auto flex flex-col items-center justify-center bg-[url(/img/section_5_1.JPG)] bg-cotain bg-center bg-no-repeat py-[64px]'/>

      </main>
        <Footer/>
      
    </>
    
  );
}