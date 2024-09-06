"use client";
import React, {useEffect} from "react";
//import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";


export function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
      email: "",
      password: "",
     
  })
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);


  const onLogin = async () => {
      try {
          setLoading(true);
          const response = await axios.post("/api/users/login", user);
          console.log("Login success", response.data);
          toast.success("Login success");
          router.push("/profile");
      } catch (error:any) {
          console.log("Login failed", error.message);
          toast.error(error.message);
      } finally{
      setLoading(false);
      }
  }

  useEffect(() => {
      if(user.email.length > 0 && user.password.length > 0) {
          setButtonDisabled(false);
      } else{
          setButtonDisabled(true);
        }
      }, [user]);


  return (
    <div className="h-[50rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-white text-center mb-6">{loading ? "Processing" : "Login"}</h1>
       

        <div className="flex flex-col items-center">
        
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

        <div className="flex flex-col items-center mt-4">
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
        {/* <button
            onClick={onLogin}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login here</button>
            <Link href="/signup">Visit Signup page</Link> */}
          <div className="flex justify-center mt-4">
          
            <button className="bg-black-500 text-white rounded-lg px-4 py-2 border border-white" onClick={onLogin}>
            {buttonDisabled ? "No signup" : "Signup"}
            </button>
          
        </div>
        <p>
          <Link href={"/signup"}>
            <button className="text-white rounded-lg px-4 py-2 mt-4 w-full">
              Visit signup page
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;




