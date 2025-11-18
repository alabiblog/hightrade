import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HighTrade",
  description: "Platform that helps you invest and generate profit",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}








//  import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
//  import { SessionProvider } from "next-auth/react";
//  import Head from "next/head";


//  const geistSans = Geist({
//    variable: "--font-geist-sans",
//    subsets: ["latin"],
//  });

//  const geistMono = Geist_Mono({
//    variable: "--font-geist-mono",
//    subsets: ["latin"],
//  });

//  export const metadata = {
//    title: "HighTrade",
//    description: "platform that help you invest and generate profit",
//  };

//  export default function RootLayout({ children }) {
//    return (
//      <html lang="en">
//         <Head>
//          <title>{metadata.title}</title>
//          <meta name="description" content={metadata.description} />
//          <link rel="icon" href="/favicon.ico" /> {/* <-- Add your favicon here */}
//        </Head>
//        <body>
//          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//          <SessionProvider>
//          {children}
//          </SessionProvider>
//        </body>
//    </html>
//    );
//  }
