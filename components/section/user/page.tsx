// app/transactions/page.tsx
import { User } from "@/app/types";
import { getCookies } from "@/lib/server-cookie";
import { BASE_API_URL } from "@/global";
import { get } from "@/lib/api-bridge";

const fetchSales = async (): Promise<User[]> => {
  try {
    const token = await getCookies("token");
    const { data } = await get(`${BASE_API_URL}/sales`, token);
    if (data?.status && Array.isArray(data.data)) return data.data;
    return [];
  } catch (error) {
    console.error("Failed to fetch sales", error);
    return [];
  }
};

const Transaksi = async () => {
  const sales = await fetchSales();

  const role = (cat: string): React.ReactNode => {
    if (cat === "MANAGER") {
      return (
        <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded-full dark:bg-blue-200/95 dark:text-blue-950/90">
          MANAGER
        </span>
      );
    }
    return (
      <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
        SALES
      </span>
    );
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-oren">Transaction List</h1>
      {sales.length === 0 ? (
        <p className="text-center text-gray-500 italic">No transactions found.</p>
      ) : (
        <div className="space-y-4">
          {sales.map((data) => (
            <div
              key={data.uuid}
              className="bg-white p-5 rounded-lg shadow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            >
              <div>
                <p className="text-sm text-gray-500">Buyer</p>
                <p className="font-semibold">{data.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold">{data.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Profile Picture</p>
                <p className="font-semibold">{data.profilePicture}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Role</p>
                <p className="font-semibold">Rp {role(data.role)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Transaksi;
