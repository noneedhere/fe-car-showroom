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
        path: `/sales/dashboard`,
    },
    {
        id: `user`,
        label: `User`,
        path: `/sales/user`,
    },
    {
        id: `model`,
        label: `Car`,
        path: `#section5`,
    },
    {
        id: `contact`,
        label: `Sale`,
        path: `#footer`,
    },
    {
        id: `transactions`,
        label: `Shop`,
        path: `/transactions`,
    },
]
export default menuList;