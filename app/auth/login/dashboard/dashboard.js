  "use client";

 import { signOut, useSession } from "next-auth/react";
 import Head from "next/head";
 import Link from "next/link";
 import React from "react";


 export default function DashboardPage() {
   const { data: session } = useSession();

   return (
      <>
       <Head>
         <title>Secure Crypto Wallet | Manage Your Investments on HighTrade</title>
         <meta
           name="description"
           content="Easily manage your crypto investments with our secure wallet. Track balances, deposit,logout, and withdraw seamlessly on HighTrade,wallet alance,transaction,investment plan."
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
     <>
       <div className=" min-h-screen bg-gray-100 flex flex-col md:flex-row">
         {/* Sidebar */}
         <aside className="w-full md:w-72 bg-white shadow-xl p-6 flex flex-col gap-8 md:h-screen">
           {/* User Profile */}
           
           <div className=" flex flex-col items-center text-center">
             <img
               src={session?.user?.image}
               className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full shadow"
               alt="User"
             />
             <h2 className="mt-3 text-lg md:text-xl font-bold text-gray-800"><span className="text-blue-500 font-bold">
               WELCOME:</span> {session?.user?.name}
             </h2>
             <p className="text-gray-500 text-sm ml-2"><span className="text-blue-500 font-bold">EMAIL:</span> {session?.user?.email}</p>
             <p className="text-black text-sm ml-3"><span className="text-blue-500 font-bold">USER ID:</span> {session?.user?.id}</p>
          
            </div>
           {/* Assets */}
           <div>
             <h3 className="text-lg font-semibold text-gray-700 mb-3">Assets</h3>
             <ul className="flex flex-col gap-3 text-gray-600">
               <Link href={"/component/balance"}><li className="hover:text-indigo-600 cursor-pointer">Wallet Balance</li></Link>
               <Link href={"/component/transaction"}><li className="hover:text-indigo-600 cursor-pointer">Transactions</li></Link>
               <Link href={"/component/plan"}><li className="hover:text-indigo-600 cursor-pointer">Investment Plans</li></Link>
             </ul>
           </div>
            

           {/* Login / Settings */}
           <div className="  pb-10 md:pb-0">
             <h3 className="text-lg font-semibold text-gray-700 mb-3">Account</h3>
             <ul className="flex flex-col gap-3 text-gray-600">
              
               <li
                 onClick={() => signOut()}
                 className="hover:text-red-500 cursor-pointer font-semibold"
               >
                 Logout
               </li>
             </ul>
           </div>
         </aside>

         {/* Main Dashboard Content */}
         <main className="flex-1 p-4 sm:p-6 md:p-10">
           <h1 className="text-2xl md:text-3xl font-bold text-black mb-6">
             Dashboard Overview
           </h1>

           <div className="flex justify-end mb-6">
             <Link href={"/"}><button className="bg-blue-400 text-white py-2 px-4 sm:px-6 rounded-lg font-semibold hover:bg-red-700 transition">
               Home
             </button></Link>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
             <div className="bg-white p-6 rounded-xl shadow">
               <h2 className="text-lg font-semibold text-gray-700">Wallet Balance</h2>
               <p className="mt-2 text-2xl font-bold text-indigo-600">$00,000</p>
             </div>

             <div className="bg-white p-6 rounded-xl shadow">
               <h2 className="text-lg font-semibold text-gray-700">Active Investment</h2>
               <p className="mt-2 text-2xl font-bold text-indigo-600">0 Investment</p>
             </div>

             <div className="bg-white p-6 rounded-xl shadow">
               <h2 className="text-lg font-semibold text-gray-700">Total Profit</h2>
               <p className="mt-2 text-2xl font-bold text-indigo-600">$00,000</p>
             </div>
           </div>

           <div className="flex justify-end mb-6">
             <Link href={"/component/withdraw"}><button className="mt-5 bg-red-600 text-white py-2 px-4 sm:px-6 rounded-lg font-semibold hover:bg-red-700 transition">
               Withdraw
             </button></Link>
           </div>

           {/* Recent Activity */}
           <div className="mt-10 bg-white p-6 rounded-xl shadow">
             <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activity</h2>
             <ul className="space-y-3 text-gray-600">
               <li>• No recent Activity!!</li>
               {/* <li>• Deposit of $500 made</li>
               <li>• Withdrawal of $200 requested</li>
               <li>• New investment plan activated</li> */}
             </ul> 
           </div>
         </main>
       </div>
     </>
     </>
   );
 }
