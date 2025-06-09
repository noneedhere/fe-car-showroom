// app/transactions/page.tsx
import { Sale } from "@/app/types";
import { getCookies } from "@/lib/server-cookie";
import { BASE_API_URL } from "@/global";
import { get } from "@/lib/api-bridge";

const fetchSales = async (): Promise<Sale[]> => {
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
                <p className="font-semibold">{data.buyerName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Car</p>
                <p className="font-semibold">{data.carId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Sales Person</p>
                <p className="font-semibold">{data.userId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Price</p>
                <p className="font-semibold">Rp {data.total_price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Transaksi;
