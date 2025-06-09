import React from 'react';
import CardModelCar from '@/components/card/cardModelCar/page';

const Section5 = () => {
    return (
        <div id="section5" className="bg-white w-full h-[2037px] flex flex-col items-center">
            <div className="flex flex-row w-full max-w-[1200px] pb-3 justify-between">
                <div className='w-[694px] flex flex-col pt-[120px] justify-start items-start'>
                    <h2 className="text-black text-[43px] font-normal text-left">
                        Our Featured Car
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
            {/* Grid of 6 cards: 2 rows, 3 columns, gap 40px */}
            <div className="grid grid-cols-2 grid-rows-3 gap-10 mt-16">
                <CardModelCar bgImage='model1.png' title="911" description="Electric luxury sedan with long range and fast acceleration." />
                <CardModelCar bgImage='model2.png' title="718" description="Hybrid sports car with futuristic design and performance." />
                <CardModelCar bgImage='model3.png' title="Taycan" description="Reliable hybrid car known for its fuel efficiency." />
                <CardModelCar bgImage='model4.png'   title="Panamera" description="All-electric SUV with iconic Mustang performance." />
                <CardModelCar bgImage='model5.png' title="Macan" description="Premium electric SUV with advanced technology." />
                <CardModelCar bgImage='model6.png' title="Cayene" description="Innovative electric crossover with ultra-fast charging." />
            </div>
        </div>
    )
}
export default Section5;