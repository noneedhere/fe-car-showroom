"use client"
import { BASE_API_URL } from "@/global"
import { storeCookie } from "@/lib/client-cookies"
import axios from "axios"
import Image from "next/image"
import COVER_IMAGE from "@/public/images/cover-image.jpg"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { ToastContainer, toast } from "react-toastify"

const LoginPage = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const router = useRouter()

    const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
        const url = `${BASE_API_URL}/login`
        const payload = JSON.stringify({ email, password })

        const response = await axios.post(url, payload, {
            headers: { "Content-Type": "application/json" }
        })

        const data = response.data

        // 🔍 DEBUG: Cek isi respons dari backend
        console.log("Login Response:", data)
        console.log("Status:", data.status)
        console.log("Token:", data.token)
        console.log("User ID:", data.data?.id)
        console.log("Name:", data.data?.name)
        console.log("Role:", data.data?.role)

        if (data.status === true) {
            toast(data.message, { hideProgressBar: true, containerId: `toastLogin`, type: "success", autoClose: 1000 })

            storeCookie("token", data.token)
            storeCookie("id", String(data.data.id))
            storeCookie("name", data.data.name)
            storeCookie("role", data.data.role)

            const role = data.data.role
            setTimeout(() => {
                if (role === "MANAGER") router.replace("/manager/dashboard")
                else if (role === "SALES") router.replace("/sales/dashboard")
                else toast("Role tidak dikenal", { containerId: `toastLogin`, type: "error" })
            }, 1000)
        } else {
            toast("Email atau password salah", { hideProgressBar: true, containerId: `toastLogin`, type: "error", autoClose: 2000 })
        }
    } catch (error) {
        console.error("Login Error:", error)
        toast("Email atau password salah", { hideProgressBar: true, containerId: `toastLogin`, type: "error", autoClose: 2000 })
    }
}


    return (
        <div className='w-full h-screen flex items-start'>
            <ToastContainer containerId={`toastLogin`} />
            <div className='w-1/2 h-full bg-[#f5f5f5] flex items-center justify-center p-20'>
                <div className='w-full flex flex-col min-w-[450px]'>
                    <div className='w-full flex flex-col mb-10'>
                        <h1 className='text-4xl text-[#2FB7DD] font-bold my-2'>Welcome Back</h1>
                        <p className='text-sm text-slate-500 font-normal'>Access your account and enjoy our services!</p>
                    </div>

                    <form onSubmit={handleSubmit} >
                        <div className='w-full flex flex-col mb-10'>
                            <p className='text-black'>Email</p>
                            <input
                                type="email"
                                placeholder='yourmail@gmail.com'
                                className='w-full p-3 text-black py-4 my-4 bg-gray-200 rounded-xl outline-none'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                id="email"
                                required
                            />

                            <p className='text-black'>Password</p>
                            <input
                                type="password"
                                placeholder='********'
                                className='w-full p-3 text-black py-4 my-4 bg-gray-200 rounded-xl outline-none'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                id="password-industri-app"
                                required
                            />
                        </div>

                        <div className='w-full flex items-center'>
                            <button
                                type="submit"
                                className='w-full max-h-12 bg-[#2fb7dd] hover:bg-[#2f66dd] rounded-xl p-4 text-center flex items-center justify-center'
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className='relative w-2/3 h-full flex flex-col'>
                <Image src={COVER_IMAGE} alt="Cover" className='w-full h-full object-cover' />
            </div>
        </div>
    );
}
export default LoginPage