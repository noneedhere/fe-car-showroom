import React from 'react';

interface FeatureItemProps {
    icon: string;
    title: string;
    description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => {
    return (
        <div className="flex items-start">
            <div className="mr-4 flex-shrink-0">
                <img src={`/images/${icon}`} alt={title} className="w-10 h-10 object-contain" />
            </div>
            <div>
                <h3 className="text-lg font-semibold text-black">{title}</h3>
                <p className="text-gray-400">{description}</p>
            </div>
        </div>
    );
};

export default FeatureItem;
