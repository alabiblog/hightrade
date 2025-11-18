"use client";

import { useState } from "react";

export default function WithdrawPage() {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("wallet");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const userBalance = "00,000"; // Example, replace with actual user balance

  const handleWithdraw = () => {
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setError("Please enter a valid amount");
      return;
    }
    if (Number(amount) > userBalance) {
      setError("Insufficient balance");
      return;
    }

    setError("");
    setSuccess(true);
    setAmount(""); // reset input

    // Hide success popup after 1.5 seconds
    setTimeout(() => setSuccess(false), 2000);

    // Call your API here to process withdrawal
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Withdraw Funds</h1>

      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div>
          <p className="text-black/90">Available Balance</p>
          <p className="text-xl font-semibold text-green-500">${userBalance.toLocaleString()}</p>
        </div>

        <div>
          <label className="block mb-1 font-medium text-black/90">Amount</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-black/90">Withdrawal Method</label>
          <select
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <option value="wallet" className="text-black/90">Crypto Wallet</option>
            <option value="bank" className="text-black/90">Bank Transfer</option>
            <option value="paypal" className="text-black/90">PayPal</option>
          </select>
        </div>

        <div className="text-gray-500 text-sm">
          <p>Fee: {method === "bank" ? "$5" : "0.5%"}</p>
          <p>Estimated Arrival: {method === "bank" ? "1-3 business days" : "Instant"}</p>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          onClick={handleWithdraw}
        >
          Confirm Withdrawal
        </button>
      </div>

      {/* Success popup */}
      {success && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded shadow-lg animate-fade">
          Withdrawal successful to {method}
        </div>
      )}

      <style jsx>{`
        .animate-fade {
          animation: fadeInOut 3s forwards;
        }
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translate(-50%, 20px); }
          10% { opacity: 1; transform: translate(-50%, 0); }
          90% { opacity: 1; transform: translate(-50%, 0); }
          100% { opacity: 0; transform: translate(-50%, 20px); }
        }
      `}</style>
    </div>
  );
}








// "use client";

// import { useState } from "react";

// export default function WithdrawPage() {
//   const [amount, setAmount] = useState("");
//   const [method, setMethod] = useState("wallet");
//   const [error, setError] = useState("");
//   const userBalance = 5000; // Example, replace with actual user balance

//   const handleWithdraw = () => {
//     if (!amount || isNaN(amount) || Number(amount) <= 0) {
//       setError("Please enter a valid amount");
//       return;
//     }
//     if (Number(amount) > userBalance) {
//       setError("Insufficient balance");
//       return;
//     }

//     setError("");
//     alert(`Withdrawal of $${amount} via ${method} initiated!`);
//     // Here you would call your API to process the withdrawal
//   };

//   return (
//     <div className=" p-4 max-w-lg mx-auto">
//       <h1 className="text-2xl font-bold mb-6">Withdraw Funds</h1>

//       <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
//         <div>
//           <p className="text-gray-600">Available Balance</p>
//           <p className="text-xl font-semibold">${userBalance.toLocaleString()}</p>
//         </div>

//         <div>
//           <label className="block mb-1 font-medium">Amount</label>
//           <input
//             type="number"
//             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter amount"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="block mb-1 font-medium">Withdrawal Method</label>
//           <select
//             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={method}
//             onChange={(e) => setMethod(e.target.value)}
//           >
//             <option value="wallet">Crypto Wallet</option>
//             <option value="bank">Bank Transfer</option>
//             <option value="paypal">PayPal</option>
//           </select>
//         </div>

//         <div className="text-gray-500 text-sm">
//           <p>Fee: {method === "bank" ? "$5" : "0.5%"}</p>
//           <p>Estimated Arrival: {method === "bank" ? "1-3 business days" : "Instant"}</p>
//         </div>

//         {error && <p className="text-red-500">{error}</p>}

//         <button
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//           onClick={handleWithdraw}
//         >
//           Confirm Withdrawal
//         </button>
//       </div>
//     </div>
//   );
// }
