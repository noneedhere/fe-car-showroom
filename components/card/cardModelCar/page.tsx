import React from "react";

// Pastikan link font Google Fonts sudah ditambahkan di _app.tsx atau di public/index.html

interface CardModelCarProps {
    title: string;
    description: string;
    bgImage?: string;
    buttonText?: string;
    onClick?: () => void;
}

const CardModelCar: React.FC<CardModelCarProps> = ({
    title,
    description,
    bgImage,
    buttonText = "See Details",
    onClick,
}) => {
    return (
        <div
            className="w-[584px] h-[500px] rounded-xl shadow-lg flex flex-col justify-between p-6 relative overflow-hidden"
            style={{
                padding: 24,
                backgroundImage: bgImage ? `url('/images/${bgImage}')` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay for better text visibility */}
            {bgImage && (
                <div className="absolute inset-0 bg-black opacity-30 z-0 rounded-xl transition-transform duration-500 ease-in-out group-hover:scale-110"></div>
            )}
            <div className="relative z-10 flex flex-col h-full">
                <h2
                    className="text-[40px] font-normal mb-8 text-white drop-shadow-lg mr-dafoe-regular"
                >
                    {title}
                </h2>
                <div className="flex-1"></div>
                <p className="text-[23px] text-white drop-shadow mb-8">{description}</p>
                <button
                    className="w-full py-4 bg-[#2fb7dd] text-white font-semibold rounded-lg hover:bg-[#2199bb] transition-colors"
                    onClick={onClick}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default CardModelCar;