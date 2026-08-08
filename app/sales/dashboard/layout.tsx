import SalesTemplate from "@/components/salesTemplates";
import MenuList from "../menuList";

export const metadata = {
    title: 'Home | Car Showroom',
    description: 'Car Showroom - Browse and shop for your dream car',
};

type PropsLayout = {
    children: React.ReactNode;
};

const RootLayout = ({ children }: PropsLayout) => {
    return (
        <SalesTemplate title="Car Showroom" id="home" menuList={MenuList}>
            {children}
        </SalesTemplate>
    )
}

export default RootLayout;