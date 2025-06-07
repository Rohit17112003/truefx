// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import OverlayModal from "../common/OverlayModal";
// import SuccessPopup from "./SuccessPopup";

// export default function Kyc() {
//   const router = useRouter();

//   const [docType, setDocType] = useState("");
//   const [docNumber, setDocNumber] = useState("");
//   const [file, setFile] = useState(null);
//   const [isKyc, setIsKyc] = useState(false);
// ;

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleProceed = (e) => {
//     e.preventDefault();
//     if (!docType || !docNumber || !file) {
//       alert("Please fill all fields and upload a file.");
//       return;
//     }

//     setTimeout (()=>{
//       setIsKyc(false)
//       router.push("/profile")

//     },3000)

//     // Proceed to next page (replace '/' with your actual route)
//     // router.push("/kyc-form"); // Change this route accordingly
//     router.push("/payment-method"); // Change this route accordingly
//   };

//   return (
//     <>
//       <h2 className="mb-6 text-center text-3xl font-bold text-[var(--color-text)]">
//         KYC
//       </h2>
//       <div className="mx-auto mt-10 max-w-md rounded-lg bg-[var(--color-header)] px-6 py-7 shadow-md">
//         <form>
//           <div className="mb-4">
//             <label className="mb-1 block font-medium">Document type</label>
//             <select
//               className="w-full rounded-md border-2 border-[#D1D5DB] px-3 py-2 text-[1.1rem] text-[#9CA3AF] outline-0"
//               value={docType}
//               onChange={(e) => setDocType(e.target.value)}
//               required
//             >
//               <option value="">Select One</option>
//               <option value="Aadhar">Aadhar</option>
//               <option value="PAN">PAN</option>
//               <option value="VoterID">Voter ID</option>
//               <option value="Passport">Passport</option>
//             </select>
//           </div>

//           <div className="mb-4">
//             <label className="mb-1 block font-medium">Document Number</label>
//             <input
//               type="text"
//               placeholder="817639836619"
//               value={docNumber}
//               onChange={(e) => setDocNumber(e.target.value)}
//               className="w-full rounded-md border-2 border-[#D1D5DB] px-3 py-2 text-[#9CA3AF] outline-0"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-md border-2 border-dashed border-[#0070BA] bg-[#0070BA14] p-4 py-10 text-center">
//               <img
//                 src="/image/Icon.svg"
//                 alt="qrcode"
//                 className="mb-2 h-9 w-9"
//               />
//               <input
//                 type="file"
//                 accept=".jpg,.jpeg,.png"
//                 onChange={handleFileChange}
//                 className="absolute h-full w-full opacity-0"
//               />
//               <p className="text-[1rem] font-semibold">Drop file or browse</p>
//               <p className="mt-1 text-sm text-gray-500">
//                 Format: .jpeg, .png & Max file size: 25 MB
//               </p>
//               <button className="mt-2 rounded-md bg-[#0070BA] px-4 py-1 text-[0.9rem] text-white">
//                 Browse Files
//               </button>
//             </div>
//           </div>

//           <div className="flex justify-center gap-7">
//             <button
//               type="button"
//               onClick={() => {
//                 setDocType("");
//                 setDocNumber("");
//                 setFile(null);
//               }}
//               className="rounded-lg border border-[#D1D5DB] bg-gray-100 px-6 py-2 text-black hover:bg-gray-200"
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               onClick={() => {
//                 setIsKyc(true);
//                 handleProceed();
//               }}
//               className="rounded-lg bg-green-500 px-6 py-2 text-white hover:bg-green-600"
//             >
//               Proceed
//             </button>
//           </div>
//         </form>
//         {isKyc && (
//           <OverlayModal
//             content={<SuccessPopup onClose={() => setIsKyc(false)} />}
//           />
//         )}
//       </div>
//     </>
//   );
// }




"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import OverlayModal from "../common/OverlayModal";
import SuccessPopup from "./SuccessPopup";

export default function Kyc() {
  const router = useRouter();

  const [docType, setDocType] = useState("");
  const [docNumber, setDocNumber] = useState("");
  const [file, setFile] = useState(null);
  const [isKyc, setIsKyc] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleProceed = (e) => {
    e.preventDefault();

    if (!docType || !docNumber || !file) {
      alert("Please fill all fields and upload a file.");
      return;
    }

    setIsKyc(true); // Show popup

    // Redirect to payment after 3 seconds
    setTimeout(() => {
      setIsKyc(false);
      router.push("/payment-method-kyc");
    }, 3000);
  };

  return (
    <>
      <h2 className="mb-6 text-center text-3xl font-bold text-[var(--color-text)]">
        KYC
      </h2>
      <div className="mx-auto mt-10 max-w-md rounded-lg bg-[var(--color-header)] px-6 py-7 shadow-md">
        <form onSubmit={handleProceed}>
          <div className="mb-4">
            <label className="mb-1 block font-medium">Document type</label>
            <select
              className="w-full rounded-md border-2 border-[#D1D5DB] px-3 py-2 text-[1.1rem] text-[#9CA3AF] outline-0"
              value={docType}
              onChange={(e) => setDocType(e.target.value)}
              required
            >
              <option value="">Select One</option>
              <option value="Aadhar">Aadhar</option>
              <option value="PAN">PAN</option>
              <option value="VoterID">Voter ID</option>
              <option value="Passport">Passport</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="mb-1 block font-medium">Document Number</label>
            <input
              type="text"
              placeholder="817639836619"
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

          <div className="flex justify-center gap-7">
            <button
              type="button"
              onClick={() => {
                setDocType("");
                setDocNumber("");
                setFile(null);
              }}
              className="rounded-lg border border-[#D1D5DB] bg-gray-100 px-6 py-2 text-black hover:bg-gray-200"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-green-500 px-6 py-2 text-white hover:bg-green-600"
            >
              Proceed
            </button>
          </div>
        </form>

        {isKyc && (
          <OverlayModal
            content={<SuccessPopup onClose={() => setIsKyc(false)} />}
          />
        )}
      </div>
    </>
  );
}
