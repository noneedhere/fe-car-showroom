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
        path: `/sales/dashboard#section1`,
    },
    {
        id: `about`,
        label: `About Us`,
        path: `/sales/dashboard#section2`,
    },
    {
        id: `model`,
        label: `Car Model`,
        path: `/sales/dashboard#section5`,
    },
    {
        id: `contact`,
        label: `Contact Us`,
        path: `/sales/dashboard#footer`,
    },
    {
        id: `shop`,
        label: `Shop`,
        path: `/sales/shop`,
    },
    {
        id: `login`,
        label: `Logout`,
        path: `/login`,
    },
]
export default menuList;