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
        <div className="space-y-6">
            {/* Page Header */}
            <div className="admin-card p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-xl font-bold text-text-primary">Sales Records</h1>
                        <p className="text-sm text-text-secondary mt-1">
                            View and manage all sales transactions. Track buyer details and sale dates.
                        </p>
                    </div>
                </div>
            </div>

            {/* Data Table */}
            <div className="admin-card overflow-hidden">
                {
                    sales.length === 0 ? (
                        <div className="p-6">
                            <AlertInfo title="Information">
                                No sales data available yet. Sales will appear here once transactions are recorded.
                            </AlertInfo>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>Sale ID</th>
                                        <th>Buyer Name</th>
                                        <th>Sale Date</th>
                                        <th className="text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sales.map((data, index) => (
                                        <tr key={`saleKey${index}`}>
                                            <td>
                                                <span className="font-mono text-text-secondary text-xs bg-gray-100 px-2 py-1 rounded">
                                                    #{data.id_sale}
                                                </span>
                                            </td>
                                            <td>
                                                <span className="font-medium">{data.buyerName}</span>
                                            </td>
                                            <td>
                                                <span className="text-text-secondary">{data.saleDate}</span>
                                            </td>
                                            <td>
                                                <div className="flex gap-2 justify-end">
                                                    <DeleteSale selectedSale={data} />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default SalePage;
