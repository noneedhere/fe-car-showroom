import { IUser } from "@/app/types";
import { getCookies } from "@/lib/server-cookies";
import { BASE_API_URL, BASE_IMAGE_PROFILE } from "@/global";
import { get } from "@/lib/api-bridge";
import { AlertInfo } from "@/components/alert";
import Image from 'next/image';
import Search from "./search";
import AddUser from "./addUser";
import DeleteUser from "./deleteUser";
import EditUser from "./editUser";
import axios from "axios";
import { cookies } from "next/headers";

export const getUser = async (): Promise<IUser[] | undefined> => {
    const token = (await cookies()).get("token")?.value;
    console.log("Token from cookies:", token);
    console.log("Full API URL:", `${BASE_API_URL}/user/getAll`);

    if (!token) {
        console.error("No token found in cookies.");
        return undefined;
    }

    try {
        const response = await axios.get(`${BASE_API_URL}/getAll`, {
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
            console.error("Error fetching user:", error.message || error);
        }
        return undefined;
    }
};


const UserPage = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {
    const params = await searchParams;
    const search = params.search ? params.search.toString() : ``
    const User: IUser[] = await getUser() ?? []

    console.log("Fetched User:", User);


    return (
        <div className="m-2 bg-white rounded-lg border-t-4 border-t-slate-200 p-3 shadow-md text-slate-700">
            <h4 className="text-2xl text-oren mb-2">User Data</h4>
            <p className="text-sm text-secondary mb-4">
                This page displays User data, allowing Users to view details,
                search, and manage User items by adding, editing, or deleting them.
            </p>
            <div className="flex justify-between items-center mb-4">
                {/* Search Bar */}
                <div className="flex items-center w-full max-w-md flex-grow">
                    <Search url={`/manager/user`} search={search} />
                </div>
                {/* Add Menu Button */}
                <div className="ml-4">
                    <AddUser />
                </div>
            </div>
            {
                User.length == 0 ?
                    <AlertInfo title="informasi">
                        No data Available
                    </AlertInfo>
                    :
                    <>
                        <div className="m-2">
                            {User.map((data, index) => (
                                <div key={`keyPrestasi${index}`} className={`flex flex-wrap shadow m-2`}>
                                    <div className="w-full md:w-1/12 p-2">
                                        <small className="text-sm text-black font-bold">Picture</small><br />
                                        <Image width={40} height={40} src={`${BASE_IMAGE_PROFILE}/${data.profilePicture}`} className="rounded-sm overflow-hidden" alt="preview" unoptimized />
                                    </div>
                                    <div className="w-full md:w-2/12 p-2">
                                        <small className="text-sm font-bold text-black text-primary">Name</small> <br />
                                        {data.name}
                                    </div>
                                    <div className="w-full md:w-1/12 p-2">
                                        <small className="text-sm font-bold text-black text-primary">Email</small> <br />
                                        {data.email}
                                    </div>
                                    <div className="w-full md:w-5/12 p-2 px-36">
                                        <small className="text-sm font-bold text-black text-primary">Role</small> <br />
                                        {data.role}
                                    </div>
                                    <div className="w-full md:w-2/12 p-2">
                                        <small className="text-sm font-bold text-black text-primary">Action</small><br />
                                        <div className="flex gap-1">
                                            <EditUser selectedUser={data} />
                                            <DeleteUser selectedUser={data} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
            }

        </div>

    )
}
export default UserPage

