"use client"

import { ReactNode } from "react"

type Props = {
    value: string
    onChange: (value: string) => void
    className?: string
    id: string
    required?: boolean
    children: ReactNode
    label?: string
}

const Select = ({ value, onChange, className, id, required, children, label }: Props) => {
    return (
        <div className="flex flex-col my-2 gap-1.5">
            {
                label ?
                    <label htmlFor={id} className="text-xs font-semibold text-text-secondary">
                        {label}
                        {required == true ? <sup className="text-red-500 ml-0.5">*</sup> : <></>}
                    </label> :
                    <></>
            }
            <select id={id} value={value} onChange={e => onChange(e.target.value)}
                required={required || false}
                className={`w-full rounded-lg px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 text-text-primary focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none appearance-none transition-all cursor-pointer ${className || ""}`}>
                {children}
            </select>
        </div>
    )
}
export default Select
