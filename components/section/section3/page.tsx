import React from 'react';
import CardSection3 from '@/components/card/cardSection3/page';

const BgImageCard = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className="w-[789px] h-[353px] rounded-lg shadow-lg flex flex-col justify-center pt-22 items-end mb-10 pr-10"
            style={{ backgroundImage: "url('/images/Group3.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {children}
        </div>
    );
};

const Section3 = () => {
    return (
        <div className="w-full h-[1590px] bg-white flex justify-center items-center">
            <section className="px-20 text-black">
                <div className="rounded-lg flex flex-row items-center justify-start pt-[501px] pb-[84px]" style={{ width: '1200px', height: '108px' }}>
                    <h2 className="text-[40px] font-bold text-left flex-shrink-0" style={{ width: '694px', height: '92px' }}>
                        We Provide Best Vehicles Solution & Awesome Services
                    </h2>
                    <div style={{ width: '127px', height: '100%' }}></div>
                    <p className="text-gray-600 text-[16px] text-left flex-shrink-0" style={{ width: '379px', height: '108px', display: 'flex', alignItems: 'center' }}>
                        Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme. Suitable for.
                    </p>
                </div>
                {/* Card grid with two rows, px-20, gap-x-8 (32px), gap-y-10 (40px) */}
                <div className="flex flex-col gap-y-2 mt-10">
                    {/* Row 1: BgImageCard and one CardSection3 */}
                    <div className="flex flex-row gap-x-8">
                        <BgImageCard>
                            <div
                                className="flex flex-col items-start justify-start text-white w-[329px] h-[200px] mx-[77-px]">
                                <h2 className="text-2xl font-bold mb-2">We are very competent in this field</h2>
                                <p className="text-base mb-4">Your description or content here.</p>
                                <button className="relative w-[200px] py-[15px] text-center bg-[#2fb7dd] text-white font-semibold rounded-lg hover:bg-[#2199bb] transition-colors">
                                    <span className="relative z-10">LEARN MORE</span>
                                </button>
                            </div>
                        </BgImageCard>
                        <CardSection3 icon="ICON1.png" title="EV Batteries" description="Aliquid illo similique minima magni quidem sequi corporis fugit type and" />
                    </div>
                    {/* Row 2: Three CardSection3 */}
                    <div className="flex flex-row gap-x-8">
                        <CardSection3 icon="ICON2.png" title="Charging Station" description="Aliquid illo similique minima magni quidem sequi corporis fugit type and" />
                        <CardSection3 icon="ICON3.png" title="Engine Management" description="Aliquid illo similique minima magni quidem sequi corporis fugit type and" />
                        <CardSection3 icon="ICON4.png" title="EV Fast Charging" description="Aliquid illo similique minima magni quidem sequi corporis fugit type and" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Section3;
