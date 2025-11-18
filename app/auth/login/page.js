
 "use client";

import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Login() {
  const { data: session, status } = useSession();
const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/auth/login/dashboard");
    }
  }, [status, router]);

  return (
    <main className="bg-[url(/trade1.png)] h-[40vh] bg-contain min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-green-100 px-4">
      <div className="bg-white/90 shadow-2xl rounded-2xl p-10 max-w-md w-full flex flex-col items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-8">
          <div className="bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-700 rounded-full w-12 h-12 flex items-center justify-center shadow-md">
            <span className="text-white text-3xl font-extrabold font-mono">HI</span>
          </div>
          <span className="ml-2 text-3xl font-bold text-blue-700 tracking-tight font-sans">
            High<span className="text-green-500">Investment</span>
          </span>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Sign up to HighInvestment
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Trade smarter. Profit faster.
        </p>

        {/* Google Sign-in Button */}
        <button
          onClick={() => signIn("google")}
          className="flex items-center justify-center gap-3 bg-white border border-gray-300 hover:border-blue-500 shadow px-6 py-3 rounded-lg font-semibold text-gray-700 hover:text-blue-700 transition w-full"
        >
          <FcGoogle size={26} />
          Sign up with Google
        </button>

        <p className="text-gray-400 text-xs mt-8 text-center">
          By signing up, you agree to our{" "}
          <span className="underline cursor-pointer hover:text-blue-600">Terms</span>{" "}
          and{" "}
          <span className="underline cursor-pointer hover:text-blue-600">Privacy Policy</span>.
        </p>
      </div>
    </main>
  );
}


//  import { FcGoogle } from "react-icons/fc";
// import { signIn } from "@/auth"



//  export default  function Login() {
 
    


//    return (
//      <main className="bg-[url(/trade1.png)] h-[40vh]  bg-contain        min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-green-100 px-4">
//        <form 
//        action={async () => {
//         "use server"
//         await signIn("google")
//       }}
       
//        className=" bg-white/90 shadow-2xl rounded-2xl p-10 max-w-md w-full flex flex-col items-center">
//         {/* Logo */}
//          <div className="flex items-center space-x-2 mb-8">
//            <div className="bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-700 rounded-full w-12 h-12 flex items-center justify-center shadow-md">
//              <span className="text-white text-3xl font-extrabold font-mono">HI</span>
//            </div>
//            <span className="ml-2 text-3xl font-bold text-blue-700 tracking-tight font-sans">
//              High<span className="text-green-500">Investment</span>
//            </span>
//          </div>
//          <h2 className="text-2xl font-bold text-gray-800 mb-4">Sign up to HighInvestment</h2>
//          <p className="text-gray-600 mb-8 text-center">
//            Trade smarter. Profit faster.
//          </p>
        
      
        
//          <button
//             type="submit"
//            className="flex items-center justify-center gap-3 bg-white border border-gray-300 hover:border-blue-500 shadow px-6 py-3 rounded-lg font-semibold text-gray-700 hover:text-blue-700 transition w-full"
//           >
//            <FcGoogle size={26} />
//            Sign up with Google
//          </button>
       
//          <p className="text-gray-400 text-xs mt-8 text-center">
//            By signing up, you agree to our <span className="underline cursor-pointer hover:text-blue-600">Terms</span> and <span className="underline cursor-pointer hover:text-blue-600">Privacy Policy</span>.
//          </p>
//        </form>
//      </main>
//    );
//  }