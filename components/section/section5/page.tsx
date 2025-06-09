import React from 'react';
import Link from 'next/link';


const Section5 = () => (
    <div className="px-50 py-10 min-w-full mx-auto bg-slate-100">
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
      <div className="grid grid-cols-2 gap-6 p-10">

        {/* CARD 1 */}
          <div className="group bg-slate-50 text-[#181818] rounded-xl overflow-hidden shadow-sm relative w-[600px] p-10">

            {/* Wrapper for images */}
            <div className="relative h-64 p-10">

            <img
                src="/images/caymancard1.webp"
                alt="Car"
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            />

            <img
                src="/images/caymancard2.webp"
                alt="Car Hover"
                className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
            />
            </div>

            <div className="flex flex-col justify-between gap-1 mt-4">

                <h3 className="text-xl font-bold">718 Cayman</h3>
                <p className="text-sm text-slate-700 leading-snug pb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                <h3 className="text-lg font-bold">300 hp</h3>
                <p className="text-sm text-slate-700 leading-snug pb-2">Max Engine Power</p>

                <h3 className="text-lg font-bold">4,7 s</h3>
                <p className="text-sm text-slate-700 leading-snug pb-2">0-60 Mph</p>

                <h3 className="text-lg font-bold">171 Mph</h3>
                <p className="text-sm text-slate-700 leading-snug pb-4">Top track speed (with summer tires)</p>
            </div>

            <div className='py-3 font-medium'>
              <Link href="/sales/transaction/model1" passHref>
                <button
                className="w-full bg-cyan-400 text-white text-sm px-8 py-3 rounded border transition-all duration-300 transform hover:scale-105">
                Get Your Porsche
                </button>
              </Link>
            </div>
            </div>

            {/* CARD 2 */}
          <div className="group bg-slate-50 text-[#181818] rounded-xl overflow-hidden shadow-sm relative w-[600px] p-10">

            {/* Wrapper for images */}
            <div className="relative h-64 p-10">

            <img
                src="/images/1card911GT.webp"
                alt="Car"
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            />

            <img
                src="/images/2card911GT.webp"
                alt="Car Hover"
                className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
            />
            </div>

            <div className="flex flex-col justify-between gap-1 mt-4">

                <h3 className="text-xl font-bold">911 GT3</h3>
                <p className="text-sm text-slate-700 leading-snug pb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                <h3 className="text-lg font-bold">300 hp</h3>
                <p className="text-sm text-slate-700 leading-snug pb-2">Max Engine Power</p>

                <h3 className="text-lg font-bold">4,7 s</h3>
                <p className="text-sm text-slate-700 leading-snug pb-2">0-60 Mph</p>

                <h3 className="text-lg font-bold">171 Mph</h3>
                <p className="text-sm text-slate-700 leading-snug pb-4">Top track speed (with summer tires)</p>
            </div>

            <div className='py-3 font-medium'>
                <Link href="/sales/transaction/model2" passHref>
                <button
                className="w-full bg-cyan-400 text-white text-sm px-8 py-3 rounded border transition-all duration-300 transform hover:scale-105">
                Get Your Porsche
                </button>
              </Link>
            </div>
            </div>

            {/* CARD 3 */}
          <div className="group bg-slate-50 text-[#181818] rounded-xl overflow-hidden shadow-sm relative w-[600px] p-10">

            {/* Wrapper for images */}
            <div className="relative h-64 p-10">

            <img
                src="/images/tscard1.webp"
                alt="Car"
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            />

            <img
                src="/images/tscard2.webp"
                alt="Car Hover"
                className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
            />
            </div>

            <div className="flex flex-col justify-between gap-1 mt-4">

                <h3 className="text-xl font-bold">Taycan</h3>
                <p className="text-sm text-slate-700 leading-snug pb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                <h3 className="text-lg font-bold">300 hp</h3>
                <p className="text-sm text-slate-700 leading-snug pb-2">Max Engine Power</p>

                <h3 className="text-lg font-bold">4,7 s</h3>
                <p className="text-sm text-slate-700 leading-snug pb-2">0-60 Mph</p>

                <h3 className="text-lg font-bold">171 Mph</h3>
                <p className="text-sm text-slate-700 leading-snug pb-4">Top track speed (with summer tires)</p>
            </div>

            <div className='py-3 font-medium'>
                <Link href="/sales/transaction/model3" passHref>
                <button
                className="w-full bg-cyan-400 text-white text-sm px-8 py-3 rounded border transition-all duration-300 transform hover:scale-105">
                Get Your Porsche
                </button>
              </Link>
            </div>
            </div>

            {/* CARD 4 */}
          <div className="group bg-slate-50 text-[#181818] rounded-xl overflow-hidden shadow-sm relative w-[600px] p-10">

            {/* Wrapper for images */}
            <div className="relative h-64 p-10">

            <img
                src="/images/spydercard1.webp"
                alt="Car"
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            />

            <img
                src="/images/spydercard2.webp"
                alt="Car Hover"
                className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
            />
            </div>

            <div className="flex flex-col justify-between gap-1 mt-4">

                <h3 className="text-xl font-bold">718 Spyder RS</h3>
                <p className="text-sm text-slate-700 leading-snug pb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                <h3 className="text-lg font-bold">300 hp</h3>
                <p className="text-sm text-slate-700 leading-snug pb-2">Max Engine Power</p>

                <h3 className="text-lg font-bold">4,7 s</h3>
                <p className="text-sm text-slate-700 leading-snug pb-2">0-60 Mph</p>

                <h3 className="text-lg font-bold">171 Mph</h3>
                <p className="text-sm text-slate-700 leading-snug pb-4">Top track speed (with summer tires)</p>
            </div>

            <div className='py-3 font-medium'>
                <Link href="/sales/transaction/model4" passHref>
                <button
                className="w-full bg-cyan-400 text-white text-sm px-8 py-3 rounded border transition-all duration-300 transform hover:scale-105">
                Get Your Porsche
                </button>
              </Link>
            </div>
            </div>


      </div>
    </div>
);

export default Section5;