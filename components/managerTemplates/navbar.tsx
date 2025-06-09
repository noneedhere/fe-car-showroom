"use client";

import Image from "next/image";
import { ReactNode } from "react";
import Logo from "../../public/images/logo2.png";
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
                  {/* Navbar */}
      <nav className="w-full border-b shadow-sm px-10 py-6 flex items-center justify-between text-sm bg-slate-50">
        {/* Left Section */}
        <div className="flex items-center gap-4 text-[#181818]">
          <button className="flex items-center gap-1">
            <span className="text-xl">☰</span>
            <span className="text-lg">Menu</span>
          </button>
          <button className="flex items-center gap-1">← <span>Change model</span></button>
          {/* <button className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.75 6L7.5 5.25H16.5L17.25 6V19.3162L12 16.2051L6.75 19.3162V6ZM8.25 6.75V16.6838L12 14.4615L15.75 16.6838V6.75H8.25Z" fill="#080341" />
            </svg>
            <span>Save</span>
          </button>
          <button className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <span>Create Porsche Code</span>
          </button> */}
        </div>

        {/* Center Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img src="/images/logoo.png" alt="Porsche" className="h-[15px]" />
      </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 text-[#181818] text-lg">
          <div className="text-right">
            <div className="flex items-center gap-1">
              <span>$2,743.45</span>
              <span className="text-xs text-gray-500">/mo</span>
            </div>
            <div className="text-xs text-gray-500 leading-none">Calculate monthly pay...</div>
          </div>
          <div className="text-right">
            <div>$154,150</div>
            <div className="text-xs text-gray-500 leading-none">All information is subj...</div>
          </div>
          <button className="border-2 px-6 py-4 rounded">Summary</button>
        </div>
      </nav>

            <div className="w-full m-0 p-0">{children}</div>
        </div>
    );
};

export default Sidebar;
