import { MoveDownRight } from 'lucide-react';
import {MoveDownLeft} from 'lucide-react';
import TestimonialsSlider from './components/TestimonialsSlider.jsx';
import Logo_01 from './components/animated/Logo_01.jsx';
import Logo_02 from './components/animated/Logo_02.jsx';
import Logo_03 from './components/animated/Logo_03.jsx';
import Header from './components/Header.jsx';

export default function Home() {
  return (
  <>
 <Header/>
  <main className="flex flex-col items-center justify-center min-h-screen bg-accent ">
    {/*banner*/}
    <div className="banner w-full">
      <div className="relative  h-[500px]  ">
        <div className="absolute bottom-[-230px] left-1/3 translate-x-[-50%] p-8 w-full max-w-7xl text-center">
          <h1 className="text-7xl font-bold mb-2 font-heading text-accent ">Your Hour, Your Way</h1>
        </div>
    </div>
    </div>
    {/* Section 1 */}
    <div className="py-[100px] w-full mx-auto flex flex-col items-center justify-center">
      <h2 className="font-heading text-6xl text-left font-semibold mb-4 text-primary p-4">What is Hora?</h2>
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
    <div className="py-[72px] w-full mx-auto flex flex-col items-center justify-center bg-primary">
      <div className="flex flex-col items-start justify-center px-[30px] w-full max-w-7xl">
        <div className="pb-[64px] pt-8"> 
          <h2 className="text-6xl font-heading text-accent">Why Choose Hora?</h2>
          <p className="text-xl text-accent max-w-2xl pt-4">
            Your time, your needs — matched with trust and ease.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-[32px] w-full pt-[32px] pb-2 max-w-7xl">
          <div className="flex flex-col items-start justify-between">
            {/* <h2 className="text-[200px] font-semibold text-accent leading-none font-heading pb-[64px]">01</h2> */}
           <div className='pb-[64px]'>
            <Logo_01/>
           </div>
            <div className="flex flex-col items-start pt-2">
              <h3 className="text-3xl font-semibold text-accent pb-4 font-heading">
                Your safety, our priority.
              </h3>
              <p className="text-lg text-accent max-w-xl">
                Every supporter and requester completes secure ID verification and background check. So you can hire or earn with total confidence.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between">
            {/* <h2 className="text-[200px] font-semibold text-accent leading-none font-heading pb-[64px]">02</h2> */}
            <div className='pb-[64px]'>
            <Logo_02/>
            </div>
            <div className="flex flex-col items-start pt-2">
              <h3 className="text-3xl font-semibold text-accent pb-4 font-heading">
                Your Money, Always Protected
              </h3>
              <p className="text-lg text-accent max-w-xl">
                We use trusted third-party processors like Stripe, so your payments are always secure and your money is protected.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between">
            {/* <h2 className="text-[200px] font-semibold text-accent leading-none font-heading pb-[64px]">03</h2> */}
            <div className='pb-[64px]'>
            <Logo_03/>
            </div>
            <div className="flex flex-col items-start justify-center pt-2">
              <h3 className="text-3xl font-semibold text-accent pb-4 font-heading">
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
      <label className="label flex self-end py-[48px]">
        <div className="toggle">
          <input className="toggle-state" type="checkbox" name="check" value="check" />
          <div className="indicator"></div>
        </div>
      </label>
    {/* Section requester */}
    <div className=" w-full mx-auto items-center justify-center pb-[32px] hidden">
    <div className="bg-[url(/img/section_3_1.jpeg)] w-full h-[400px] md:w-full md:h-lvh bg-cover bg-center transition-transform duration-500 hover:scale-105"/>
      <div className="w-full max-w-3xl mx-auto px-6 py-16 flex flex-col items-center justify-center">
        {/* Step 1 */}
        <div className="flex flex-col items-start pb-12">
          <h2 className="text-[80px] font-semibold text-primary leading-none mb-4">01</h2>
          <h3 className="text-2xl font-heading font-semibold text-primary mb-4">Establish your profile</h3>
          <p className="text-lg text-primary max-w-lg">
            Join our exclusive circle of verified members. Your trust is our highest standard.
          </p>
        </div>
       <MoveDownRight className='text-secondary transition-transform duration-500 hover:scale-200 ' size={32} />

        {/* Step 2 */}
        <div className="flex flex-col items-end pb-12">
          <h2 className="text-[80px] font-semibold text-primary leading-none mb-4">02</h2>
          <h3 className="text-2xl font-heading font-semibold text-primary mb-4">Post your needs</h3>
          <p className="text-lg text-primary max-w-lg text-right">
            Specify your requirements with precision. We’ll connect you with exceptional supporters who meet your expectations.
          </p>
        </div>
        <MoveDownLeft className='text-secondary transition-transform duration-500 hover:scale-200 ' size={32} />

        {/* Step 3 */}
        <div className="flex flex-col items-start">
          <h2 className="text-[80px] font-semibold text-primary leading-none mb-4">03</h2>
          <h3 className="text-2xl font-heading font-semibold text-primary mb-4">Complete with confidence</h3>
          <p className="text-lg text-primary max-w-lg">
            Approve the service only when fully satisfied. Settle payments seamlessly, with clarity and grace.
          </p>
        </div>
      </div>

    </div>
    {/* Section supporter */}
    <div className=" w-full mx-auto flex items-center justify-center pb-[32px]  ">
      <div className="w-full max-w-3xl mx-auto px-6 py-16 flex flex-col items-center justify-center ">
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
      <div className="bg-[url(/img/section_3_2.jpeg)] w-full h-[400px] md:w-full md:h-lvh bg-cover bg-center transition-transform duration-500 hover:scale-105" />
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
  <div className="w-full mx-auto max-w-7xl flex flex-col items-start justify-center gap-32">
    <p className='text-secondary text-xl'>What our users say</p>
    <TestimonialsSlider />
  </div>
    </div>
    {/* Section 5 */}
    <div className='w-full h-[300px] mx-auto flex flex-col items-center justify-center bg-[url(/img/section_5_1.JPG)] bg-cotain bg-center bg-no-repeat py-[64px]'>

    </div>
  </main>
    
  </>
  );
}