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
        path: `#section1`,
    },
    {
        id: `about`,
        label: `About Us`,
        path: `#section2`,
    },
    {
        id: `model`,
        label: `Car Model`,
        path: `#section5`,
    },
    {
        id: `contact`,
        label: `Contact Us`,
        path: `#footer`,
    },
    {
        id: `shop`,
        label: `Shop`,
        path: `/shop`,
    },
]
export default menuList;