"use client";

import { BASE_API_URL } from "@/global";
import { getCookie } from "@/lib/client-cookies";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { InputGroupComponent } from "@/components/inputComponent";
import Modal from "@/components/modal";

interface ICarOption {
    id: number;
    name: string;
}

const AddSale = ({ cars }: { cars: ICarOption[] }) => {
    const [isShow, setIsShow] = useState<boolean>(false);
    const [buyerName, setBuyerName] = useState<string>("");
    const [selectedCarId, setSelectedCarId] = useState<number>(0);
    const formRef = useRef<HTMLFormElement>(null);
    const router = useRouter();
    const TOKEN = getCookie("token") || "";

    const openModal = () => {
        setBuyerName("");
        setSelectedCarId(0);
        setIsShow(true);
        if (formRef.current) formRef.current.reset();
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!buyerName || !selectedCarId) {
            toast("buyerName dan id_car harus diisi", {
                containerId: "toastSale",
                type: "warning",
                autoClose: 4000,
            });
            return;
        }

        try {
            const url = `${BASE_API_URL}/sale`;
            const payload = {
                buyerName,
                id_car: selectedCarId,
            };
            console.log("Payload being sent:", payload);


            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${TOKEN}`,
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (data?.status) {
                setIsShow(false);
                toast(data?.message, {
                    containerId: "toastSale",
                    type: "success",
                    autoClose: 3000,
                });
                setTimeout(() => router.refresh(), 1000);
            } else {
                toast(data?.message, {
                    containerId: "toastSale",
                    type: "warning",
                    autoClose: 5000,
                });
            }
        } catch (error) {
            console.error(error);
            toast("Something went wrong", {
                containerId: "toastSale",
                type: "error",
                autoClose: 5000,
            });
        }
    };

    return (
        <div>
            <ToastContainer containerId="toastSale" autoClose={5000} />
            <button type="button" onClick={openModal}>
                Add Sale
            </button>
            <Modal isShow={isShow} onClose={setIsShow}>
                <form onSubmit={handleSubmit} ref={formRef} className="text-left">
                    <div className="p-5">
                        <InputGroupComponent
                            id="buyerName"
                            type="text"
                            value={buyerName}
                            onChange={setBuyerName}
                            required
                            label="Buyer Name"
                            className="text-black"
                        />
                        <div className="mt-4">
                            <label htmlFor="car" className="block text-sm font-medium text-gray-700">
                                Select Car
                            </label>
                            <select
                                id="car"
                                name="car"
                                value={selectedCarId}
                                onChange={(e) => setSelectedCarId(Number(e.target.value))}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                                required
                            >
                                <option value="">-- Choose Car --</option>
                                {cars.map((car) => (
                                    <option key={car.id} value={car.id}>
                                        {car.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="w-full p-5 flex rounded-b-2xl shadow">
                        <div className="flex ml-auto gap-2">
                            <button type="button" onClick={() => setIsShow(false)}>
                                Cancel
                            </button>
                            <button type="submit">Save</button>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AddSale;
