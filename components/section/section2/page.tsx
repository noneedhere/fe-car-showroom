import React from 'react';
import CardQuickSearch from '@/components/card/cardQuickSearch/page';
import CountUp from '@/components/animation/count/page';

const Section2 = () => {
    return (
        <div id="section2" className='relative w-full h-[1000px] bg-[#30313E] flex justify-start px-20 pt-10'>
            <img src='/images/DEALER.png' alt='Dealer' className='absolute left-1/2 top-60 -translate-x-1/2 -translate-y-1/3 h-[350px] w-auto z-0' />
            <div className='py-11'>
                <div className='flex flex-col justify-center items-center py-36 px-20'>
                    <div className='flex justify-between w-full mb-8'>
                        <div className="text-start pr-9 pl-4 border-r border-gray-600">
                            <h1 className="mb-2 text-5xl font-extrabold text-[#2fb7dd]">
                                <CountUp to={900} duration={1.5} separator="," />
                                +
                            </h1>
                            <p className="min-w-[125px] text-lg">happy clients</p>
                        </div>

                        <div className="text-start pl-2 pr-9 border-r border-gray-600">
                            <h1 className="mb-2 text-5xl font-extrabold text-[#2fb7dd]">
                                <CountUp to={500} duration={1.5} separator="," />
                                +
                            </h1>
                            <p className="min-w-[125px] text-lg">available cars</p>
                        </div>

                        <div className="text-start">
                            <h1 className="mb-2 text-5xl font-extrabold text-[#2fb7dd]">
                                <CountUp to={30} duration={1.5} />
                                +
                            </h1>
                            <p className="min-w-[125px] text-lg">years experience</p>
                        </div>
                    </div>

                    <div className="flex-col  max-w-[550px] text-center">
                        <p className="text-slate-400 text-sm mb-6 ml-4 text-start max-w-[470px]">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in velit.</p>
                        <div className="flex justify-center space-x-4">
                            <button className="relative w-[200px] py-[15px] text-center font-bold border-2 border-[#2fb7dd] text-white rounded-md overflow-hidden group">
                                <span className="absolute inset-0 w-0 h-full bg-[#2fb7dd] transition-all duration-500 group-hover:w-full border-none"></span>
                                <span className="relative z-10">More Information</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='flex-shrink-0 overflow-visible flex items-center justify-center'>
                    <img src='/images/dashboardMobil.png' alt='Car Dashboard' className='absolute h-[500px] w-auto top-36 right-[0%]' />
                </div>
            </div>
            <div className='absolute left-44 -translate-x-1/2 text-start bottom-[300px]'>
                <p className="mb-2 text-white">Get To Know More:</p>
                <div className="flex justify-start space-x-4">
                    <a href="#" className="group text-white hover:scale-110 transition-transform" aria-label="Facebook">
                        <svg className="w-6 h-6 font-bold text-white group-hover:text-[#2fb7dd] transition-colors" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a href="#" className="group text-white hover:scale-110 transition-transform" aria-label="Twitter">
                        <svg className="w-6 h-6 font-bold text-white group-hover:text-[#2fb7dd] transition-colors" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                        </svg>
                    </a>
                    <a href="#" className='group text-white hover:scale-110 transition-transform' aria-label="Instagram">
                        <svg className="w-6 h-6 font-bold text-white group-hover:text-[#2fb7dd] transition-colors" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
            {/* quick search card */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center bottom-[-25%] h-[500px] min-w-[400px] w-[900px]">
                <CardQuickSearch />
            </div>
        </div>
    );
};

export default Section2;
