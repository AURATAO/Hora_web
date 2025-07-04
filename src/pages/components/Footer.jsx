export default function Footer() {
    return (
        <>
         <footer className="w-full flex items-center justify-center bg-primary py-[32px]">
            <div className='w-full mx-3 flex-col items-start justify-center md:items-center md:justify-center  lg:max-w-7xl'>
                <div className='w-full flex flex-col items-start justify-center md:flex-row md:items-start md:justify-center md:gap-8 lg:max-w-7xl '>
                <div className='hidden w-full h-[300px] mx-auto flex-col items-start justify-end  lg:flex '>
                <h2 className='text-5xl text-accent font-heading mb-auto'>Hora</h2>
                <p className='text-accent text-md'>© 2024 Hora. All rights reserved.</p>
                </div>
                <div className='pt-5 w-full md:w-1/3 '>
                    <ul className='flex flex-col items-start justify-start gap-4 '>
                    <li className='text-accent/30 text-lg'>Index</li>
                    <li className='text-accent hover:text-secondary text-sm'>Mission</li>
                    <li>
                        <ul className='flex items-center justify-center gap-2'>
                        <li className='text-accent hover:text-secondary text-sm'>Contact</li>
                        <li className='text-accent hover:text-secondary text-sm'>ig</li>
                        <li className='text-accent hover:text-secondary text-sm'>linkedin</li>
                        </ul>
                    </li>
                    </ul>
                </div>
                <div className='pt-5 w-full md:w-1/3 '>
                    <ul className='flex flex-col items-start justify-start gap-4'>
                    <li className='text-accent/30 text-lg'>Resources</li>
                    <li className='text-accent hover:text-secondary text-sm'>Safe Matching Tips</li>
                    <li className='text-accent hover:text-secondary text-sm'>FAQ</li>
                    <li className='text-accent hover:text-secondary text-sm'>Trust & Safety</li>
                    <li className='text-accent hover:text-secondary text-sm'>Partner with Hora</li>
                    <li className='text-accent hover:text-secondary text-sm'>Press Resource</li>
                    </ul>
                </div>
                <div className='pt-5 w-full md:w-1/3 '>
                    <ul className='flex flex-col items-start justify-start gap-4'>
                    <li className='text-accent/30 text-lg'>Legal</li>
                    <li className='text-accent hover:text-secondary text-sm'>Terms</li>
                    <li className='text-accent hover:text-secondary text-sm'>Privacy</li>
                    <li className='text-accent hover:text-secondary text-sm'>Coookie Policy</li>
                    <li className='text-accent hover:text-secondary text-sm'>Do Not Sell My Personal Information</li>
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