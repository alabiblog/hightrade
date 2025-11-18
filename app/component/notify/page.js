"use client"

import Link from "next/link";
import React, { useState } from "react";

export default function Notify() {
  const [showPrompt, setShowPrompt] = useState(false);

  return (
    <div className="bg-[url(/trade1.png)] h-[40vh]  bg-contain     min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-6">
      <div className="bg-white/20 backdrop-blur-xl p-10 rounded-2xl shadow-2xl max-w-lg w-full text-center text-white">
        {!showPrompt && (
          <>
            <h1 className="text-3xl font-bold mb-4 drop-shadow text-black/70">Welcome</h1>
            <p className="mb-6 text-black/70">Click below to begin your trading account setup.</p>

            <button
              onClick={() => setShowPrompt(true)}
              className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow hover:bg-indigo-50 transition"
            >
              Get Started
            </button>
          </>
        )}

        {showPrompt && (
          <>
            <h2 className="text-2xl font-bold mb-4 text-black/70">Do you already have a trader?</h2>
            <p className="mb-6 text-black/70">If you have a trader, continue with login. If not, please get a trader before creating an account.</p>

            <div className="flex flex-col gap-4">
              <Link href={"/auth/login"}><button className="w-full px-6 py-3 bg-blue-500 font-semibold rounded-xl shadow hover:bg-blue-400 transition">
                Yes, Continue to Login
              </button></Link>

              <Link href={"/component/traders"}><button className="w-full px-6 py-3 bg-red-500 font-semibold rounded-xl shadow hover:bg-red-400 transition">
                No, Get a Trader
              </button></Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
