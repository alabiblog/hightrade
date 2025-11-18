"use client";

import Link from "next/link";


export default function ConnectTradersPage() {
 

  return (
    <div className="bg-[url(/trade1.png)] h-[40vh] bg-contain  flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md text-center space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Connect with Professional Crypto Traders
        </h1>
        <p className="text-gray-600">
          Before you start Investing, please connect with our team of professional Crypto traders on Telegram to  help you start your investment and ensure you make informed investment decisions.
        </p>

    
          <Link href={"/component/traders"}><button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Connect Now
          </button></Link>
    
         
    
      </div>
    </div>
  );
}
