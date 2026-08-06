import React from 'react';

const Footer = () => {
    return (
        <div className="bg-[#060B1D] w-full h-[659px] flex flex-col items-center justify-center px-[120px] pt-24 pb-16">
            <div id="footer" className='bg-red w-full h-full flex flex-row gap-44 mb-12 justify-center border-b border-[#9899A6]'>
                <div className='flex flex-col'>
                    <h1 className='text-[24px] mb-7 font-bold'>Porsche</h1>
                    <p className='text-[16px] w-[280px]'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                    <img src="/images/garis-footer.png" alt="" className='w-40 h-auto my-8' />
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-row items-center'>
                            <img src="/images/location.png" alt="" className='w-8 h-auto mr-4' />
                            <p className='text-[16px]'>Kos Kucing, Malang</p>
                        </div>

                        <div className='flex flex-row items-center'>
                            <img src="/images/telp.png" alt="" className='w-8 h-auto mr-4' />
                            <p className='text-[16px]'>+62 812-5237-5524</p>
                        </div>

                        <div className='flex flex-row items-center'>
                            <img src="/images/mail.png" alt="" className='w-8 h-auto mr-4' />
                            <p className='text-[16px]'>akmalngaceng@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <h1 className='text-[24px] font-normal'>Pages</h1>
                    <img src="/images/garis-footer.png" alt="" className='w-40 h-auto mt-5 mb-8' />
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-row items-center'>
                            <img src="/images/arrow-left.png" alt="" className='w-2.5 h-auto mr-4' />
                            <p
                                className='text-[16px] hover:text-[#2fb7dd] cursor-pointer'
                                onClick={() => {
                                    const el = document.querySelector('#section1');
                                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Home
                            </p>
                        </div>

                        <div className='flex flex-row items-center'>
                            <img src="/images/arrow-left.png" alt="" className='w-2.5 h-auto mr-4' />
                            <p
                                className='text-[16px] hover:text-[#2fb7dd] cursor-pointer'
                                onClick={() => {
                                    const el = document.querySelector('#section2');
                                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                About Us
                            </p>
                        </div>

                        <div className='flex flex-row items-center'>
                            <img src="/images/arrow-left.png" alt="" className='w-2.5 h-auto mr-4' />
                            <p
                                className='text-[16px] hover:text-[#2fb7dd] cursor-pointer'
                                onClick={() => {
                                    const el = document.querySelector('#section5');
                                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Car Model
                            </p>
                        </div>

                        <div className='flex flex-row items-center'>
                            <img src="/images/arrow-left.png" alt="" className='w-2.5 h-auto mr-4' />
                            <p
                                className='text-[16px] hover:text-[#2fb7dd] cursor-pointer'
                                onClick={() => {
                                    const el = document.querySelector('#section6');
                                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Testimoni
                            </p>
                        </div>

                        <div className='flex flex-row items-center'>
                            <img src="/images/arrow-left.png" alt="" className='w-2.5 h-auto mr-4' />
                            <p
                                className='text-[16px] hover:text-[#2fb7dd] cursor-pointer'
                                onClick={() => {
                                    const el = document.querySelector('#section7');
                                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Discover
                            </p>
                        </div>

                        <div className='flex flex-row items-center'>
                            <img src="/images/arrow-left.png" alt="" className='w-2.5 h-auto mr-4' />
                            <p
                                className='text-[16px] hover:text-[#2fb7dd] cursor-pointer'
                                onClick={() => {
                                    window.location.href = '/sales/shop';
                                }}
                            >
                                Shop
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <h1 className='text-[24px] font-normal'>Quick Links</h1>
                    <img src="/images/garis-footer.png" alt="" className='w-40 h-auto mt-5 mb-8' />
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-row items-center'>
                            <img src="/images/arrow-left.png" alt="" className='w-2.5 h-auto mr-4' />
                            <p className='text-[16px] hover:text-[#2fb7dd] cursor-pointer'>Car Listing</p>
                        </div>

                        <div className='flex flex-row items-center'>
                            <img src="/images/arrow-left.png" alt="" className='w-2.5 h-auto mr-4' />
                            <p className='text-[16px] hover:text-[#2fb7dd] cursor-pointer'>Car Details</p>
                        </div>

                        <div className='flex flex-row items-center'>
                            <img src="/images/arrow-left.png" alt="" className='w-2.5 h-auto mr-4' />
                            <p className='text-[16px] hover:text-[#2fb7dd] cursor-pointer'>Car</p>
                        </div>

                        <div className='flex flex-row items-center'>
                            <img src="/images/arrow-left.png" alt="" className='w-2.5 h-auto mr-4' />
                            <p className='text-[16px] hover:text-[#2fb7dd] cursor-pointer'
                            >Checkout</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <h1 className='text-[24px] font-normal'>Newslatter</h1>
                    <img src="/images/garis-footer.png" alt="" className='w-40 h-auto mt-5 mb-8' />
                    <div className='flex flex-col gap-5'>
                        <p>Subscribe to our newsletter <br /> and stay updated.</p>
                    </div>

                    <div className='pt-8'>
                        <input
                            type="email"
                            placeholder='Your Email...'
                            className='relative w-[200px] py-[15px] px-6 text-black text-start bg-gray-200 rounded-sm outline-none'
                        />
                    </div>

                    <div className='py-6'>
                        <button className="relative flex flex-row w-[200px] py-[15px] text-center justify-center font-bold border-2 gap-3 border-[#2fb7dd] text-[#2fb7dd] hover:text-white rounded-md overflow-hidden group">
                            <span className="absolute inset-0 w-0 h-full bg-[#2fb7dd] transition-all duration-500 group-hover:w-full border-none"></span>
                            <img src="/images/navigation.png" alt="" className='relative z-10 w-6 h-6 filter-navigation transition-all duration-500 group-hover:filter-navigation-white' />
                            <span className="relative z-10">LEARN MORE</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flow-row justify-between w-full text-gray-600'>
                <p className='items-start justify-center'>© 2025 Zidane Wibu All Right Reserved.</p>
                <div className='flex flex-row gap-28'>
                    <p className='items-start'>Privacy Policy</p>
                    <p className='items-start'>Term & Conditions</p>
                </div>
            </div>
            <style jsx global>{`
                .filter-navigation {
                    filter: brightness(0) saturate(100%) invert(62%) sepia(97%) saturate(749%) hue-rotate(153deg) brightness(97%) contrast(101%);
                }
                .group:hover .filter-navigation,
                .filter-navigation-white {
                    filter: brightness(0) invert(1);
                }
            `}</style>
        </div>
    );
};

export default Footer;