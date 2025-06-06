"use client"
import { BASE_API_URL } from "@/global"
// import { storeCookie } from "@/lib/client-cookies"
import axios from "axios"
import Image from "next/image"
import COVER_IMAGE from "@/public/images/cover-image.jpg"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
// import { ToastContainer, toast } from "react-toastify"

const LoginPage = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const router = useRouter()

    // const handleSubmit = async (e: FormEvent) => {
    //     try {
    //         e.preventDefault()
    //         const url = `${BASE_API_URL}/user/login`
    //         const payload = JSON.stringify({ email: email, password })
    //         const { data } = await axios.post(url, payload, {
    //             headers: { "Content-Type": "application/json" }
    //         })
    //         if (data.status == true) {
    //             toast(data.message, { hideProgressBar: true, containerId: `toastLogin`, type: "success", autoClose: 2000 })
    //             storeCookie("token", data.token)
    //             storeCookie("id", data.data.id)
    //             storeCookie("name", data.data.name)
    //             storeCookie("role", data.data.role)
    //             let role = data.data.role
    //             if (role === `MANAGER`) setTimeout(() => router.replace(`/manager/dashboard`), 1000)
    //             else if (role === `CASHIER`) setTimeout(() => router.replace(`/cashier/dashboard`), 1000)
    //         }
    //         else toast(data.message, { hideProgressBar: true, containerId: `toastLogin`, type: "warning" })
    //     } catch (error) {
    //         console.log(error);
    //         toast(`Something wrong`, { hideProgressBar: true, containerId: `toastLogin`, type: "error" })
    //     }
    // }
    return (
        <div className='w-full h-screen flex items-start'>
            <div className='w-1/2 h-full bg-[#f5f5f5] flex items-center justify-center p-20'>
                <div className='w-full flex flex-col min-w-[450px]'>
                    <div className='w-full flex flex-col mb-10'>
                        <h1 className='text-4xl text-[#2FB7DD] font-bold my-2'>Welcome Back</h1>
                        <p className='text-sm text-slate-500 font-normal'>Access your account and enjoy our services!</p>
                    </div>

                    <div className='w-full flex flex-col mb-10'>
                        <p className='text-black'>Email</p>
                        <input
                            type="email"
                            placeholder='yourmail@gmail.com'
                            className='w-full p-3 text-black py-4 my-4 bg-gray-200 rounded-xl outline-none'
                        />

                        <p className='text-black'>Password</p>
                        <input
                            type="password"
                            placeholder='********'
                            className='w-full p-3 text-black py-4 my-4 bg-gray-200 rounded-xl outline-none'
                        />
                    </div>

                    <div className='w-full flex items-center'>
                        <button className='w-full max-h-12 bg-[#2fb7dd] rounded-xl p-4 text-center flex items-center justify-center'>
                            Login
                        </button>
                    </div>
                </div>
            </div>



            <div className='relative w-2/3 h-full flex flex-col'>
                <Image src={COVER_IMAGE} alt="Cover" className='w-full h-full object-cover' />
            </div>
        </div>
    );
}
export default LoginPage