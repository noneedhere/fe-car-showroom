import SalesTemplate from "@/components/salesTemplates"
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
       <SalesTemplate title="Car Showroom" id="car" menuList={MenuList}>
           {children}
       </SalesTemplate>
   )
}

export default RootLayout
