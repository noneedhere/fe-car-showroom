import AdminTemplate from "@/components/managerTemplates"
import MenuList from "../menuList"
import ToastProvider from "@/components/toast/indec"

export const metadata = {
   title: 'User Management | Car Showroom',
   description: 'Manage user accounts',
}

type PropsLayout = {
   children: React.ReactNode
}

const RootLayout = ({ children }: PropsLayout) => {
   return (
       <AdminTemplate title="Car Showroom" id="user" menuList={MenuList}>
           <ToastProvider />
           {children}
       </AdminTemplate>
   )
}

export default RootLayout
