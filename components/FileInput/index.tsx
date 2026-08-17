"use client"
import React from "react";
import { useState } from "react";
import { AlertWarning } from "../alert";

type Props = {
    disabled?: boolean,
    acceptTypes: string[],
    onChange: (file: File | null) => void,
    className?: string,
    required: boolean,
    id?: string,
    label?: string,
    maxSize?: number
}

const FileInput = (props: Props) => {
    const [message, setMessage] = useState("")
    const limitSize = props.maxSize || 2048
    const acceptTypes = props.acceptTypes.join()
    const handleFileInput = (event: React.ChangeEvent, callback: (data: File | null) => void): void => {
        const target = event.target as HTMLInputElement
        let currentFile: File = (target.files as FileList)[0]
        setMessage("")
        if (!props.acceptTypes.includes(currentFile.type)) {
            target.value = ""
            setMessage(`'${currentFile.type}' is invalid file type. The allow file type are ${acceptTypes}`)
            callback(null)
            return;
        }
        if (currentFile.size > (2 * 1024 * 1024)) {
            target.value = ""
            setMessage(`Your file is oversize`)
            callback(null)
            return;
        }
        callback(currentFile)
    }


    return (
        <div className="w-full flex flex-col gap-1.5 my-2">
            <strong className="text-xs font-semibold text-text-secondary">{props.label}</strong>
            <input type={`file`}
                className={`text-sm w-full rounded-lg p-2.5 bg-gray-50 border border-gray-200 text-text-primary focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-accent/10 file:text-accent hover:file:bg-accent/20 transition-all ${props.className || ""}`}
                disabled={props.disabled}
                required={props.required || false}
                accept={acceptTypes}
                id={props.id}
                onChange={e => handleFileInput(e, props.onChange)} />
            {
                message !== "" ?
                    <AlertWarning title="Warning">
                        {message}
                    </AlertWarning> : <></>
            }
        </div>
    )
}

export default FileInput
