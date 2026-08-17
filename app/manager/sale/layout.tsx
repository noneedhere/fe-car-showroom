import AdminTemplate from "@/components/managerTemplates"
import MenuList from "../menuList"

export const metadata = {
   title: 'Sales Management | Car Showroom',
   description: 'Manage sales records',
}

type PropsLayout = {
   children: React.ReactNode
}

const RootLayout = ({ children }: PropsLayout) => {
   return (
       <AdminTemplate title="Car Showroom" id="sale" menuList={MenuList}>
           {children}
       </AdminTemplate>
   )
}

export default RootLayout
