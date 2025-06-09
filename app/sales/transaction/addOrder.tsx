"use client"

import { BASE_API_URL } from "@/global"
import { getCookie } from "@/lib/client-cookie"
import { useRouter } from "next/navigation"
import { FormEvent, useRef, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { InputComponent, InputGroupComponent } from "@/components/InputComponent"
import Modal from "@/components/modal"
import Select from "@/components/select"

interface ISaleListItem {
    id: number;
    qty: number;
}

interface ISale {
    id: number;
    uuid: string;
    buyerName: string;
    saleDate: string;
    car: string;
    userId: number;
    createdAt: string;
    updatedAt: string;
    total_price: number;
    saleLists: ISaleListItem[];
}

const AddSale = ({ saleLists }: { saleLists: ISaleListItem[] }) => {
    const [isShow, setIsShow] = useState<boolean>(false);
    const [sale, setSale] = useState<ISale>({
        id: 0,
        uuid: "",
        buyerName: "",
        saleDate: new Date().toISOString(),
        car: "",
        userId: 0,
        createdAt: "",
        updatedAt: "",
        total_price: 0,
        saleLists: [],
    });

    const [saleNote, setSaleNote] = useState<string>("");

    const router = useRouter();
    const TOKEN = getCookie("token") || "";
    const formRef = useRef<HTMLFormElement>(null);

    const openModal = () => {
        setSale({ ...sale, saleLists }); // Inject saleLists
        setIsShow(true);
        if (formRef.current) formRef.current.reset();
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const url = `${BASE_API_URL}/sales`;
            const userId = Number(getCookie("id")) || 0;

            if (!userId) {
                toast("User not found", { hideProgressBar: true, containerId: "toastSale", type: "error" });
                return;
            }

            const lists = sale.saleLists.map((item) => ({
                carId: item.id,
                quantity: item.qty,
                note: saleNote,
            }));

            const payload = {
                buyerName: sale.buyerName,
                saleDate: new Date().toISOString(),
                car: sale.car,
                user: { id: userId },
                total_price: sale.total_price,
                saleLists: lists,
            };

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
                toast(data?.message, { hideProgressBar: true, containerId: "toastSale", type: "success" });
                setTimeout(() => router.refresh(), 1000);
            } else {
                toast(data?.message, { hideProgressBar: true, containerId: "toastSale", type: "warning" });
            }
        } catch (error) {
            console.log(error);
            toast("Something went wrong", { hideProgressBar: true, containerId: "toastSale", type: "error" });
        }
    };

    return (
        <div>
            <ToastContainer containerId="toastSale" />
            <button type="button" onClick={openModal}>
                Add Sale
            </button>
            <Modal isShow={isShow} onClose={setIsShow}>
                <form onSubmit={handleSubmit} ref={formRef} className="text-left">
                    <div className="p-5">
                        <InputGroupComponent id="buyerName" type="text" value={sale.buyerName} onChange={(val) => setSale({ ...sale, buyerName: val })} required label="Buyer Name" className="text-black" />
                        <InputGroupComponent id="car" type="text" value={sale.car} onChange={(val) => setSale({ ...sale, car: (val) })} required label="Car ID" className="text-black" />
                        <InputGroupComponent id="total_price" type="number" value={sale.total_price.toString()} onChange={(val) => setSale({ ...sale, total_price: Number(val) })} required label="Total Price" className="text-black"/>
                        <InputGroupComponent id="saleNote" type="text" value={saleNote} onChange={(val) => setSaleNote(val)} label="Sale Note" className="text-black" />
                    </div>
                    <div className="w-full p-5 flex rounded-b-2xl shadow">
                        <div className="flex ml-auto gap-2">
                            <button type="button" onClick={() => setIsShow(false)}>Cancel</button>
                            <button type="submit">Save</button>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AddSale;
