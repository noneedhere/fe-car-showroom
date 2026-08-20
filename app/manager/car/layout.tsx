import AdminTemplate from "@/components/managerTemplates"
import MenuList from "../menuList"
import ToastProvider from "@/components/toast/indec"

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
         <ToastProvider />
         {children}
      </AdminTemplate>
   )
}

export default RootLayout
