import AdminTemplate from "@/components/managerTemplates"
import MenuList from "../menuList"

export const metadata = {
   title: 'Car Management | Car Showroom',
   description: 'Manage car showroom inventory',
}

type PropsLayout = {
   children: React.ReactNode
}

const RootLayout = ({ children }: PropsLayout) => {
   return (
       <AdminTemplate title="Car Showroom" id="car" menuList={MenuList}>
           {children}
       </AdminTemplate>
   )
}

export default RootLayout
