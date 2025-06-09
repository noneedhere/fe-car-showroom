import React from 'react';

const CardTransaction = () => (
    <div className="px-6 py-10 max-w-screen-xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-start flex-wrap gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">Our Featured Car</h2>
          <p className="text-gray-500 text-sm max-w-md mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-5 py-2 rounded shadow text-sm font-medium">
          FIND MORE
        </button>
      </div>

      {/* Grid of cars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-black/90 text-white rounded-xl overflow-hidden shadow-md relative"
          >
            <img
              src="caymancard1.webp"
              alt="Car"
              className="w-full h-52 object-cover"
            />
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-lg font-bold">MODEL NAME</h3>
              <p className="text-sm text-gray-300 leading-snug">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
              </p>
              <div className="flex gap-2 mt-2">
                <button className="bg-white text-black text-sm px-4 py-2 rounded hover:bg-gray-200">
                  Button
                </button>
                <button className="bg-black border border-white text-sm px-4 py-2 rounded hover:bg-white hover:text-black">
                  Button
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
);

export default CardTransaction;