

'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Kyc() {
  const router = useRouter();

  const [docType, setDocType] = useState('');
  const [docNumber, setDocNumber] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleProceed = (e) => {
    e.preventDefault();
    if (!docType || !docNumber || !file) {
      alert('Please fill all fields and upload a file.');
      return;
    }

    // Proceed to next page (replace '/' with your actual route)
    router.push('/kyc-form'); // Change this route accordingly
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-6 text-[var(--color-text)]">KYC</h2>
      <div className="max-w-md mx-auto mt-10 bg-[var(--color-header)] py-7 px-6 rounded-lg shadow-md">
        <form>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Document type</label>
            <select
              className="w-full border-2 border-[#D1D5DB] rounded-md outline-0 px-3 py-2 text-[#9CA3AF] text-[1.1rem]"
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
            <label className="block mb-1 font-medium">Document Number</label>
            <input
              type="text"
              placeholder="817639836619"
              value={docNumber}
              onChange={(e) => setDocNumber(e.target.value)}
              className="w-full border-2 border-[#D1D5DB] rounded-md outline-0 px-3 py-2 text-[#9CA3AF]"
              required
            />
          </div>

          <div className="mb-4">
            <div className="border-dashed border-2 border-[#0070BA] bg-[#0070BA14] rounded-md p-4 text-center py-10 relative h-full w-full overflow-hidden flex flex-col items-center justify-center">
              <img
                src="/image/Icon.svg"
                alt="qrcode"
                className="h-9 w-9 mb-2"
              />
              <input
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="w-full h-full absolute opacity-0"
              />
              <p className="text-[1rem] font-semibold">Drop file or browse</p>
              <p className="text-sm text-gray-500 mt-1">
                Format: .jpeg, .png & Max file size: 25 MB
              </p>
              <button className="bg-[#0070BA] text-white rounded-md px-4 py-1 text-[0.9rem] mt-2">
                Browse Files
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-7">
            <button
              type="button"
              onClick={() => {
                setDocType('');
                setDocNumber('');
                setFile(null);
              }}
              className="bg-gray-100 text-black py-2 px-6 rounded-lg hover:bg-gray-200 border border-[#D1D5DB]"
            >
              Cancel
            </button>

            <button
              type="submit"
              onClick={handleProceed}
              className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600"
            >
              Proceed
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
