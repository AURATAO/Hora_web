import React, { useEffect, useState } from 'react';
import TestimonialsSlider from './components/TestimonialsSlider.jsx';
import Logo_01 from './components/animated/Logo_01.jsx';
import Logo_02 from './components/animated/Logo_02.jsx';
import Logo_03 from './components/animated/Logo_03.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';



export default function Home() {
 const [handleColor, sethandleColor] = useState('bg-primary/20');
 const [activeAnimated, setActiveAnimated] = useState(false);
const [isSupporter, setIsSupporter] = useState(false);

    useEffect(()=>{
        const handleScroll =()=>{
            const y = window.scrollY;
             console.log("scrollY:", window.scrollY);
            if (window.scrollY > 1000) {
              console.log("Trigger animation!");
              setActiveAnimated(true);
            }

           //setHandleColor 
           if (y > 3347) {
            sethandleColor('bg-primary');
            } else if (y > 2148) {
            sethandleColor('bg-accent');
            } else if (y > 1410) {
            sethandleColor('bg-primary');
            } else if (y > 772 ) {
            sethandleColor('bg-accent');
            } else {
            sethandleColor('bg-primary/40');
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
 <Header handleColor={handleColor}/>
  <main className="flex max-x-7xl flex-col items-center justify-center min-h-screen bg-accent ">
    {/*banner*/}
    <div className="bg-[url(/img/banner_3.JPG)] bg-cover bg-right w-full min-h-[844px] md:bg-center">
      <div className="relative h-[500px] ">
        <div className="absolute bottom-[-230px] w-full text-center lg:text-left">
          <div className='max-w-7xl mx-auto px-4'>
          <h1 className="text-7xl font-bold mb-2 font-heading text-accent ">Your Hour, Your Way</h1>
          </div>
        </div>
    </div>
    </div>
    {/* Section 1 */}
    <div className="py-[100px] w-full px-2 flex flex-col items-center justify-center">
      <h2 className="font-heading text-5xl text-left font-semibold mb-4 text-primary p-4 md:text-6xl">What is Hora?</h2>
      <div className="text-lg mb-8 max-w-2xl text-center space-y-3 ">
        <p className=" text-primary ">Life’s busy. We get your time back.</p>

        <p  className=" text-primary ">Find someone kind to handle the little things — whether it’s walking your dog, sitting with your mom at the clinic, or sharing a meal so you don’t eat alone. </p>

       <p  className=" text-primary pb-4"> Your day stays lighter. <br/> Your mind stays clearer.<br/> Someone else shows up, so you can keep moving.</p>
      </div>
      <button className="py-9">
      <a href="/mission" className="text-xl px-5 py-2 bg-secondary text-white rounded-full hover:bg-accent hover:border-secondary hover:border-1 hover:text-secondary transition-colors duration-300">
        How we do it
      </a>
      </button>
    </div>
    <div className="py-[32px] w-full mx-auto flex flex-col items-center justify-center bg-primary">
      <div className="flex flex-col items-start justify-center px-4 w-full md:items-center lg:items-start lg:px-0 max-w-7xl">
        <div className="pb-[64px] pt-8"> 
          <h2 className="text-4xl font-heading text-accent md:text-6xl">Why Choose Hora?</h2>
          <p className="text-lg text-accent max-w-2xl pt-4">
            Your time, your needs — matched with trust and ease.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-[32px] w-full pt-[32px] pb-2 md:items-center lg:items-start lg:px-4 max-w-7xl">
          <div className="flex flex-col items-start justify-between py-4 md:items-center lg:items-start ">
           <div className='pb-4'>
            <Logo_01 activeAnimated={activeAnimated}/>
           </div>
            <div className="flex flex-col items-start pt-2 md:items-center lg:items-start ">
              <h3 className="text-3xl font-semibold text-accent pb-4 font-heading md:text-center lg:text-left">
                Your safety, our priority.
              </h3>
              <p className="text-lg text-accent max-w-xl md:text-center lg:text-left">
                Every supporter and requester completes secure ID verification and background check. So you can hire or earn with total confidence.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between py-4 md:items-center lg:items-start ">
            <div className='pb-4'>
            <Logo_02 activeAnimated ={activeAnimated}/>
            </div>
            <div className="flex flex-col items-start pt-2 md:items-center lg:items-start md:text-center lg:text-left ">
              <h3 className="text-3xl font-semibold text-accent pb-4 font-heading md:text-center lg:text-left">
                Your Money, Always Protected
              </h3>
              <p className="text-lg text-accent max-w-xl md:text-center lg:text-left">
                We use trusted third-party processors like Stripe, so your payments are always secure and your money is protected.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between py-4 md:items-center lg:items-start ">
            <div className='pb-4 '>
            <Logo_03 activeAnimated ={activeAnimated}/>
            </div>
            <div className="flex flex-col items-start justify-center pt-2 md:items-center lg:items-start ">
              <h3 className="text-3xl font-semibold text-accent pb-4 font-heading md:text-center lg:text-left">
                Your every minute matters
              </h3>
              <p className="text-lg text-accent max-w-xl">
                We charge by the minute — no rounding up. You pay exactly for the time you use, not a cent more.
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
          <input className="toggle-state" type="checkbox" name="check" value="check" checked={isSupporter}  onClick={() => setIsSupporter(!isSupporter)}/>
           <div className="labels" >
              <span className="icon-left text-sm text-primary/30">Requester</span>
              <span className="icon-right text-sm text-primary/30">Supporter</span>
            </div>
          <div className="indicator">
          </div>
        </div>
      </label>
    {/* Section requester */}
    <div className= {`w-full mx-auto pt-4 flex-col items-center justify-center lg:flex-row-reverse lg:py-4 ${isSupporter ? "hidden" : "flex"}`}>
      <div className="w-full max-w-3xl mx-auto px-6 pb-4 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-heading text-primary pb-10">How to Request Support</h2>
        {/* Step 1 */}
        <div className="flex flex-col items-start pb-12">
          <h2 className="text-[80px] font-semibold text-primary leading-none mb-4">01</h2>
          <h3 className="text-2xl font-heading font-semibold text-primary mb-4">Establish your profile</h3>
          <p className="text-lg text-primary max-w-lg">
            Join our exclusive circle of verified members. Your trust is our highest standard.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col  items-start  lg:items-end pb-12">
          <h2 className="text-[80px] font-semibold text-primary leading-none mb-4">02</h2>
          <h3 className="text-2xl font-heading font-semibold text-primary mb-4">Post your needs</h3>
          <p className="text-lg text-primary max-w-lg lg:text-right">
            Specify your requirements with precision. We’ll connect you with exceptional supporters who meet your expectations.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-start">
          <h2 className="text-[80px] font-semibold text-primary leading-none mb-4">03</h2>
          <h3 className="text-2xl font-heading font-semibold text-primary mb-4">Complete with confidence</h3>
          <p className="text-lg text-primary max-w-lg">
            Approve the service only when fully satisfied. Settle payments seamlessly, with clarity and grace.
          </p>
        </div>
      </div>
      <div className="bg-[url(/img/section_3_1.jpeg)] w-full h-[400px] bg-cover bg-center md:h-[700px] lg:m-8 lg:h-lvh transition-transform duration-500 hover:scale-105"/>

    </div>
    {/* Section supporter */}
    <div className={`w-full mx-auto pt-4 flex-col items-center justify-center lg:flex-row lg:p-4 ${isSupporter ? "flex" : "hidden"}`}>
      <div className="w-full max-w-7xl mx-auto px-6 pb-4 flex flex-col items-center justify-center ">
        <h2 className="text-4xl font-heading text-primary pb-10">How to Become a Supporter</h2>
        {/* Step 1 */}
        <div className="flex flex-col items-start pb-12">
          <h2 className="text-[80px] font-semibold text-primary leading-none mb-4">01</h2>
          <h3 className="text-2xl font-heading font-semibold text-primary mb-4">Build your trusted profile</h3>
          <p className="text-lg text-primary max-w-lg">
           Register and complete verification to join a community that values discretion and quality.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-start pb-12">
          <h2 className="text-[80px] font-semibold text-primary leading-none mb-4">02</h2>
          <h3 className="text-2xl font-heading font-semibold text-primary mb-4">Choose or Accept tasks that suit you</h3>
          <p className="text-lg text-primary max-w-lg ">
            Browse requests and choose engagements aligned with your time and expertise.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-start">
          <h2 className="text-[80px] font-semibold text-primary leading-none mb-4">03</h2>
          <h3 className="text-2xl font-heading font-semibold text-primary mb-4">Deliver and Earn with grace</h3>
          <p className="text-lg text-primary max-w-lg">
            Complete the tasks with confidence, turning free time into real value — knowing your earnings are secured and your reputation elevated.
          </p>
        </div>
      </div>
      <div className=" bg-[url(/img/section_3_2.jpeg)] w-full h-[400px] bg-cover bg-bottom md:h-[700px] lg:h-lvh lg:m-8 transition-transform duration-500 hover:scale-105 " />
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
    <div className='w-full h-[300px] mx-auto flex flex-col items-center justify-center bg-[url(/img/section_5_1.JPG)] bg-cotain bg-center bg-no-repeat py-[64px]'/>

    {/* Footer */}
    <Footer />
  </main>
    
  </>
  );
}