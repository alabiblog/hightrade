"use client";

import Head from "next/head";


export default function WalletBalance() {
  const wallet = {
    totalBalance: "$00,000",
    availableBalance: "$00,000",
    pendingBalance: "$00,000",
    recentActivity: [ 
      // { id: "1", type: "Deposit", amount: "$00,000", date: "2025-11-15" },
      // { id: "2", type: "Withdrawal", amount: "$00,000", date: "2025-11-16" },
      // { id: "3", type: "Deposit", amount: "$00,000", date: "2025-11-17" },
    ],
  };

  return (
     <>
      <Head>
        <title>Secure Crypto Wallet | Manage Your Investments on HighTrade</title>
        <meta
          name="description"
          content="Easily manage your crypto investments with our secure wallet. Track balances, deposit, and withdraw seamlessly on HighTrade."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialAccount",
              "name": "HighTrade Wallet",
              "description": "Secure crypto wallet to manage your investments",
              "url": "https://yourdomain.com/wallet"
            }),
          }}
        />
      </Head>
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Wallet Balance
      </h2>

      {/* Balance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <p className="text-gray-500">Total Balance</p>
          <p className="text-2xl font-bold mt-2">{wallet.totalBalance}</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <p className="text-gray-500">Available Balance</p>
          <p className="text-2xl font-bold mt-2">{wallet.availableBalance}</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <p className="text-gray-500">Pending Balance</p>
          <p className="text-2xl font-bold mt-2">{wallet.pendingBalance}</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Recent Activity</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {wallet.recentActivity.map((activity) => (
                <tr key={activity.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{activity.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">{activity.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{activity.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
}
