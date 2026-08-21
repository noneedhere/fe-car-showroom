"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState, useEffect } from "react";
import Logo from "../../public/images/Logo.png";
import './navbar.css';

type MenuType = {
    id: string;
    path: string;
    label: string;
};

type SidebarProps = {
    children: ReactNode;
    id: string;
    title: string;
    menuList: MenuType[];
};

const Sidebar = ({ children, id, title, menuList }: SidebarProps) => {
    const [isManager, setIsManager] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        function getCookie(name: string) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop()?.split(';').shift() || "";
            return "";
        }
        const role = getCookie("role");
        if (role === "MANAGER") setIsManager(true);
    }, []);

    return (
        <div className="text-black bg-transparent w-full m-0 p-0">
            {/* Navbar section */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-sm flex justify-between items-center px-8 lg:px-16 py-4">
                <div className="flex items-center">
                    <Image src={Logo} alt="Logo" width={50} height={50} className="rounded-xl" />
                </div>

                {/* Mobile hamburger */}
                <button
                    className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18 18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
                    </svg>
                </button>

                {/* Desktop menu */}
                <ul className="hidden lg:flex gap-10 ml-10 px-16 items-center">
                    {menuList.map((item, index) => (
                        <li key={index} className="relative group">
                            <a
                                href={item.path}
                                className={`uppercase font-bold transition-colors text-sm ${item.id === id
                                    ? "text-[#2fb7dd]"
                                    : "text-black hover:text-[#2fb7dd]"
                                    }`}
                            >
                                {item.label}
                            </a>

                            <span
                                className={`absolute left-0 bottom-[-5px] h-[3px] transition-all duration-500 ${item.id === id
                                    ? "w-full bg-[#2fb7dd]"
                                    : "w-0 group-hover:w-full group-hover:bg-[#2fb7dd]"
                                    }`}
                            ></span>
                        </li>
                    ))}

                    {/* Admin Panel button — only visible to MANAGER role */}
                    {isManager && (
                        <li>
                            <Link
                                href="/manager/dashboard"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f172a] text-white rounded-lg text-xs font-semibold uppercase hover:bg-[#1e293b] transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                </svg>
                                Admin Panel
                            </Link>
                        </li>
                    )}
                </ul>

                {/* Mobile menu dropdown */}
                {menuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-50 lg:hidden">
                        <ul className="flex flex-col p-4 gap-2">
                            {menuList.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.path}
                                        className="block px-4 py-3 text-black uppercase font-bold hover:text-[#2fb7dd] hover:bg-gray-50 rounded-lg transition-colors text-sm"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                            {isManager && (
                                <li>
                                    <Link
                                        href="/manager/dashboard"
                                        className="flex items-center gap-2 px-4 py-3 bg-[#0f172a] text-white rounded-lg text-xs font-semibold uppercase hover:bg-[#1e293b] transition-colors"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                        </svg>
                                        Admin Panel
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </nav>
            {/* End navbar section */}

            <div className="w-full m-0 p-0">{children}</div>
        </div>
    );
};

export default Sidebar;
