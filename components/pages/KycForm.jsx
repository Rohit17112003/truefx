"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const KycForm = () => {
  const router = useRouter();

  const [docType, setDocType] = useState("");
  const [docNumber, setDocNumber] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleProceed = (e) => {
    e.preventDefault();
    if (!docType || !docNumber || !file) {
      alert("Please fill all fields and upload a file.");
      return;
    }

    // Proceed to next page (replace '/' with your actual route)
    router.push("/kyc"); // Change this route accordingly
  };
  return (
    <div className="flex w-full justify-center px-4 py-5">
      <div className="w-full rounded-md shadow-md shadow-gray-500 bg-[var(--color-header)] md:w-1/3">
        <h1 className="text-center text-[1.3rem] font-bold text-[var(--color-text)]">
          Pay $100
        </h1>
        <div className="mx-auto max-w-md px-6 py-7 shadow-md">
          <form>
            <div className="mb-4">
              <label className="mb-1 block font-medium">Pay Via</label>
              <select
                className="w-full rounded-md border-2 border-[#D1D5DB] px-3 py-2 text-[1.1rem] text-[var(--color-text)] outline-0"
                value={docType}
                onChange={(e) => setDocType(e.target.value)}
                required
              >
                <option>UPI</option>
                <option>GPay</option>
                <option>PhonePe</option>
                <option>paytm</option>
                <option>bhim</option>
                <option>amazonPay</option>
              </select>
            </div>

           <div className="flex justify-center py-1"> <img
              src="/image/qrcode.svg"
              alt="qrcode"
              className="h-56 w-56 md:h-38 md:w-40"
            /></div>
            <div className="mb-4">
              <label className="mb-1 block font-medium">UPI Id</label>
              <input
                type="text"
                placeholder="Enter UPI Id"
                value={docNumber}
                onChange={(e) => setDocNumber(e.target.value)}
                className="w-full rounded-md border-2 border-[#D1D5DB] px-3 py-2 text-[#9CA3AF] outline-0"
                required
              />
            </div>

            <div className="mb-4">
              <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-md border-2 border-dashed border-[#0070BA] bg-[#0070BA14] p-4 py-10 text-center">
                <img
                  src="/image/Icon.svg"
                  alt="qrcode"
                  className="mb-2 h-9 w-9"
                />
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="absolute h-full w-full opacity-0"
                />
                <p className="text-[1rem] font-semibold">Drop file or browse</p>
                <p className="mt-1 text-sm text-gray-500">
                  Format: .jpeg, .png & Max file size: 25 MB
                </p>
                <button className="mt-2 rounded-md bg-[#0070BA] px-4 py-1 text-[0.9rem] text-white">
                  Browse Files
                </button>
              </div>
            </div>

            <div className="flex w-full justify-center gap-7 rounded-md bg-[#0070BA] cursor-pointer"  onClick={handleProceed}>
              <button
                type="submit"
               
                className="py-2 text-white"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KycForm;
