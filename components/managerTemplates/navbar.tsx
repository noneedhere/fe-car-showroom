"use client";

import Image from "next/image";
import { ReactNode } from "react";
import Logo from "../../public/images/Logo.png";
import './navbar.css';

// tailwindcss: bg-dasar1
type MenuType = {
    id: string;
    icon: ReactNode;
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
    return (
        <div className="text-white h-screen w-full m-0 p-0">
            {/* Navbar section */}
            <nav className="w-full flex justify-between items-center px-16 py-4 m-0">
                <div className="flex items-center">
                    <Image src={Logo} alt="Logo" width={50} height={50} className="rounded-xl" />
                </div>
                <ul className="flex gap-10 ml-10 px-16">
                    {menuList.map((item, index) => (
                        <li key={index} className="relative group">
                            <a
                                href={item.path}
                                className="text-white uppercase font-bold hover:text-[#2fb7dd] transition-colors"
                            >
                                {item.label}
                            </a>
                            <span
                                className={`absolute left-0 bottom-[-5px] h-[3px] w-0 bg-[#2fb7dd] group-hover:w-full transition-all duration-500 ${
                                    item.id === id ? "w-full" : ""
                                }`}
                            ></span>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* End navbar section */}

            <div className="w-full m-0 p-0">{children}</div>
        </div>
    );
};

export default Sidebar;
