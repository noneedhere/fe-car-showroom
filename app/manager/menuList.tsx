import { ReactNode } from "react";

interface IPropMenu {
    id: string,
    path: string,
    label: string,
}


let menuList: IPropMenu[] = [
    {
        id: `home`,
        label: `Home`,
        path: `/manager/dashboard`,
    },
    {
        id: `user`,
        label: `User`,
        path: `/manager/user`,
    },
    {
        id: `car`,
        label: `Car`,
        path: `/manager/car`,
    },
    {
        id: `sale`,
        label: `Sale`,
        path: `/manager/sale`,
    },
    {
        id: `login`,
        label: `Logout`,
        path: `/login`,
    },
]
export default menuList;