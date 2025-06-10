import { Car } from "@/app/types";
import { BASE_API_URL } from "@/global";
import { AlertInfo } from "@/components/alert";
import AddCar from "./addCar";
import DeleteCar from "./deleteCar";
import EditCar from "./editCar";
import axios from "axios";
import { cookies } from "next/headers";

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
        <div className="m-2 bg-white rounded-lg border-t-4 border-t-slate-200 p-3 shadow-md text-slate-700">
            <h4 className="text-2xl text-oren mb-2">Car Data</h4>
            <p className="text-sm text-secondary mb-4">
                This page displays Car data, allowing users to view details,
                search, and manage car entries by adding, editing, or deleting them.
            </p>
            <div className="flex justify-end items-end mb-4">
                <div className="ml-4">
                    <AddCar />
                </div>
            </div>
            {
                carList.length === 0 ? (
                    <AlertInfo title="Information">
                        No cars available.
                    </AlertInfo>
                ) : (
                    <div className="m-2">
                        {carList.map((car, index) => (
                            <div key={`car-${index}`} className="flex flex-wrap shadow m-2">
                                <div className="w-full md:w-3/12 p-2">
                                    <small className="text-sm font-bold text-black text-primary">Name</small> <br />
                                    {car.name}
                                </div>
                                <div className="w-full md:w-3/12 p-2">
                                    <small className="text-sm font-bold text-black text-primary">Category</small> <br />
                                    {car.category}
                                </div>
                                <div className="w-full md:w-2/12 p-2">
                                    <small className="text-sm font-bold text-black text-primary">Price</small> <br />
                                    Rp{car.price.toLocaleString()}
                                </div>
                                <div className="w-full md:w-4/12 p-2 flex justify-end items-end flex-col">
                                    <small className="text-sm font-bold text-black text-primary flex items-start justify-start">Action</small><br />
                                    <div className="flex gap-1 flex-row items-center">
                                        <EditCar selectedCar={car} />
                                        <DeleteCar selectedCar={car} />
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

export default CarPage;
