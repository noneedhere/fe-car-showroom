import AdminTemplate from "@/components/managerTemplates"
import MenuList from "../menuList"

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
           {children}
       </AdminTemplate>
   )
}

export default RootLayout
