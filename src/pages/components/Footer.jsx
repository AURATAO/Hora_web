export default function Footer() {
    return (
        <>
         <footer className="w-full bg-primary py-[32px]">
            <div className=' mx-auto px-8 flex-col items-start  md:items-center  lg:max-w-7xl'>
                <div className='w-full flex flex-col items-start justify-center md:flex-row md:items-start md:justify-center md:gap-8 lg:max-w-7xl '>
                <div className='hidden w-full h-[300px] mx-auto flex-col items-start justify-end  lg:flex '>
                <h2 className='text-5xl text-accent font-heading mb-auto'>Hora</h2>
                <p className='text-accent text-md'>© 2024 Hora. All rights reserved.</p>
                </div>
                <div className='pt-5 w-full md:w-1/3 '>
                    <ul className='flex flex-col items-start justify-start gap-4 '>
                    <li className='text-accent/30 text-lg'>Index</li>
                    <li className='text-accent hover:text-secondary text-sm'><a href="/">Mission</a></li>
                    <li>
                        <ul className='flex items-center justify-center gap-2'>
                        <li className='text-accent hover:text-secondary text-sm'><a href="/">Contact</a></li>
                        <li className='text-accent hover:text-secondary text-sm'><a href="/">ig</a></li>
                        <li className='text-accent hover:text-secondary text-sm'><a href="/">linkedin</a></li>
                        </ul>
                    </li>
                    </ul>
                </div>
                <div className='pt-5 w-full md:w-1/3 '>
                    <ul className='flex flex-col items-start justify-start gap-4'>
                    <li className='text-accent/30 text-lg'> Resources</li>
                    <li className='text-accent hover:text-secondary text-sm'> <a href="">Safe Matching Tips</a></li>
                    <li className='text-accent hover:text-secondary text-sm'> <a href="">FAQ</a></li>
                    <li className='text-accent hover:text-secondary text-sm'><a href="">Trust & Safety</a></li>
                    <li className='text-accent hover:text-secondary text-sm'> <a href="">Partner with Hora </a></li>
                    <li className='text-accent hover:text-secondary text-sm'> <a href="">Press Resourcea</a> </li>
                    </ul>
                </div>
                <div className='pt-5 w-full md:w-1/3 '>
                    <ul className='flex flex-col items-start justify-start gap-4'>
                    <li className='text-accent/30 text-lg'>Legal</li>
                    <li className='text-accent hover:text-secondary text-sm'><a href="/">Terms</a></li>
                    <li className='text-accent hover:text-secondary text-sm'><a href="/">Privacy</a></li>
                    <li className='text-accent hover:text-secondary text-sm'><a href="/">Coookie Policy</a></li>
                    <li className='text-accent hover:text-secondary text-sm'><a href="/">Do Not Sell My Personal Information</a></li>
                    </ul>
                </div>
                </div>
                <div className='pt-10 w-full text-center lg:hidden'>
                    <p className='text-accent text-md'>© 2024 Hora. All rights reserved.</p>
                </div>
            </div>
        </footer>
        </>
    );
}