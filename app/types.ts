// types.ts

export type Role = 'MANAGER' | 'SALES';
export type Category = 'SPORT' | 'FAMILY';

export interface User {
    id_user: number;
    uuid: string;
    name: string;
    email: string;
    password: string;
    profilePicture: string;
    role: Role;
    createdAt: string;
    updatedAt: string;
}

export interface Car {
    id_car: number;
    uuid: string;
    name: string;
    category: Category;
    year: number;
    price: number;
    image?: string;
    description?: string;
    createdAt: string;
    updatedAt: string;
}

export interface Sale {
    id_sale: number;
    uuid: string;
    buyerName: string;
    saleDate: string;
    carId: number;
    userId: number;
    total_price: number;
    createdAt: string;
    updatedAt: string;
}

export interface SaleList {
    id_saleList: number;
    uuid: string;
    quantity: number;
    note: string;
    carId?: number;
    saleId?: number;
    createdAt: string;
    updatedAt: string;
}