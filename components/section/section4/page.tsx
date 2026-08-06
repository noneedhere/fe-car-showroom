import React from 'react';
import FeatureItem from '../../card/cardSection4/page';

const Section4 = () => {
    return (
        <div className="w-full h-[1580px] bg-white">
            <div className='flex flex-row items-start mx-auto relative'>
                {/* Foto di kiri */}
                <div className="flex flex-col justify-start items-start mt-[145px] ml-[120px] w-[526px] flex-shrink-0">
                    <img
                        src="/images/Group4.png"
                        alt="Section 4 Visual"
                        className="w-[526px] h-auto object-cover rounded-lg shadow-md"
                    />
                </div>
                {/* Konten di kanan */}
                <div className="flex flex-col justify-start items-start mt-[145px] ml-[100px] max-w-[750px]">
                    <h2 className="text-5xl font-medium text-black leading-tight max-w-[500px]">
                        Best Solution Provides Electric Vehicle
                    </h2>
                    <p className="text-lg text-gray-400 mt-8 max-w-[600px]">
                        Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme. Suitable for any car dealer <br />
                        websites, business or corporate websites.
                    </p>
                    {/* Features Section */}
                    <div className="mt-10 w-full">
                        <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                            <FeatureItem icon="ICON5.png" title="Affordable Auto Prices" description="CaarZone is nisi aliquip" />
                            <FeatureItem icon="ICON6.png" title="Auto Rent Services" description="CaarZone is nisi aliquip" />
                            <FeatureItem icon="ICON7.png" title="Online Appointment" description="CaarZone is nisi aliquip" />
                            <FeatureItem icon="ICON8.png" title="Always Trusted" description="CaarZone is nisi aliquip" />
                        </div>
                    </div>
                    {/* Learn More Button and Trust Rating */}
                    <div className="flex flex-row items-center mt-8 gap-x-10 w-full">
                        <button className="relative w-[200px] py-[15px] text-center font-bold border-2 border-[#2fb7dd] text-[#2fb7dd] hover:text-white rounded-md overflow-hidden group">
                            <span className="absolute inset-0 w-0 h-full bg-[#2fb7dd] transition-all duration-500 group-hover:w-full border-none"></span>
                            <span className="relative z-10">LEARN MORE</span>
                        </button>
                        <div className="h-10 border-l border-gray-300 mx-2"></div>
                        <div className="text-gray-500 flex flex-col items-start">
                            <p>Trusted By 900+</p>
                            <p>⭐ 4.9 (2.5k Review)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center mt-20">
                    <img
                        src="/images/mack-group.png"
                        alt="Mask Group"
                        className="w-[1320px] h-[668px] object-cover rounded-md shadow-md"
                    />
                </div>
        </div>
    );
};

export default Section4;
