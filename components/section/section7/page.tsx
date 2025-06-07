import React from 'react';
import CardDiscover from '@/components/card/cardDiscover/page';

const Section7 = () => {
    return (
        <div className="bg-white w-screen h-[709px] flex flex-col items-center justify-center">
            <div className="flex flex-row w-full max-w-[1200px] pb-3 justify-between">
                <div className='w-[694px] flex flex-col pt-[120px] justify-start items-start'>
                    <h2 className="text-black text-[43px] font-normal text-left">
                        Discover More
                    </h2>
                    <p className="text-gray-400 text-[18px] w-[479px] my-5 text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna.
                    </p>
                </div>

                <div className='flex justify-end items-end'>
                    <button
                        type='submit' className="relative p-5 py-[15px] mb-7 text-center font-bold border-2 border-[#2fb7dd] text-[#2fb7dd] hover:text-white duration-100 rounded-md overflow-hidden group">
                        <span className="absolute inset-0 w-0 h-full bg-[#2fb7dd] transition-all duration-500 group-hover:w-full border-none"></span>
                        <span className="relative z-10">FIND MORE</span>
                    </button>
                </div>
            </div>
            <div className="flex flex-row gap-x-8 mt-10 mb-14">
                <CardDiscover bgImage="discover1.png" title='Lorem Ipsum'/>
                <CardDiscover bgImage="discover2.png" title='Lorem Ipsum'/>
                <CardDiscover bgImage="discover3.png" title='Lorem Ipsum'/>
            </div>
        </div>
    );
};

export default Section7;