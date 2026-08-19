'use client'
import { ReactNode, useEffect, useState, useCallback } from "react"

type Prop = {
    children: ReactNode
    title: string
    duration?: number
}

/** Shared countdown bar rendered at the bottom of every alert */
const CountdownBar = ({ duration, color }: { duration: number; color: string }) => (
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/10 rounded-b-md overflow-hidden">
        <div
            className="h-full rounded-b-md"
            style={{
                background: color,
                animation: `alertCountdown ${duration}ms linear forwards`,
            }}
        />
    </div>
)

/** Close button in the top-right corner */
const CloseButton = ({ onClick, color }: { onClick: () => void; color: string }) => (
    <button
        type="button"
        onClick={onClick}
        className="ml-auto flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
        aria-label="Close alert"
        style={{ color }}
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    </button>
)

export const AlertInfo = ({ children, title, duration = 5000 }: Prop) => {
    const [show, setShow] = useState(true)
    const dismiss = useCallback(() => setShow(false), [])
    useEffect(() => {
        const timer = setTimeout(dismiss, duration)
        return () => clearTimeout(timer)
    }, [duration, dismiss])
    if (!show) return null;
    return (
        <div className="my-2 bg-sky-200 rounded-md text-sky-800 px-4 py-3 shadow-md border-l-4 border-sky-800 relative overflow-hidden" role="alert">
            <div className="flex gap-1 items-start">
                <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                </div>
                <div className="flex-1 min-w-0">
                    <p className="font-bold text-lg">{title}</p>
                    <div className="text-sm">{children}</div>
                </div>
                <CloseButton onClick={dismiss} color="#0c4a6e" />
            </div>
            <CountdownBar duration={duration} color="#0369a1" />
        </div>
    )
}

export const AlertSuccess = ({ children, title, duration = 5000 }: Prop) => {
    const [show, setShow] = useState(true)
    const dismiss = useCallback(() => setShow(false), [])
    useEffect(() => {
        const timer = setTimeout(dismiss, duration)
        return () => clearTimeout(timer)
    }, [duration, dismiss])
    if (!show) return null;
    return (
        <div className="my-2 bg-green-200 rounded-md text-green-800 px-4 py-3 shadow-md border-l-4 border-green-800 relative overflow-hidden" role="alert">
            <div className="flex gap-1 items-start">
                <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                </div>
                <div className="flex-1 min-w-0">
                    <p className="font-bold text-lg">{title}</p>
                    <div className="text-sm">{children}</div>
                </div>
                <CloseButton onClick={dismiss} color="#166534" />
            </div>
            <CountdownBar duration={duration} color="#15803d" />
        </div>
    )
}

export const AlertWarning = ({ children, title, duration = 5000 }: Prop) => {
    const [show, setShow] = useState(true)
    const dismiss = useCallback(() => setShow(false), [])
    useEffect(() => {
        const timer = setTimeout(dismiss, duration)
        return () => clearTimeout(timer)
    }, [duration, dismiss])
    if (!show) return null;
    return (
        <div className="my-2 bg-yellow-100 rounded-md text-yellow-800 px-4 py-3 shadow-md border-l-4 border-yellow-400 relative overflow-hidden" role="alert">
            <div className="flex gap-1 items-start">
                <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                </div>
                <div className="flex-1 min-w-0">
                    <p className="font-bold text-lg">{title}</p>
                    <div className="text-sm">{children}</div>
                </div>
                <CloseButton onClick={dismiss} color="#854d0e" />
            </div>
            <CountdownBar duration={duration} color="#ca8a04" />
        </div>
    )
}

export const AlertDanger = ({ children, title, duration = 5000 }: Prop) => {
    const [show, setShow] = useState(true)
    const dismiss = useCallback(() => setShow(false), [])
    useEffect(() => {
        const timer = setTimeout(dismiss, duration)
        return () => clearTimeout(timer)
    }, [duration, dismiss])
    if (!show) return null;
    return (
        <div className="my-2 bg-red-200 rounded-md text-red-800 px-4 py-3 shadow-md border-l-4 border-red-800 relative overflow-hidden" role="alert">
            <div className="flex gap-1 items-start">
                <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                </div>
                <div className="flex-1 min-w-0">
                    <p className="font-bold text-lg">{title}</p>
                    <div className="text-sm">{children}</div>
                </div>
                <CloseButton onClick={dismiss} color="#991b1b" />
            </div>
            <CountdownBar duration={duration} color="#dc2626" />
        </div>
    )
}