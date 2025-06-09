export interface ICar {
    id_car: number,
    uuid: string,
    name: string,
    price: number,
    year: number,
    image: string,
    description: string,
    category: string,
    createdAt: string,
    updatedAt: string
}

export interface IUser {
    id_User: number,
    uuid: string,
    name: string,
    email: string,
    password: string,
    profilePicture: string,
    role: string,
    createdAt: string,
    updatedAt: string
}

export interface ISale {
    orderLists: any;
    id_sale: number;
    uuid: string;
    buyerName: string;
    total_price: number;
    createdAt: string;
    updatedAt: string;
    userId: number;
}


export interface ISaleList {
    id_saleList: number;
    uuid: string;
    quantity: number;
    note: string;
    createdAt: string;
    updatedAt: string;
    carId?: number;
    saleId?: number;
}
