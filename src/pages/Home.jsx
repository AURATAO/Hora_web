


export default function Home() {
  return (
  <>

  <header className="flex items-center justify-between py-4 px-[50px] h-[72px] w-full fixed shadow-[0_12px_22px_0_rgba(0,0,0,0.08)] z-40 bg-primary/20 " >
    <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
    <nav className="flex space-x-5">
      <a href="/" className="text-accent text-xl font-light hover:text-gray-500 ">Home</a>
      <a href="/mission" className="text-accent text-xl font-light hover:text-gray-500">Mission</a>
    </nav>
    <div className="flex items-center">
      <h1 className="text-5xl font-normal font-heading text-accent">Hora</h1>
    </div>
    <button>
      <a href="/mission" className="px-5 py-2 bg-secondary text-white rounded-full hover:bg-transparent hover:border-secondary hover:border-1 hover:text-secondary transition-colors duration-300">
        Download
      </a>
    </button>
    </div>

  </header>
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
      <p className="text-lg mb-8 max-w-2xl text-center space-y-3 ">
        <p className=" text-primary ">Life’s busy. We get your time back.</p>

        <p  className=" text-primary ">Find someone kind to handle the little things — whether it’s walking your dog, sitting with your mom at the clinic, or sharing a meal so you don’t eat alone. </p>

       <p  className=" text-primary pb-4"> Your day stays lighter. <br/> Your mind stays clearer.<br/> Someone else shows up, so you can keep moving.</p>
      </p>
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

        <div className="flex flex-col lg:flex-row items-start justify-between gap-[32px] w-full pt-[64px]">
          <div className="flex flex-col items-start">
            <h2 className="text-[200px] font-semibold text-accent leading-none">01</h2>
            <div className="flex flex-col items-start pt-2">
              <h3 className="text-3xl font-semibold text-accent pb-4 font-heading">
                Your safety, our priority.
              </h3>
              <p className="text-lg text-accent max-w-xl">
                Every supporter and requester completes secure ID verification and background check. So you can hire or earn with total confidence.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <h2 className="text-[200px] font-semibold text-accent leading-none">02</h2>
            <div className="flex flex-col items-start pt-2">
              <h3 className="text-3xl font-semibold text-accent pb-4 font-heading">
                Your Money, Always Protected
              </h3>
              <p className="text-lg text-accent max-w-xl">
                We use trusted third-party processors like Stripe, so your payments are always secure and your money is protected.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <h2 className="text-[200px] font-semibold text-accent leading-none">03</h2>
            <div className="flex flex-col items-start pt-2">
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
  </main>
    
  </>
  );
}