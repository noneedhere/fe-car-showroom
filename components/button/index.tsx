import React, { useState } from "react";

type ButtonProps = {
    type: "button" | "submit" | "reset";
    onClick?: () => void;
    className?: string;
    children: React.ReactNode;
};

export const ButtonSuccess: React.FC<ButtonProps> = ({
    type,
    onClick,
    className,
    children,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-300 focus:outline-none transition-all duration-200 text-sm font-medium ${className || ""}`}
        >
            {children}
        </button>
    );
};

export const ButtonWarning: React.FC<ButtonProps> = ({
    type,
    onClick,
    className,
    children,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-amber-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-amber-600 focus:ring-2 focus:ring-amber-300 focus:outline-none transition-all duration-200 text-sm font-medium ${className || ""}`}
        >
            {children}
        </button>
    );
};

export const ButtonSOutline: React.FC<ButtonProps> = ({
    type,
    onClick,
    className,
    children,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-white text-emerald-600 border border-emerald-200 px-4 py-2 rounded-lg shadow-sm hover:bg-emerald-50 hover:border-emerald-300 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-all duration-200 text-sm font-medium ${className || ""}`}
        >
            {children}
        </button>
    );
};

export const ButtonDOutline: React.FC<ButtonProps> = ({
    type,
    onClick,
    className,
    children,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-white text-red-500 border border-red-200 px-4 py-2 rounded-lg shadow-sm hover:bg-red-50 hover:border-red-300 focus:ring-2 focus:ring-red-200 focus:outline-none transition-all duration-200 text-sm font-medium ${className || ""}`}
        >
            {children}
        </button>
    );
};

export const ButtonIOutline: React.FC<ButtonProps> = ({
    type,
    onClick,
    className,
    children,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-white text-sky-500 border border-sky-200 px-4 py-2 rounded-lg shadow-sm hover:bg-sky-50 hover:border-sky-300 focus:ring-2 focus:ring-sky-200 focus:outline-none transition-all duration-200 text-sm font-medium ${className || ""}`}
        >
            {children}
        </button>
    );
};

export const ButtonDanger: React.FC<ButtonProps> = ({
    type,
    onClick,
    className,
    children,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-red-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-red-600 focus:ring-2 focus:ring-red-300 focus:outline-none transition-all duration-200 text-sm font-medium ${className || ""}`}
        >
            {children}
        </button>
    );
};

// Modal Component
type ModalProps = {
    title: string;
    message: string;
    isOpen: boolean;
    onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({ title, message, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-[1100]">
            <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6">
                <h2 className="text-xl font-bold mb-3 text-text-primary">{title}</h2>
                <p className="mb-5 text-text-secondary text-sm">{message}</p>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 text-sm font-medium transition-colors"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};
