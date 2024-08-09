"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";

export function Page() {
  return (
    <div className="h-[50rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <div className="flex flex-col items-center">
          <p className="text-center w-full">Login email</p>
          <input
            type="text"
            placeholder="hi@manuarora.in"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-2 bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>
        <div className="flex flex-col items-center mt-4">
          <p className="text-center w-full">Password</p>
          <input
            type="password"
            placeholder="password"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-2 bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>
        <div className="flex justify-center mt-4">
          <Link href={"/"}>
            <button className="bg-black-500 text-white rounded-lg px-4 py-2 border border-white">
              Login now
            </button>
          </Link>
        </div>
        <p>
          <Link href={"/"}>
            <button className="text-white rounded-lg px-4 py-2 mt-4 w-full">
              Visit signup page
            </button>
          </Link>
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default Page;
