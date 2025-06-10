"use client"

import { Category, Car } from "@/app/types"
import { BASE_API_URL } from "@/global"
import { post } from "@/lib/api-bridge"
import { getCookie } from "@/lib/client-cookies"
import { useRouter } from "next/navigation"
import { FormEvent, useRef, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { ButtonWarning, ButtonSuccess, ButtonDanger } from "@/components/button"
import { InputGroupComponent } from "@/components/inputComponent"
import Modal from "@/components/modal"
import Select from "@/components/select"
import FileInput from "@/components/FileInput"

const AddCar = () => {
    const [isShow, setIsShow] = useState<boolean>(false)
    const [car, setCar] = useState<Car>({
        id_car: 0,
        uuid: ``,
        name: ``,
        price: 0,
        year: 0,
        image: ``,
        category: "FAMILY",
        description: ``,
        createdAt: ``,
        updatedAt: ``
    })
    const router = useRouter()
    const TOKEN = getCookie("token") || ""
    const [file, setFile] = useState<File | null>(null)
    const formRef = useRef<HTMLFormElement>(null)

    const openModal = () => {
        setCar({
            id_car: 0,
            uuid: ``,
            name: ``,
            price: 0,
            year: 0,
            image: ``,
            category: "FAMILY",
            description: ``,
            createdAt: ``,
            updatedAt: ``
        })
        setIsShow(true)
        if (formRef.current) formRef.current.reset()
    }

    const handleSubmit = async (e: FormEvent) => {
        try {
            e.preventDefault()
            const url = `${BASE_API_URL}/car/add`
            const { name, price, year, category, description } = car

            const payload = new FormData()
            payload.append("name", name || "")
            payload.append("price", String(price))
            payload.append("year", String(year))
            payload.append("category", category || "")
            payload.append("description", description || "")
            if (file !== null) payload.append("picture", file)

            const { data } = await post(url, payload, TOKEN)
            if (data?.status || data?.message === "Car created successfully") {
                setIsShow(false)
                toast(data?.message || "Car added", { hideProgressBar: true, containerId: `toastCar`, type: `success` })
                setTimeout(() => router.refresh(), 1000)
            } else {
                toast(data?.message || "Failed to add car", { hideProgressBar: true, containerId: `toastCar`, type: `warning` })
            }
        } catch (error) {
            console.log(error);
            toast(`Something Wrong`, { hideProgressBar: true, containerId: `toastCar`, type: `error` })
        }
    }

    return (
        <div>
            <ToastContainer containerId={`toastCar`} />
            <ButtonSuccess type="button" onClick={() => openModal()}>
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Add Car
                </div>
            </ButtonSuccess>
            <Modal isShow={isShow} onClose={state => setIsShow(state)}>
                <form ref={formRef} onSubmit={handleSubmit}>
                    {/* Modal Header */}
                    <div className="sticky top-0 bg-white px-5 pt-5 pb-3 shadow">
                        <div className="w-full flex items-center">
                            <div className="flex flex-col">
                                <strong className="font-bold text-2xl text-black">Add New Car</strong>
                                <small className="text-slate-400 text-sm">Manager can add new car here.</small>
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
                            label="Upload Picture (Max 2MB, PNG/JPG/JPEG)" onChange={f => setFile(f)} required={false} />
                    </div>
                    {/* Modal Footer */}
                    <div className="w-full p-5 flex rounded-b-2xl shadow">
                        <div className="flex ml-auto gap-2">
                            <ButtonDanger type="button" onClick={() => setIsShow(false)}>
                                Cancel
                            </ButtonDanger>
                            <ButtonSuccess type="submit">
                                Save
                            </ButtonSuccess>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default AddCar
