import AdminTemplate from "@/components/salesTemplates";
import menuList from "../menuList";

export const metadata = {
    title: 'Dashboard | Car Showroom',
    description: 'Car Showroom management dashboard overview',
};

type PropsLayout = {
    children: React.ReactNode;
};

const RootLayout = ({ children }: PropsLayout) => {
    return (
        <AdminTemplate title="Car Showroom" id="dashboard" menuList={menuList}>
            {children}
        </AdminTemplate>
    )
}

export default RootLayout;