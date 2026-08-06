import SalesTemplate from "@/components/salesTemplates"
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
       <SalesTemplate title="Car Showroom" id="user" menuList={MenuList}>
           {children}
       </SalesTemplate>
   )
}

export default RootLayout
