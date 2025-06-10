import { Sale } from "@/app/types";
import { BASE_API_URL } from "@/global";
import { AlertInfo } from "@/components/alert";
import DeleteSale from "./deleteSale";
import axios from "axios";
import { cookies } from "next/headers";

export const getSales = async (): Promise<Sale[] | undefined> => {
    const token = (await cookies()).get("token")?.value;
    console.log("Token from cookies:", token);
    console.log("Full API URL:", `${BASE_API_URL}/sale/getAll`);

    if (!token) {
        console.error("No token found in cookies.");
        return undefined;
    }

    try {
        const response = await axios.get(`${BASE_API_URL}/sale/getAll`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log("Response data:", response.data);
        return response.data?.status ? response.data.data : undefined;
    } catch (error: any) {
        if (error.response) {
            console.error("API response error:", error.response.status, error.response.data);
        } else {
            console.error("Error fetching sales:", error.message || error);
        }
        return undefined;
    }
};

const SalePage = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {
    const params = await searchParams;
    const search = params.search ? params.search.toString() : ``;
    const sales: Sale[] = await getSales() ?? [];

    console.log("Fetched Sales:", sales);

    return (
        <div className="m-2 bg-white rounded-lg border-t-4 border-t-slate-200 p-3 shadow-md text-slate-700">
            <h4 className="text-2xl text-oren mb-2">Sales Data</h4>
            <p className="text-sm text-secondary mb-4">
                This page displays Sales data, allowing you to view details
                and delete sale entries.
            </p>

            {
                sales.length === 0 ? (
                    <AlertInfo title="Information">
                        No sales data available
                    </AlertInfo>
                ) : (
                    <div className="m-2">
                        {sales.map((data, index) => (
                            <div key={`saleKey${index}`} className="flex flex-wrap shadow m-2">
                                <div className="w-full md:w-2/12 p-2">
                                    <small className="text-sm font-bold text-black text-primary">ID</small><br />
                                    {data.id_sale}
                                </div>
                                <div className="w-full md:w-1/12 p-2">
                                    <small className="text-sm font-bold text-black text-primary">Nama</small><br />
                                    {data.buyerName}
                                </div>
                                <div className="w-full md:w-5/12 p-2 px-36">
                                    <small className="text-sm font-bold text-black text-primary">Date</small><br />
                                    {data.saleDate}
                                </div>
                                <div className="w-full md:w-4/12 p-2 flex justify-end items-end flex-col">
                                    <small className="text-sm font-bold text-black text-primary flex items-start justify-start">Action</small><br />
                                    <div className="flex gap-1 flex-row items-center">
                                        <DeleteSale selectedSale={data} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    );
};

export default SalePage;
