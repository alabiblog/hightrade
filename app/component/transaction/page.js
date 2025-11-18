"use client";

export default function Transactions() {
  const transactions = [
    {
      // id: "TXN001",
      //  type: "Deposit",
      //  amount: "$500",
      //  date: "2025-11-15",
      //  status: "Completed",
    },
    {
      // id: "TXN002",
      //  type: "Withdrawal",
      //  amount: "$200",
      //  date: "2025-11-16",
      //  status: "Pending",
    },
    {
      // id: "TXN003",
      //  type: "Deposit",
      //  amount: "$1000",
      //  date: "2025-11-17",
      //  status: "Completed",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
       <h2 className="text-3xl font-bold mb-6 text-gray-800">Transactions</h2>
      <div className="overflow-x-auto bg-white shadow rounded-xl">
         <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
           <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((txn) => (
              <tr key={txn.id}>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{txn.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{txn.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{txn.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">{txn.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      txn.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : txn.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {txn.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody> 
        </table> 
      </div> 
    </div>
  );
}
