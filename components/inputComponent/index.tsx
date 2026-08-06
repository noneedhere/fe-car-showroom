"use client"

import { KeyboardEvent, ReactNode } from "react"

type Props = {
    value: string, 
    onChange: (value: string) => void
    type: "text" | "number" | "color" | "email" | "password" | "date"
    className?: string
    id: string
    required?: boolean
    placeholder?: string
    readOnly?: boolean
    children?: ReactNode
    label?: string
    onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void
 }

 export const InputComponent = ({ value, onChange, type, className, id, required, placeholder, onKeyUp }: Props) => {
    return (
        <input type={type} id={id} value={value} onChange={e => onChange(e.target.value)}
            className={`text-sm w-full rounded-lg p-2.5 bg-gray-50 border border-gray-200 text-text-primary focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all ${className || ""}`}
            required={required ? required : false} placeholder={placeholder || ""} onKeyUp={e => {
                if (onKeyUp) onKeyUp(e)
            }} />
    )
 }

 export const InputGroupComponent = ({ value, onChange, type, className, id, required, placeholder, children, label, onKeyUp, readOnly }: Props) => {
    return (
        <div className="w-full flex flex-col gap-1.5 my-2">
            <label htmlFor={id} className="text-xs font-semibold text-text-secondary">{label}{required == true ? <sup className="text-red-500 ml-0.5">*</sup> : <></>}</label>
            <div className="w-full flex items-center gap-1 bg-gray-50 border-gray-200 rounded-lg border focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20 transition-all">
                {
                    children ?
                        <div className="">
                            {children}
                        </div> : <div className=""></div>
                }
                <input type={type} id={id} value={value} onChange={e => onChange(e.target.value)}
                    className={`text-sm w-full rounded-r-lg p-2.5 bg-transparent focus:outline-none text-text-primary ${className || ""}`}
                    required={required ? required : false} placeholder={placeholder || ""}
                    readOnly={readOnly ? readOnly : false} onKeyUp={e => {
                        if (onKeyUp) onKeyUp(e)
                    }} />
            </div>
        </div>
 
    )
 }

 export const TextGroupComponent = ({ value, onChange, className, id, required, placeholder, label }: Props) => {
    return (
        <div className="w-full flex flex-col gap-1.5 my-2">
            <label htmlFor={id} className="text-xs font-semibold text-text-secondary">
                {label}
                {required == true ? <sup className="text-red-500 ml-0.5">*</sup> : <></>}
            </label>
            <div className="w-full flex items-center gap-1 bg-gray-50 border-gray-200 rounded-lg border focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20 transition-all">
                <textarea id={id} value={value} cols={10} rows={3} onChange={e => onChange(e.target.value)}
                    className={`text-sm w-full rounded-lg p-2.5 bg-transparent focus:outline-none text-text-primary ${className || ""}`}
                    required={required ? required : false} placeholder={placeholder || ""} />
            </div>
        </div>
 
    )
 }
 