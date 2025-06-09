import React from 'react';

const Section1 = () => {
    return (
        <div className="w-full h-[650px] flex items-center justify-start p-20">
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                src="/videos/background-vid.mp4"
            />
            <div className="w-1/2 text-white min-w-[750px] px-20">
                <h1 className="text-6xl font-bold leading-tight self-center">
                    Discover the ease of <span className="text-[#2fb7dd]">getting your dream</span> car with quality
                </h1>
            </div>
        </div>
    );
};

export default Section1;
