import { Car } from "@/app/types";
import { BASE_API_URL, BASE_IMAGE_CAR } from "@/global";
import {get} from "@/lib/api-bridge"
import Image from "next/image";
import { AlertInfo } from "@/components/alert";
import AddCar from "./addCar";
import DeleteCar from "./deleteCar";
import EditCar from "./editCar";
import axios from "axios";
import { cookies } from "next/headers";
import { data } from "framer-motion/client";

export const getCar = async (): Promise<Car[] | undefined> => {
    const token = (await cookies()).get("token")?.value;
    console.log("Token from cookies:", token);
    console.log("Full API URL:", `${BASE_API_URL}/car/getAll`);

    if (!token) {
        console.error("No token found in cookies.");
        return undefined;
    }

    try {
        const response = await axios.get(`${BASE_API_URL}/car/getAll`, {
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
            console.error("Error fetching car:", error.message || error);
        }
        return undefined;
    }
};

const CarPage = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {
    const params = await searchParams;
    const search = params.search ? params.search.toString() : ``;
    const carList: Car[] = await getCar() ?? [];

    console.log("Fetched Car:", carList);

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="admin-card p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-xl font-bold text-text-primary">Car Inventory</h1>
                        <p className="text-sm text-text-secondary mt-1">
                            Manage your car showroom inventory. Add, edit, or remove car entries.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <AddCar />
                    </div>
                </div>
            </div>

            {/* Data Table */}
            <div className="admin-card overflow-hidden">
                {
                    carList.length === 0 ? (
                        <div className="p-6">
                            <AlertInfo title="Information">
                                No cars available. Click &quot;Add Car&quot; to add your first car.
                            </AlertInfo>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>Picture</th>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th className="text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carList.map((car, index) => (
                                        <tr key={`car-${index}`}>
                                            <td>
                                                <div className="w-16 h-12 rounded-lg overflow-hidden bg-gray-100">
                                                    <Image
                                                        width={64}
                                                        height={48}
                                                        src={`${BASE_IMAGE_CAR}/${car.carPicture}`}
                                                        className="w-full h-full object-cover"
                                                        alt={car.name || "Car"}
                                                        unoptimized
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <span className="font-medium">{car.name}</span>
                                            </td>
                                            <td>
                                                <span className={`badge ${car.category === 'SPORT' ? 'badge-sport' : 'badge-family'}`}>
                                                    {car.category}
                                                </span>
                                            </td>
                                            <td>
                                                <span className="font-semibold text-text-primary">
                                                    {car.price.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="flex gap-2 justify-end">
                                                    <EditCar selectedCar={car} />
                                                    <DeleteCar selectedCar={car} />
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

export default CarPage;
