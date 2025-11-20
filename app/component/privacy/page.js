"use client"

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";


export default function PrivacyPolicy() {
  const [openSection, setOpenSection] = useState(null);
  const toggle = (id) => setOpenSection(openSection === id ? null : id);

  return (
    <div className="bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-700 min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <Head>
        <title>Privacy Policy — Your Investment Platform</title>
        <meta name="description" content="Privacy Policy for your investment platform. Clear, lovely, and developer-friendly (Tailwind + Next.js)." />
      </Head>

      <main className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl border border-gray-100 overflow-hidden">
        <header className="px-8 py-10 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="mt-2 text-sm md:text-base opacity-90">Sweet, clear, and carefully crafted for any investment platform.</p>
          <div className="mt-4 text-sm bg-white/10 inline-flex items-center gap-2 px-3 py-1 rounded-full">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className="font-medium">Last updated:</span>
            <span className="ml-1 font-semibold">November 19, 2025</span>
          </div>
        </header>

        <section className="px-8 py-8 space-y-6">
          <p className="text-gray-700 leading-relaxed">Welcome to <span className="font-semibold">Your Investment Platform</span> — we take your privacy seriously. This page explains what we collect, why we collect it, and how we protect it. We keep things simple, transparent, and friendly.</p>

          <div className="space-y-4">
            {[
              {
                id: "intro",
                title: "1. Introduction",
                body: (
                  <>
                    <p className="text-gray-700">By using our services, you agree to the practices described here. We recommend reading this document carefully. If anything is unclear, reach out — we love questions.</p>
                  </>
                ),
              },
              {
                id: "what",
                title: "2. Information We Collect",
                body: (
                  <div className="space-y-4 text-gray-700">
                    <p>We collect information to create your account, process transactions, protect you from fraud, and improve our product.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 border rounded-lg bg-gray-50">
                        <h4 className="font-semibold">Personal</h4>
                        <ul className="mt-2 text-sm space-y-1">
                          <li>Full name</li>
                          <li>Email address</li>
                          <li>Phone number</li>
                          <li>Government ID (when required)</li>
                        </ul>
                      </div>

                      <div className="p-4 border rounded-lg bg-gray-50">
                        <h4 className="font-semibold">Financial</h4>
                        <ul className="mt-2 text-sm space-y-1">
                          <li>Bank or payout details</li>
                          <li>Transaction and deposit history</li>
                          <li>Investment preferences</li>
                        </ul>
                      </div>

                      <div className="p-4 border rounded-lg bg-gray-50">
                        <h4 className="font-semibold">Technical</h4>
                        <ul className="mt-2 text-sm space-y-1">
                          <li>IP address and device info</li>
                          <li>Cookies and usage logs</li>
                          <li>Approximate location data</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                id: "use",
                title: "3. How We Use Your Information",
                body: (
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>To provide, operate, and maintain the platform.</li>
                    <li>To process payments, deposits, and withdrawals securely.</li>
                    <li>To verify identity and comply with legal obligations (KYC/AML).</li>
                    <li>To personalize your experience and recommend relevant features.</li>
                    <li>To send important notifications and product updates.</li>
                  </ul>
                ),
              },
              {
                id: "protection",
                title: "4. Security & Protection",
                body: (
                  <div className="text-gray-700 space-y-3">
                    <p>We apply industry-standard protections to keep your data safe:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>SSL/TLS encryption for data in transit.</li>
                      <li>Encrypted storage for sensitive fields.</li>
                      <li>Two-Factor Authentication (2FA) support.</li>
                      <li>Regular audits and limited staff access.</li>
                    </ul>
                    <p className="text-sm text-gray-500">No system is perfect — if you find a security issue, please report it immediately to <a href="mailto:security@yourplatform.com" className="text-cyan-600 underline">security@yourplatform.com</a>.</p>
                  </div>
                ),
              },
              {
                id: "sharing",
                title: "5. Sharing & Third Parties",
                body: (
                  <div className="text-gray-700 space-y-3">
                    <p>We will never sell your personal data. We may share data with:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Payment processors (to complete transactions)</li>
                      <li>Identity verification providers</li>
                      <li>Regulatory or law enforcement bodies when required</li>
                      <li>Trusted analytics and monitoring services</li>
                    </ul>
                    <p className="text-sm text-gray-500">Each third party is carefully vetted and contractually bound to protect your data.</p>
                  </div>
                ),
              },
              {
                id: "cookies",
                title: "6. Cookies & Tracking",
                body: (
                  <div className="text-gray-700 space-y-3">
                    <p>We use cookies for essential functionality, preferences, and analytics. You can control cookies in your browser, but some features may be impacted.</p>
                    <p className="text-sm text-gray-500">If you need a cookie-free experience for legal compliance or accessibility, contact support and we'll help.</p>
                  </div>
                ),
              },
              {
                id: "rights",
                title: "7. Your Rights",
                body: (
                  <div className="text-gray-700 space-y-3">
                    <p>You have rights over your personal data. Depending on your jurisdiction, you may be able to:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Access the data we hold about you</li>
                      <li>Request corrections</li>
                      <li>Request deletion (subject to legal obligations)</li>
                      <li>Export your data in a portable format</li>
                    </ul>
                    <p className="text-sm text-gray-500">To exercise these rights, email <a href="mailto:support@yourplatform.com" className="underline text-cyan-600">support@yourplatform.com</a>.</p>
                  </div>
                ),
              },
              {
                id: "children",
                title: "8. Children's Privacy",
                body: (
                  <p className="text-gray-700">Our services are not for individuals under 18. We do not knowingly collect personal data from children.</p>
                ),
              },
              {
                id: "international",
                title: "9. International Transfers",
                body: (
                  <p className="text-gray-700">Your data may be transferred to and stored in countries outside your home jurisdiction. We ensure appropriate safeguards are in place to protect your information.</p>
                ),
              },
              {
                id: "changes",
                title: "10. Changes to This Policy",
                body: (
                  <div className="text-gray-700 space-y-2">
                    <p>We may update this policy. When we do, we will update the "Last updated" date and, where appropriate, notify users by email or in-app notice.</p>
                    <p className="text-sm text-gray-500">If changes are material, we’ll provide a clear summary of what changed and why.</p>
                  </div>
                ),
              },
              {
                id: "contact",
                title: "11. Contact Us",
                body: (
                  <div className="text-gray-700">
                    <p>If you have questions, requests, or feedback, we’re here to help:</p>
                    <ul className="mt-3 space-y-2">
                      <li><strong>Email:</strong> <a href="mailto:support@yourplatform.com" className="underline text-cyan-600">support@yourplatform.com</a></li>
                      <li><strong>Security:</strong> <a href="mailto:security@yourplatform.com" className="underline text-cyan-600">security@yourplatform.com</a></li>
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
                    <p className="text-sm text-gray-500 mt-1">Click to {openSection === section.id ? 'collapse' : 'expand'}.</p>
                  </div>

                  <div className={`transform transition-transform ${openSection === section.id ? 'rotate-180' : 'rotate-0'}`}>
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>

                <div className={`px-6 pb-6 ${openSection === section.id ? 'block' : 'hidden'}`}>
                  <div className="pt-2">{section.body}</div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-gray-500">Thank you for trusting <span className="font-semibold">Your Investment Platform</span>. We treat your privacy with care and respect.</p>
            <div className="flex gap-3">
              <Link href={"/component/terms"}><p className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium hover:bg-gray-50">View Terms & Conditions</p></Link>
              <button onClick={() => window.print()} className="inline-flex items-center px-4 py-2 rounded-lg bg-cyan-600 text-white text-sm font-medium hover:bg-cyan-700">Print</button>
            </div>
          </div>
        </section>

      </main>

      <footer className="mt-8 text-center text-sm text-gray-400">© {new Date().getFullYear()} Your Investment Platform — Crafted with care.</footer>
    </div>
  );
}
