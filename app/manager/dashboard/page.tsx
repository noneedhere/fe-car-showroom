'use client'

import React from 'react';
import Section1 from '@/components/section/section1/page';
import Section2 from '@/components/section/section2/page';
import Section3 from '@/components/section/section3/page';
import Section4 from '@/components/section/section4/page';

const HomePage = () => {
    return (
        <div className="w-full flex flex-col">
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
        </div>
    );
};

export default HomePage;