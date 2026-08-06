"use client"

import { ReactNode } from "react"


const Modal = ({ children, isShow, onClose }: { children: ReactNode, isShow: boolean, onClose: (status: boolean) => void }) => {

    const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) onClose(false)
    }
    return (
        <div className={`w-full h-dvh z-[1100] bg-black/50 backdrop-blur-sm fixed top-0 left-0 ${isShow ? `flex` : `hidden`} justify-center items-center`}
            onClick={handleClickOutside}>
            <div className="w-5/6 md:w-4/6 lg:w-3/6 overflow-auto max-h-[90vh] bg-white rounded-2xl shadow-xl">
                {children}
            </div>
        </div>
    )
}
export default Modal
