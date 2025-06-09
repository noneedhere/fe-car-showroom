import React from 'react';

interface DiscoverItemProps {
    icon?: string;
    title?: string;
    description?: string;
    bgImage: string;
}

const CardDiscover = ({ icon, title, description, bgImage }: DiscoverItemProps) => {
    return (
        <div
            className="w-[384px] h-[300px] rounded-xl flex flex-col justify-end p-8 relative"
            style={{ backgroundImage: `url('/images/${bgImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex flex-row items-center justify-between w-full relative z-20">
                <div className="flex flex-row items-center gap-4">
                    {icon && (
                        <img src={`/images/${icon}`} className="w-10 h-10 object-contain" alt="icon" />
                    )}
                    <h3 className="text-lg font-semibold text-white mb-0">{title}</h3>
                </div>
                <img src="/images/Vector.png" alt="arrow right" className="w-3 h-auto object-contain" />
            </div>
            {description && (
                <p className="text-gray-100 text-sm mt-4 relative z-20">{description}</p>
            )}
        </div>
    );
};

export default CardDiscover;
