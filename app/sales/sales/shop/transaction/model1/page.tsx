"use client";
import { useState } from "react";

export default function Navbar() {
  const [mainImage, setMainImage] = useState<string>("/images/cayman718.webp");

  const [showModal, setShowModal] = useState(false);
  const [buyerName, setBuyerName] = useState("");
  const [carModel, setCarModel] = useState("");
  const [note, setNote] = useState("");

  const thumbnails = [
    "/images/cayman718.webp",
    "/images/cayman718.2.webp",
    "/images/cayman718.3.webp",
  ];

  const handleBuyClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setBuyerName("");
    setCarModel("");
    setNote("");
  };

  const handleSubmit = async () => {
    if (!buyerName.trim() || !carModel.trim()) {
      alert("Buyer Name and Car Model are required");
      return;
    }

    const data = {
      buyerName,
      car: carModel,
      note,
    };

    try {
      const res = await fetch("http://localhost:9000/sale/add/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert("Failed to add sale: " + (errorData.message || res.statusText));
        return;
      }

      alert("Sale added successfully!");
      handleCloseModal();
    } catch (error) {
      alert("An error occurred: " + error);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Navbar */}
      <nav className="w-full border-b shadow-sm px-10 py-6 flex items-center justify-between text-sm bg-slate-50">
        {/* Left Section */}
        <div className="flex items-center gap-4 text-[#181818]">
          <button className="flex items-center gap-1">
            <span className="text-xl">☰</span>
            <span className="text-lg">Menu</span>
          </button>
          <button className="flex items-center gap-1">
            ← <span>Change model</span>
          </button>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src="/images/logoo.png" alt="Porsche" className="h-[15px]" />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 text-[#181818] text-lg">
          <div className="text-right">
            <div className="flex items-center gap-1">
              <span>$2,743.45</span>
              <span className="text-xs text-gray-500">/mo</span>
            </div>
            <div className="text-xs text-gray-500 leading-none">
              Calculate monthly pay...
            </div>
          </div>
          <div className="text-right">
            <div>$154,150</div>
            <div className="text-xs text-gray-500 leading-none">
              All information is subj...
            </div>
          </div>
          <button className="border-2 px-6 py-4 rounded">Summary</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-row-2 px-10 py-10">
        <div>
          <img
            src={mainImage}
            alt="Porsche Cayman"
            className="rounded-2xl h-auto object-cover w-[1080px]"
          />

          {/* Thumbnails */}
          <div className="flex gap-2 mt-4">
            {thumbnails.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Thumbnail ${idx + 1}`}
                className="w-[100px] h-[60px] object-cover rounded cursor-pointer border border-gray-200 hover:border-black"
                onClick={() => setMainImage(src)}
              />
            ))}
          </div>
        </div>

        {/* Car Ordering Summary */}
        <div className="w-full max-w-[500px] h-[600px] py-16 px-5 ml-10 bg-white shadow-lg rounded-lg border space-y-4">
          <div>
            <p className="text-sm text-gray-500">Total MSRP*</p>
            <p className="text-2xl font-semibold text-[#181818]">$86,795</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Monthly Payment</p>
            <div className="flex items-center gap-2">
              <p className="text-lg font-medium text-[#181818]">$1,276.24</p>
            </div>
          </div>

          <div className="text-sm text-gray-700 space-y-2 border-t border-[#c6c6c6] pt-4 my-10">
            <div className="flex justify-between">
              <span>Base MSRP</span>
              <span>$84,800</span>
            </div>
            <div className="flex justify-between">
              <span>Price for Equipment</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between mb-10">
              <span>Delivery, Processing and Handling Fee</span>
              <span>$1,995</span>
            </div>

            <button
              onClick={handleBuyClick}
              className="w-full h-[50px] bg-[#181818] text-white py-2 rounded hover:opacity-90 mb-2 text-base"
            >
              Buy
            </button>
            <button className="w-full h-[50px] border py-2 rounded hover:bg-gray-100 text-base">
              Save
            </button>
          </div>

          <div className="pt-2 border-t border-slate-300 space-y-1"></div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <>
          <div className="fixed inset-0 bg-black/50  z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50 px-4 text-[#181818]">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
              <h2 className="text-xl font-semibold mb-4">Place Your Order</h2>
              <div className="flex flex-col gap-4">
                <label className="flex flex-col text-sm">
                  Buyer Name<span className="text-red-500">*</span>
                  <input
                    type="text"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="mt-1 border border-gray-300 rounded px-3 py-2"
                    placeholder="Your name"
                  />
                </label>
                <label className="flex flex-col text-sm">
                  Car Model<span className="text-red-500">*</span>
                  <input
                    type="text"
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                    className="mt-1 border border-gray-300 rounded px-3 py-2"
                    placeholder="Car model"
                  />
                </label>
                <label className="flex flex-col text-sm">
                  Note (optional)
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="mt-1 border border-gray-300 rounded px-3 py-2 resize-none"
                    rows={3}
                    placeholder="Additional notes"
                  />
                </label>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 rounded bg-cyan-400 text-white hover:opacity-90"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
