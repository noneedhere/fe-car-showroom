"use client"

import { ReactNode } from "react";
import Sidebar from "./navbar";

type MenuType = {
    id: string,
    icon: ReactNode
    path: string,
    label: string
}

type AdminProp = {
    children: ReactNode,
    id: string,
    title: string,
    menuList: MenuType[]
}

const AdminTemplate = ({ children, id, title, menuList }: AdminProp) => {
    return (
        <div className="">
            <Sidebar menuList={menuList} title={title} id={id}>
                {children}
            </Sidebar>
        </div>
    )
}


export default AdminTemplate
