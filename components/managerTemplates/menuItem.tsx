import React from 'react';
import Link from "next/link"
import { usePathname } from "next/navigation";

interface MenuItemProps {
    icon: React.ReactNode;
    label: string;
    path: string;
}

interface MenuItemProps {
    icon: React.ReactNode;
    label: string;
    path: string;
    active?: boolean;
}

const MenuItem = ({ icon, label, path, active }: MenuItemProps) => {
    const pathname = usePathname();
    const isActive = pathname === path
    return (
        <Link href={path} className={`flex items-center p-2 my-2  hover:text-col3 ${isActive ? 'text-col3' : 'text-black'}`}>
            <span className="mr-3">{icon}</span>
            <span className="flex-1">{label}</span>
        </Link>
    )
}
export default MenuItem;   