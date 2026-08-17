import { User } from "@/app/types";
import { getCookies } from "@/lib/server-cookies";
import { BASE_API_URL, BASE_IMAGE_PROFILE } from "@/global";
import { get } from "@/lib/api-bridge";
import { AlertInfo } from "@/components/alert";
import Image from 'next/image';
import AddUser from "./addUser";
import DeleteUser from "./deleteUser";
import EditUser from "./editUser";
import axios from "axios";
import { cookies } from "next/headers";

export const getUser = async (): Promise<User[] | undefined> => {
    const token = (await cookies()).get("token")?.value;
    console.log("Token from cookies:", token);
    console.log("Full API URL:", `${BASE_API_URL}/user/getAll`);

    if (!token) {
        console.error("No token found in cookies.");
        return undefined;
    }

    try {
        const response = await axios.get(`${BASE_API_URL}/user/getAll`, {
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
    const User: User[] = await getUser() ?? []

    console.log("Fetched User:", User);


    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="admin-card p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-xl font-bold text-text-primary">User Management</h1>
                        <p className="text-sm text-text-secondary mt-1">
                            Manage user accounts. View details, add new users, or update existing ones.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <AddUser />
                    </div>
                </div>
            </div>

            {/* Data Table */}
            <div className="admin-card overflow-hidden">
                {
                    User.length == 0 ?
                        <div className="p-6">
                            <AlertInfo title="Information">
                                No data available. Click &quot;Add User&quot; to create the first user.
                            </AlertInfo>
                        </div>
                        :
                        <div className="overflow-x-auto">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>Picture</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th className="text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {User.map((data, index) => (
                                        <tr key={`keyUser${index}`}>
                                            <td>
                                                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                                                    <Image
                                                        width={40}
                                                        height={40}
                                                        src={`${BASE_IMAGE_PROFILE}/${data.profilePicture}`}
                                                        className="w-full h-full object-cover"
                                                        alt={data.name || "User"}
                                                        unoptimized
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <span className="font-medium">{data.name}</span>
                                            </td>
                                            <td>
                                                <span className="text-text-secondary">{data.email}</span>
                                            </td>
                                            <td>
                                                <span className={`badge ${data.role === 'MANAGER' ? 'badge-manager' : 'badge-sales'}`}>
                                                    {data.role}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="flex gap-2 justify-end">
                                                    <EditUser selectedUser={data} />
                                                    <DeleteUser selectedUser={data} />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                }
            </div>
        </div>
    )
}
export default UserPage


