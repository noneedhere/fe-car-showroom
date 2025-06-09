import React from 'react';

interface TestimoniItemProps {
    icon: string;
    title: string;
    description: string;
}

const TestimoniCard = () => (
    <div className="relative flex justify-center items-center w-full max-w-xl">
        {/* Rectangle background (hiasan) */}
        <div className="absolute right-6 top-6 w-full h-full bg-[#2fb7dd] rounded-sm opacity-30 z-0"></div>
        {/* Rectangle utama (isi testimoni) */}
        <div className="relative bg-white rounded-sm shadow-lg px-10 py-8 flex flex-col items-center w-full z-10">
            <img src="/images/PP.jpg" alt="User" className="w-20 h-20 rounded-full mb-4 border-5 border-[#2fb7dd] object-cover" />
            <img src="/images/RATING.png" alt="User" className="w-28 m-4 h-auto object-cover" />
            <div className="relative w-full mb-6">
                <img src="/images/quote-right.png" alt="quote" className='absolute bottom-9' />
                <p className="text-lg text-gray-400 text-center mb-4">
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                </p>
            </div>
            <div className="text-center">
                <h4 className="font-normal text-[#2fb7dd] text-xl">PEJUang</h4>
                <span className="text-gray-400 text-sm">Customer</span>
            </div>
        </div>
    </div>
);

export default TestimoniCard;
