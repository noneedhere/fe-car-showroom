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
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const router = useRouter()

    const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
        const url = `${BASE_API_URL}/user/login`
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
            toast(data.message, { containerId: `toastLogin`, type: "success", autoClose: 1500 })

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
            toast("Email atau password salah", { containerId: `toastLogin`, type: "error", autoClose: 4000 })
        }
    } catch (error) {
        console.error("Login Error:", error)
        toast("Email atau password salah", { containerId: `toastLogin`, type: "error", autoClose: 4000 })
    }
}


    return (
        <div className='w-full h-screen flex items-start'>
            <ToastContainer containerId={`toastLogin`} autoClose={5000} />
            <div className='w-1/2 h-full bg-[#f5f5f5] flex items-center justify-center p-20'>
                <div className='w-full flex flex-col min-w-[450px]'>
                    <div className='w-full flex flex-col mb-10'>
                        <h1 className='text-4xl text-[#2FB7DD] font-bold my-2'>Welcome Back</h1>
                        <p className='text-sm text-slate-500 font-normal'>Access your account and enjoy our services!</p>
                    </div>

                    <form onSubmit={handleSubmit} >
                        <div className='w-full flex flex-col mb-10'>
                            <p className='text-black'>Email</p>
                            <div className='relative my-4'>
                                <input
                                    type="email"
                                    placeholder='yourmail@gmail.com'
                                    className='w-full p-3 text-black py-4 pr-12 bg-gray-200 rounded-xl outline-none'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    id="email"
                                    required
                                />
                                {/* Person icon */}
                                <span className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </span>
                            </div>

                            <p className='text-black'>Password</p>
                            <div className='relative my-4'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder='********'
                                    className='w-full p-3 text-black py-4 pr-12 bg-gray-200 rounded-xl outline-none'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    id="password-industri-app"
                                    required
                                />
                                {/* Eye toggle icon */}
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer'
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                    id="toggle-password-visibility"
                                >
                                    {showPassword ? (
                                        /* Open eye icon */
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    ) : (
                                        /* Closed eye icon */
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                                            <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                                            <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
                                            <line x1="1" y1="1" x2="23" y2="23" />
                                        </svg>
                                    )}
                                </button>
                            </div>
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