import SalesTemplate from "@/components/salesTemplates";
import menuList from "../menuList";

export const metadata = {
    title: 'Shop | Car Showroom',
    description: 'Browse and purchase your dream car',
};

type PropsLayout = {
    children: React.ReactNode;
};

const RootLayout = ({ children }: PropsLayout) => {
    return (
        <SalesTemplate title="Car Showroom" id="shop" menuList={menuList}>
            {children}
        </SalesTemplate>
    )
}

export default RootLayout;