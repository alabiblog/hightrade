"use client"

import Home from "@/app/page";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function TraderListPage() {
  const traders = [
    {
      id: 1,
      name: "Sonia Doe",
      age: 32,
      years: 6,
      specialty: "Crypto Scalping & Futures",
      win: 87,
      lose: 13,
      telegram: "@SoniaDoe",
      languages: ["English", "Spanish", "French"],
      img: "/woman2.png"
    },
    {
      id: 2,
      name: "Mark Philip",
      age: 29,
      years: 5,
      specialty: "Forex Day Trading",
      win: 82,
      lose: 18,
      telegram: "@MarkPhilip11",
      languages: ["English", "German", "Spanish"],
      img: "/nnaa.jpg"
    },
    {
      id: 3,
      name: "Mary Jane",
      age: 35,
      years: 10,
      specialty: "Crypto Swing Trading",
      win: 90,
      lose: 10,
      telegram: "@MaryJane21111",
      languages: ["English", "Spanish", "French"],
      img: "/woman3.jpeg"
    },
    {
      id: 4,
      name: "Monica Wright",
      age: 27,
      years: 4,
      specialty: "Stock & Options Trading",
      win: 75,
      lose: 25,
      telegram: "@OptionsQueen4",
      languages: ["English", "Spanish", "Agentina"],
      img: "/nbv.jpg"
    },
    {
      id: 5,
      name: "Camela Smith",
      age: 40,
      years: 12,
      specialty: "Long-term Investment & Portfolio Mgmt",
      win: 93,
      lose: 7,
      telegram: "@InvestorProFive",
      languages: ["English", "Spanish", "Portuguese"],
      img: "/last woman.jpeg"
    },
    {
      id: 6,
      name: "Samuel Frank",
      age: 30,
      years: 7,
      specialty: "High-frequency Automated Trading",
      win: 88,
      lose: 12,
      telegram: "@HFTMasterSix",
      languages: ["English", "Spanish", "French"],
      img: "/male3.jpeg"
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Telegram handle copied: " + text);
  };

  return (
     <>
        <Head>
      <title>connect with proffesional crypto traders - HighTrade</title>
      <meta name="description" content="connect with proffesional crypto traders, with 100% profit guarantee,chat with proffesional crypto traders, telegram proffesional crypto traders." />
      <link rel="canonical" href="https://yourdomain.com/investment/bitcoin" />
    </Head>
    <div className="mt-380  bg-[url(/trade1.png)] h-[40vh]  bg-contain       min-h-screen bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-600 p-10 flex items-center justify-center lg:mt-80">
      <div className="max-w-7xl w-full">
        <h1 className="text-center text-4xl font-extrabold text-black/90 mb-10 drop-shadow-xl">
          Connect With a Professional Trader
        </h1>
         <div className="flex justify-end mb-6">
                    <Link href={"/"}><button className="bg-blue-400 text-white py-2 px-4 sm:px-6 rounded-lg font-semibold hover:bg-red-700 transition">
                      Home
                    </button></Link>
                  </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {traders.map((t) => (
            <div
              key={t.id}
              className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/10 hover:scale-105 transition cursor-pointer text-white"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-full h-48 object-cover rounded-xl mb-4 shadow-lg"
              />

              <h2 className="text-2xl font-bold mb-1  text-black/90">{t.name}</h2>
              <p className="text-sm opacity-80 mb-1  text-black/90">Age: {t.age}</p>
              <p className="text-sm opacity-80 mb-1  text-black/90">Years Trading: {t.years} years</p>
              <p className="text-sm opacity-80 mb-1  text-black/90">Specialty: {t.specialty}</p>

              <p className="text-sm opacity-80 mb-1  text-black/90">Languages: {t.languages.join(", ")}</p>

              <div className="flex justify-between mt-3 mb-4">
                <p className="text-green-300 font-semibold">Win rate: {t.win}%</p>
                <p className="text-red-300 font-semibold">Lose rate: {t.lose}%</p>
              </div>

              <div className="bg-white/10 p-3 rounded-xl mb-4 text-center border border-white/20  text-black/90">
                <p className="text-sm">Telegram: <span className="font-bold">{t.telegram}</span></p>
              </div>

              <div className="flex gap-3">
                <a
                  href={`https://t.me/${t.telegram.replace('@', '')}`}
                  target="_blank"
                  className="w-1/2 py-2 bg-green-400 text-green-900 font-semibold rounded-xl shadow hover:bg-green-300 transition text-center"
                >
                  Message
                </a>

                <button
                  onClick={() => copyToClipboard(t.telegram)}
                  className="w-1/2 py-2 bg-white text-purple-700 font-semibold rounded-xl shadow hover:bg-purple-100 transition"
                >
                  Copy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}