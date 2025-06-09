import React from 'react';
import BlurText from '@/components/animation/blurText/page';

const Section1 = () => {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return (
        <div id="section1" className="w-full h-[650px] flex items-center justify-start p-20">
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                src="/video/background-vid.mp4"
            />
            <div className="w-1/2 text-white min-w-[750px] px-20">
                <h1 className="text-6xl font-bold leading-tight self-center flex flex-wrap gap-2">
                    <BlurText
                        text="Discover the ease of"
                        delay={100}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                    />
                    <BlurText
                        text="getting your dream"
                        delay={300}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="text-[#2fb7dd]"
                    />
                    <BlurText
                        text="car with quality"
                        delay={500}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                    />
                </h1>
            </div>
        </div>
    );
};

export default Section1;
