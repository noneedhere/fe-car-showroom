import React from 'react';

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

const CardSection3 = ({ title, description, icon }: { title: string; description: string; icon?: string }) => {
    return (
        <div className="w-[379px] h-[353px] border-2 border-[#2fb7dd] rounded-lg p-10 pb-[56px] flex flex-col items-start justify-between bg-white shadow-md">
            <div className="flex flex-row items-center w-full mb-4">
                <div className="w-[62px] h-[68px] bg-gray-200 rounded mr-4 flex items-center justify-center overflow-hidden">
                    <img src={icon ? `/images/${icon}` : "/images/award.png"} alt="icon" className="w-full h-full object-contain" />
                </div>
                <h2 className="text-2xl font-bold text-[#2fb7dd]">{title}</h2>
            </div>
            <p className="text-gray-600 text-xl mb-6 flex-1">{description}</p>
            <a href="#" className="text-[#2fb7dd] font-normal hover:underline mt-auto">Read more &gt;&gt;</a>
        </div>
    );
};

export default CardSection3;
