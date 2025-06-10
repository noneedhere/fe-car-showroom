'use client'

import React from 'react';
import Section1 from '@/components/section/section1/page';
import Section2 from '@/components/section/section2/page';
import Section3 from '@/components/section/section3/page';
import Section4 from '@/components/section/section4/page';
import Section5 from '@/components/section/section5/page';
import Section6 from '@/components/section/section6/page';
import Section7 from '@/components/section/section7/page';
import saleSection from '@/components/section/saleSection/page';
import Footer from '@/components/section/footer/page';

const HomePage = () => {
    return (
        <div className="w-full flex flex-col">
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Section7/>
            <Footer/>
        </div>
    );
};

export default HomePage;