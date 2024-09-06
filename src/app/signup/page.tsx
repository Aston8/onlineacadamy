"use client";
import React, { useEffect } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export function SignPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
      email: "",
      password: "",
      username: "",
  })
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
      try {
          setLoading(true);
          const response = await axios.post("/api/users/signup", user);
          console.log("Signup success", response.data);
          router.push("/login");
          
      } catch (error:any) {
          console.log("Signup failed", error.message);
          
          toast.error(error.message);
      }finally {
          setLoading(false);
      }
  }

  useEffect(() => {
      if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
          setButtonDisabled(false);
      } else {
          setButtonDisabled(true);
      }
  }, [user]);


  

  return (
    <div className="h-[50rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-white text-center mb-6">{loading ? "Processing" : "Signup"}</h1>

        
        <div className="flex flex-col items-center mb-6"> 
          <p className="text-center w-full">Username</p>
          <input
           id="username"
           value={user.username}
           onChange={(e) => setUser({...user, username: e.target.value})}
            type="text"
            placeholder="username"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-2 bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>

       
        <div className="flex flex-col items-center mb-6"> 
          <p className="text-center w-full">Email</p>
          <input
          id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="hi@manuarora.in"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-2 bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>

        <div className="flex flex-col items-center mb-6">
          <p className="text-center w-full">Password</p>
          <input
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-2 bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>

       
        <div className="flex justify-center mt-4">
          
            <button
             onClick={onSignup}
            className="bg-black-500 text-white rounded-lg px-4 py-2 border border-white"
            >
              {buttonDisabled ? "No signup" : "Signup"}
            </button>
          
        </div>

        
        <p className="mt-4">
          <Link href="/login">
            <button className="text-white rounded-lg px-4 py-2 mt-4 w-full">
              Visit login page
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignPage;



// "use client";
// import React from "react";
// import { BackgroundBeams } from "@/components/ui/background-beams";
// import Link from "next/link";

// export function Page() {
//   return (
//     <div className="h-[50rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
//       <div className="max-w-2xl mx-auto p-4">
//       <h1 className="text-2xl font-bold text-white text-center mb-6">Signup</h1>
//         <div className="flex flex-col items-center">
        
//           <p className="text-center w-full">username</p>
//           <input
//             type="text"
//             placeholder="username"
//             className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-2 bg-neutral-950 placeholder:text-neutral-700"
//           />
//         </div>

//         <div className="flex flex-col items-center">
        
//           <p className="text-center w-full">Login email</p>
//           <input
//             type="text"
//             placeholder="hi@manuarora.in"
//             className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-2 bg-neutral-950 placeholder:text-neutral-700"
//           />
//         </div>

//         <div className="flex flex-col items-center mt-4">
//           <p className="text-center w-full">Password</p>
//           <input
//             type="password"
//             placeholder="password"
//             className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-2 bg-neutral-950 placeholder:text-neutral-700"
//           />
//         </div>
//         <div className="flex justify-center mt-4">
//           <Link href={"/"}>
//             <button className="bg-black-500 text-white rounded-lg px-4 py-2 border border-white">
//               Login now
//             </button>
//           </Link>
//         </div>
//         <p>
//           <Link href={"/login"}>
//             <button className="text-white rounded-lg px-4 py-2 mt-4 w-full">
//               Visit login page
//             </button>
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Page;




