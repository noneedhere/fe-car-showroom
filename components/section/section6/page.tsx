import React from 'react';
import TestimoniCard from '@/components/card/cardTestimoni/page';

const Section5 = () => {
    return (
        <div
            id="section6"
            className="w-full h-screen flex flex-col gap-[100px] items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/images/bg5.png')" }}
        >
            <h1 className='font-semibold text-5xl'>What Our Client Say's</h1>
            <TestimoniCard />
        </div>
    );
};

export default Section5;