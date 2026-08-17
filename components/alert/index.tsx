import { ReactNode } from "react"
type Prop = {
    children: ReactNode
    title: string
}
export const AlertInfo = ({ children, title }: Prop) => {
    return (
        <div className="my-2 bg-sky-50 rounded-xl text-sky-800 px-4 py-3 border border-sky-200" role="alert">
            <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                </div>
                <div>
                    <p className="font-semibold text-sm">{title}</p>
                    <div className="text-sm mt-0.5 opacity-80">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const AlertSuccess = ({ children, title }: Prop) => {
    return (
        <div className="my-2 bg-emerald-50 rounded-xl text-emerald-800 px-4 py-3 border border-emerald-200" role="alert">
            <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                <div>
                    <p className="font-semibold text-sm">{title}</p>
                    <div className="text-sm mt-0.5 opacity-80">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const AlertWarning = ({ children, title }: Prop) => {
    return (
        <div className="my-2 bg-amber-50 rounded-xl text-amber-800 px-4 py-3 border border-amber-200" role="alert">
            <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                </div>
                <div>
                    <p className="font-semibold text-sm">{title}</p>
                    <div className="text-sm mt-0.5 opacity-80">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const AlertDanger = ({ children, title }: Prop) => {
    return (
        <div className="my-2 bg-red-50 rounded-xl text-red-800 px-4 py-3 border border-red-200" role="alert">
            <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                </div>
                <div>
                    <p className="font-semibold text-sm">{title}</p>
                    <div className="text-sm mt-0.5 opacity-80">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}