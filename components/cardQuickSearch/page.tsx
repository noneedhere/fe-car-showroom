import React from 'react';

const VehicleSearch: React.FC = () => {
    return (
        <div className="bg-[#d9d9d9] shadow-xl text-black rounded-lg w-[978px] h-[400px] p-[87px] mx-auto mt-10 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center mb-0 mt-[45px]">Quick Vehicle Search</h1>
            <form className="flex flex-col items-center w-full h-full justify-center mt-[55px]">
                <div className='flex flex-row items-center justify-center gap-[75px] w-auto' style={{marginLeft: 'auto', marginRight: 'auto'}}> 
                    <div className='flex flex-col items-start'>
                        <label className="block text-md font-medium mb-0">Vehicle Body Type</label>
                        <select className="border-gray-300 rounded-md p-2 mt-2 h-12 w-[337px] text-start bg-white">
                            <option className="py-2">All Models</option>
                            <option className="py-2">SUV</option>
                            <option className="py-2">Sedan</option>
                            <option className="py-2">Truck</option>
                            <option className="py-2">Coupe</option>
                            <option className="py-2">Convertible</option>
                        </select>
                    </div>
                    <div className='flex flex-col items-start'>
                        <label className="block text-md font-medium mb-0 text-start w-full">Category</label>
                        <select className="border-gray-300 rounded-md p-2 mt-2 h-12 w-[337px] text-start bg-white">
                            <option className="py-2">All Models</option>
                            <option className="py-2">Luxury</option>
                            <option className="py-2">Economy</option>
                            <option className="py-2">Sport</option>
                            <option className="py-2">Electric</option>
                        </select>
                    </div>
                </div>
                <button
                    type='submit' className="relative w-[200px] py-[15px] text-center font-bold border-2 border-[#2fb7dd] text-white duration-100 rounded-md overflow-hidden group mt-[65px]">
                    <span className="absolute inset-0 w-0 h-full bg-[#2fb7dd] transition-all duration-500 group-hover:w-full border-none"></span>
                    <span className="relative z-10">FIND IT NOW</span>
                </button>
            </form>
        </div>
    );
};

export default VehicleSearch;
