"use client"

import { Category, Car } from "@/app/types"
import { BASE_API_URL } from "@/global"
import { put } from "@/lib/api-bridge"
import { getCookie } from "@/lib/client-cookies"
import { useRouter } from "next/navigation"
import { FormEvent, useRef, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { ButtonWarning, ButtonDanger, ButtonSuccess } from "@/components/button"
import { InputGroupComponent } from "@/components/inputComponent"
import Modal from "@/components/modal"
import Select from "@/components/select"
import FileInput from "@/components/FileInput"

const EditCar = ({ selectedCar }: { selectedCar: Car }) => {
    const [isShow, setIsShow] = useState<boolean>(false)
    const [car, setCar] = useState<Car>({ ...selectedCar })
    const [file, setFile] = useState<File | null>(null)
    const router = useRouter()
    const formRef = useRef<HTMLFormElement>(null)
    const TOKEN = getCookie("token") || ""

    const openModal = () => {
        setCar({ ...selectedCar })
        setIsShow(true)
        if (formRef.current) formRef.current.reset()
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            const url = `${BASE_API_URL}/car/update/${car.id_car}`
            const { name, price, year, category, description } = car

            const payload = new FormData()
            payload.append("name", name || "")
            payload.append("price", String(price))
            payload.append("year", String(year))
            payload.append("category", category || "")
            payload.append("description", description || "")
            if (file !== null) payload.append("picture", file)

            const { data } = await put(url, payload, TOKEN)

            if (data?.status || data?.message === "Car updated successfully") {
                toast(data?.message || "Car updated", { containerId: "toastCar", type: "success", hideProgressBar: true })
                setIsShow(false)
                setTimeout(() => router.refresh(), 1000)
            } else {
                toast(data?.message || "Failed to update car", { containerId: "toastCar", type: "warning", hideProgressBar: true })
            }
        } catch (err) {
            console.error(err)
            toast("Something went wrong", { containerId: "toastCar", type: "error", hideProgressBar: true })
        }
    }

    return (
        <div>
            <ToastContainer containerId="toastCar" />
            <ButtonWarning type="button" onClick={openModal}>
                <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                    Edit
                </div>
            </ButtonWarning>

            <Modal isShow={isShow} onClose={state => setIsShow(state)}>
                <form ref={formRef} onSubmit={handleSubmit}>
                    {/* Modal Header */}
                    <div className="sticky top-0 bg-white px-5 pt-5 pb-3 shadow">
                        <div className="w-full flex items-center">
                            <div className="flex flex-col">
                                <strong className="font-bold text-2xl text-black">Edit Car</strong>
                                <small className="text-slate-400 text-sm">Manager can update car information here.</small>
                            </div>
                            <div className="ml-auto">
                                <button type="button" className="text-slate-400" onClick={() => setIsShow(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Modal Body */}
                    <div className="p-5 text-black">
                        <InputGroupComponent id="name" type="text" value={car.name ?? ""}
                            onChange={val => setCar({ ...car, name: val })}
                            required={true} label="Car Name" />

                        <InputGroupComponent id="price" type="number" value={String(car.price)}
                            onChange={val => setCar({ ...car, price: Number(val) })}
                            required={true} label="Price" />

                        <InputGroupComponent id="year" type="number" value={String(car.year)}
                            onChange={val => setCar({ ...car, year: Number(val) })}
                            required={true} label="Production Year" />

                        <Select id="category" value={car.category} label="Category"
                            required={true} onChange={val => setCar({ ...car, category: val as Category })}>
                            <option value="SPORT">SPORT</option>
                            <option value="FAMILY">FAMILY</option>
                        </Select>

                        <InputGroupComponent id="description" type="text" value={car.description}
                            onChange={val => setCar({ ...car, description: val })}
                            required={false} label="Description" />

                        <FileInput acceptTypes={["image/png", "image/jpeg", "image/jpg"]} id="picture"
                            label="Upload New Picture (Max 2MB, PNG/JPG/JPEG)" onChange={f => setFile(f)} required={false} />
                    </div>

                    {/* Modal Footer */}
                    <div className="w-full p-5 flex rounded-b-2xl shadow">
                        <div className="flex ml-auto gap-2">
                            <ButtonDanger type="button" onClick={() => setIsShow(false)}>Cancel</ButtonDanger>
                            <ButtonSuccess type="submit">Save</ButtonSuccess>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default EditCar
