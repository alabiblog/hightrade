"use client";

import Link from "next/link";


export default function InvestmentPlans() {
  const plans = [
    {
      name: "Starter",
      price: "$100",
      profit: "$300",
      duration: "72 Hours",
      roi: "5%",
      features: [
        "Basic Support",
        "Daily ROI",
        "Minimum investment $100",
      ],
    },
    {
      name: "Pro",
      price: "$500",
      profit: "$900",
      duration: "72 Hours",
      roi: "8%",
      features: [
        "Priority Support",
        "Daily ROI",
        "Minimum investment $500",
      ],
    },
    {
      name: "Elite",
      price: "$1000",
      profit: "$2500",
      duration: "120 Hours",
      roi: "12%",
      features: [
        "24/7 Dedicated Support",
        "Daily ROI",
        "Minimum investment $1000",
      ],
    },
  ];

  return (
    <div className="bg-[url(/trade1.png)] h-[40vh] bg-contain    p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Investment Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">{plan.name}</h3>
            <p className="text-gray-500 mb-2">Price: <span className="font-bold">{plan.price}</span></p>
            <p className="text-gray-500 mb-2">Profit: <span className="font-bold">{plan.profit}</span></p>
            <p className="text-gray-500 mb-2">Duration: <span className="font-bold">{plan.duration}</span></p>
            <p className="text-gray-500 mb-4">ROI: <span className="font-bold">{plan.roi}</span></p>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-gray-600 flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <Link href={"/component/inform"}><button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Invest Now
            </button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}
