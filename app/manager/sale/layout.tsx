import SalesTemplate from "@/components/salesTemplates"
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
       <SalesTemplate title="Car Showroom" id="sale" menuList={MenuList}>
           {children}
       </SalesTemplate>
   )
}

export default RootLayout
