'use client'

import React, { useEffect, useState } from 'react';

const HomePage = () => {
    const [name, setName] = useState<string>("");

    useEffect(() => {
        // Ambil nama user dari cookie (bukan localStorage)
        function getCookie(name: string) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop()?.split(';').shift() || "";
            return "";
        }
        const userName = getCookie("name");
        setName(userName);
    }, []);

    return (
        <div className="w-full min-h-[300px] flex flex-col items-center justify-center" style={{ minHeight: "80vh" }}>
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-8xl font-bold text-[#2FB7DD]">
                    Selamat Datang
                </h1>
                <h2 className='m-10 text-7xl font-bold text-[#066079]'>
                    {name}
                </h2>
            </div>
        </div>
    );
};

export default HomePage;