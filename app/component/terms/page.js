"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";


export default function TermsAndConditions() {
  const [open, setOpen] = useState(null);
  const toggle = (id) => setOpen(open === id ? null : id);

  return (
    <div className=" bg-gradient-to-r from-indigo-600 to-purple-600 text-white  min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <Head>
        <title>Terms & Conditions — Your Investment Platform</title>
        <meta name="description" content="Beautiful and professional Terms and Conditions page crafted for any investment platform using Tailwind & Next.js." />
      </Head>

      <main className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl border border-gray-100 overflow-hidden">
        <header className="px-8 py-10 bg-gradient-to-r from-indigo-600 to-purple-500 text-white">
          <h1 className="text-3xl md:text-4xl font-extrabold">Terms &amp; Conditions</h1>
          <p className="mt-2 text-sm md:text-base opacity-90">Clear, professional, and tailored for your investment platform.</p>
          <div className="mt-4 text-sm bg-white/10 inline-flex items-center gap-2 px-3 py-1 rounded-full">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className="font-medium">Last updated:</span>
            <span className="ml-1 font-semibold">November 19, 2025</span>
          </div>
        </header>

        <section className="px-8 py-10 space-y-6">
          <p className="text-gray-700 leading-relaxed">These Terms &amp; Conditions govern your use of <span className="font-semibold">Your Investment Platform</span>. By accessing or using our services, you agree to be bound by the terms described here. Please read them carefully.</p>

          <div className="space-y-4">
            {[
              {
                id: "agreement",
                title: "1. Acceptance of Agreement",
                body: (
                  <p className="text-gray-700">By creating an account or using our services, you confirm that you are at least 18 years old, legally capable, and agree to abide by these Terms &amp; Conditions.</p>
                ),
              },
              {
                id: "accounts",
                title: "2. Account Registration & Security",
                body: (
                  <div className="text-gray-700 space-y-3">
                    <p>To use our platform, you must register and provide accurate information. You agree to:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Maintain the accuracy of your account details.</li>
                      <li>Keep your login credentials confidential.</li>
                      <li>Notify us immediately if you suspect unauthorized activity.</li>
                    </ul>
                  </div>
                ),
              },
              {
                id: "investments",
                title: "3. Investment Risks & Responsibilities",
                body: (
                  <div className="text-gray-700 space-y-3">
                    <p>Investing involves risks, including potential loss of capital. You understand and agree that:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Past performance does not guarantee future results.</li>
                      <li>You are responsible for your investment decisions.</li>
                      <li>We do not provide personalized financial advice unless explicitly stated.</li>
                    </ul>
                    <p className="text-sm text-gray-500">Always research or consult a licensed financial advisor before making major investment decisions.</p>
                  </div>
                ),
              },
              {
                id: "transactions",
                title: "4. Deposits, Withdrawals & Transactions",
                body: (
                  <div className="text-gray-700 space-y-3">
                    <p>All transactions on our platform must follow our verification and security process.</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Processing times may vary depending on banks or blockchain networks.</li>
                      <li>Suspicious activity may require additional verification.</li>
                      <li>Fees may apply for some transactions and services.</li>
                    </ul>
                  </div>
                ),
              },
              {
                id: "usage",
                title: "5. Acceptable Use Policy",
                body: (
                  <div className="text-gray-700 space-y-3">
                    <p>You agree NOT to use our platform for:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Money laundering or illegal financial activity</li>
                      <li>Abusive, fraudulent, or harmful behavior</li>
                      <li>Attempting to hack, exploit, or disrupt our services</li>
                    </ul>
                    <p>We reserve the right to suspend or terminate accounts violating these rules.</p>
                  </div>
                ),
              },
              {
                id: "fees",
                title: "6. Fees & Charges",
                body: (
                  <div className="text-gray-700 space-y-3">
                    <p>We clearly display all fees on transactions, subscriptions, or premium features. By using our platform, you acknowledge and agree to these fees.</p>
                    <p className="text-sm text-gray-500">We may update our fee structure with prior notice.</p>
                  </div>
                ),
              },
              {
                id: "liability",
                title: "7. Limitation of Liability",
                body: (
                  <div className="text-gray-700 space-y-3">
                    <p>To the maximum extent permitted by law, we are not liable for:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Loss of profits or investment losses</li>
                      <li>Service interruptions or technical errors</li>
                      <li>Actions taken based on inaccurate or outdated information</li>
                    </ul>
                    <p>Your use of the platform is at your own risk.</p>
                  </div>
                ),
              },
              {
                id: "termination",
                title: "8. Account Termination",
                body: (
                  <div className="text-gray-700 space-y-3">
                    <p>We may suspend or terminate your account if:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>You violate these Terms.</li>
                      <li>We detect fraudulent or harmful activities.</li>
                      <li>We are required to do so by law.</li>
                    </ul>
                    <p>You may also delete your account at any time by contacting support.</p>
                  </div>
                ),
              },
              {
                id: "intellectual",
                title: "9. Intellectual Property",
                body: (
                  <div className="text-gray-700 space-y-2">
                    <p>All content, trademarks, logos, and software on the platform are the property of the company or its licensors. You may not reproduce or use them without permission.</p>
                  </div>
                ),
              },
              {
                id: "privacy",
                title: "10. Privacy",
                body: (
                  <div className="text-gray-700 space-y-2">
                    <p>Our <a href="/privacy" className="text-purple-600 underline">Privacy Policy</a> explains how we collect and use your data. By using the platform you consent to data practices described in that policy.</p>
                  </div>
                ),
              },
              {
                id: "changes",
                title: "11. Updates to These Terms",
                body: (
                  <div className="text-gray-700 space-y-2">
                    <p>We may modify these Terms &amp; Conditions occasionally. When updates occur, we will notify users through email or an in-app announcement.</p>
                    <p className="text-sm text-gray-500">Continued use of the platform means you accept the updated terms.</p>
                  </div>
                ),
              },
              {
                id: "law",
                title: "12. Governing Law",
                body: (
                  <p className="text-gray-700">These Terms are governed by the laws of the jurisdiction in which the company operates, unless otherwise required by applicable law.</p>
                ),
              },
              {
                id: "contact",
                title: "13. Contact Information",
                body: (
                  <div className="text-gray-700 space-y-3">
                    <p>If you have questions or concerns about these Terms, contact us anytime:</p>
                    <ul className="space-y-2">
                      <li><strong>Email:</strong> <a href="mailto:support@yourplatform.com" className="text-purple-600 underline">support@yourplatform.com</a></li>
                      <li><strong>Legal:</strong> <a href="mailto:legal@yourplatform.com" className="text-purple-600 underline">legal@yourplatform.com</a></li>
                      <li><strong>Address:</strong> 123 Finance Ave, Suite 100, FinCity</li>
                    </ul>
                  </div>
                ),
              },
            ].map((section) => (
              <article key={section.id} className="border border-gray-100 rounded-xl">
                <button
                  onClick={() => toggle(section.id)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{section.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">Click to {open === section.id ? 'collapse' : 'expand'}.</p>
                  </div>
                  <div className={`transform transition-transform ${open === section.id ? 'rotate-180' : 'rotate-0'}`}>
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>

                <div className={`px-6 pb-6 ${open === section.id ? 'block' : 'hidden'}`}>
                  <div className="pt-2">{section.body}</div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-gray-500">By continuing to use <span className="font-semibold">Your Investment Platform</span>, you acknowledge that you have read, understood, and agree to these Terms &amp; Conditions.</p>
            <div className="flex gap-3">
              <Link href={"/component/privacy"}><p className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-black hover:bg-gray-50">View Privacy Policy</p></Link>
              <button onClick={() => window.print()} className="inline-flex items-center px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-700">Print</button>
            </div>
          </div>
        </section>

      </main>

      <footer className="mt-8 text-center text-sm text-black">© {new Date().getFullYear()} Your Investment Platform — Crafted with care.</footer>
    </div>
  );
}
