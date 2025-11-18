"use client"

import Image from "next/image";
// ...existing code...
import Link from "next/link";
import { useRef } from "react";
import { useSession, signIn } from "next-auth/react";


export default function Home() {
    const swiperRef = useRef(null);
    const { data: session } = useSession();

   

    const testimonials = [
        {
            name: "Aisha K.",
            profit: "$1,250",
            img: "/male1.jpg",
            text: "Doubled my small account in under a month. Payout in 48hrs like they promised."
        },
        {
            name: "Marcus L.",
            profit: "$3,800",
            img: "/nnmii.jpg",
            text: "Professional agents and real results. Withdrawals were fast."
        },
        {
            name: "Sophia R.",
            profit: "$650",
            img: "/test.jpg",
            text: "Clear guidance and steady growth. Love the platform."
        },
        {
            name: "Daniel P.",
            profit: "$2,100",
            img: "/55zz.jpg",
            text: "Reliable signals and friendly agents. Payout arrived within 48hrs."
        },
        {
            name: "Rodriquiz V.",
            profit: "$2,100",
            img: "/44zz.jpg",
            text: "Trust secured, trade successful. Looking forward to the next one!"
        },
        {
            name: "Laura P.",
            profit: "$2,800",
            img: "/33zzz.jpg",
            text: "Another successful deal! Always a pleasure trading with you.."
        },
        {
            name: "Aisha M.",
            profit: "$1,700",
            img: "/7zz.jpg",
            text: "Everything went perfectly — I got exactly what was promised. 100% legit!"
        },
        {
            name: "Doglas J.",
            profit: "$3,100",
            img: "/33zz.jpg",
            text: "Trade completed successfully. Honest, fast, and reliable partner."
        },
        {
            name: "Philip D.",
            profit: "$1,100",
            img: "/6z.jpg",
            text: "Smooth and successful trade! Trustworthy and professional — highly recommend."
        },
    ];

    const scroll = (dir = 1) => {
        if (!swiperRef.current) return;
        swiperRef.current.scrollBy({
            left: dir * 320,
            behavior: "smooth",
        });
    };

    return (
        <main className="      min-h-screen bg-gray-50 text-gray-800">
            {/* Hero */}
            <section className="relative bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-700 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                            Trade smarter. Profit faster.
                        </h1>
                        <p className="text-lg opacity-90">
                            We pair expert agents with powerful signals to help you grow your capital.
                            Guaranteed access to profit withdrawals within 48 hours of request.
                        </p>
                        <div className="flex gap-4">
                            
                                 
                           <Link href={"/component/notify"}> <button  className="bg-yellow-400 text-slate-900 font-semibold px-5 py-3 rounded shadow hover:brightness-95">
                                Get Started
                            </button></Link>
                            
                            <Link href={"/auth/login/dashboard"}><button className="border border-white/30 px-5 py-3 rounded hover:bg-white/5">
                                Dashboard
                            </button></Link>
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                            <div className="text-sm">
                                <div className="text-xs opacity-80">Trusted by</div>
                                <div className="font-bold">100,200+ traders</div>
                            </div>
                            <div className="h-12 w-px bg-white/20" />
                            <div className="text-sm">
                                <div className="text-xs opacity-80">Avg. payout time</div>
                                <div className="font-bold">48 hours</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="w-full max-w-md rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/10">
                            <img
                                src="/trade6.png"
                                alt="Bitcoin"
                                className="w-full h-72 object-cover"
                            />
                            <div className="p-4 bg-white">
                                <div className="text-sm text-gray-600">Featured Asset</div>
                                <div className="flex items-center justify-between mt-2">
                                    <div>
                                        <div className="font-semibold">Bitcoin (BTC)</div>
                                        <div className="text-xs text-gray-500">Top volatility opportunities</div>
                                    </div>
                                    <div className="text-green-600 font-bold">+4.2%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Description */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="bg-white rounded-2xl shadow p-8 grid md:grid-cols-3 gap-6 items-center">
                    <div className="md:col-span-2 space-y-4">
                        <h2 className="text-2xl font-bold">How we help you trade — and get your profit in 48hrs</h2>
                        <p className="text-gray-600">
                            Our team of experienced trading agents and algorithmic signals guide your trades,
                            manage risk, and execute profitable strategies on your behalf. We prioritize fast,
                            transparent withdrawals — most profit requests are processed within 48 hours.
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                            <li className="flex gap-3 items-start">
                                <span className="bg-indigo-50 text-indigo-700 rounded-full px-2 py-1 text-sm font-semibold">✔</span>
                                <div>
                                    <div className="font-medium">Expert Agents</div>
                                    <div className="text-sm text-gray-500">Hand-picked traders manage positions for you.</div>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="bg-indigo-50 text-indigo-700 rounded-full px-2 py-1 text-sm font-semibold">✔</span>
                                <div>
                                    <div className="font-medium">Fast Withdrawals</div>
                                    <div className="text-sm text-gray-500">Profit payments processed within 48 hours.</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-end">
                        <img
                            src={"/woman1.jpeg"}
                            alt="Founder"
                            className="w-40 h-40 rounded-full object-cover ring-4 ring-indigo-50 shadow-md"
                        />
                        <div className="mt-4 text-center md:text-right">
                            <div className="font-semibold">Founder — Jane Doe</div>
                            <div className="text-sm text-gray-500">25+ years in crypto trading & risk management</div>
                        </div>
                    </div>
                </div>
            </section>
           
           

            {/* Testimonials Swiper */}
            <section className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Investors testimonials</h3>
                    <div className="flex gap-2">
                        <button
                            onClick={() => scroll(-1)}
                            className="bg-white p-2 rounded shadow hover:bg-gray-50"
                            aria-label="scroll left"
                        >
                            ‹
                        </button>
                        <button
                            onClick={() => scroll(1)}
                            className="bg-white p-2 rounded shadow hover:bg-gray-50"
                            aria-label="scroll right"
                        >
                            ›
                        </button>
                    </div>
                </div>

                <div ref={swiperRef} className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="min-w-[300px] max-w-[320px] bg-white rounded-xl shadow p-4 snap-start"
                        >
                            <div className="flex items-center gap-3">
                                <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                                <div>
                                    <div className="font-semibold">{t.name}</div>
                                    <div className="text-sm text-gray-500">Profit: <span className="font-medium text-green-600">{t.profit}</span></div>
                                </div>
                            </div>
                            <p className="text-gray-600 mt-3 text-sm">{t.text}</p>
                            <div className="mt-4">
                                <div className="text-xs text-gray-400">Verified investor</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Founder / CTA */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
                    <img
                        src={"/woman1.jpeg"}
                        alt="Founder"
                        className="w-28 h-28 rounded-full object-cover ring-4 ring-white/30 shadow-lg"
                    />
                    <div className="flex-1">
                        <div className="font-bold text-xl">Message from our Founder</div>
                        <div className="text-sm opacity-90 mt-2">
                            "We combine disciplined risk management with proactive trade execution to protect your capital and accelerate growth. Join our community and see the difference — payouts typically processed within 48 hours."
                        </div>
                    </div>
                    <div>
                        <Link href={"/component/connect"}><button className="bg-white text-indigo-700 px-5 py-3 rounded font-semibold shadow">Start Trading</button></Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
// ...existing code...