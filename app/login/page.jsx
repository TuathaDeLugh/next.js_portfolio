"use client";

import {toast } from 'react-toastify';
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (res.error) {
        toast.error("username or password incorrect");
        return;
      }

      router.replace("admin");
    } catch (error) {
      console.log(error);

    }
  };

  return (
    <>
    <div className="absolute top-0 w-full h-full bg-no-repeat bg-full -z-20"
            style={{
              backgroundImage: "url('/register_bg_2.png')",
            }}></div>
    <div className="grid place-items-center -mt-20 h-screen">
      <div className="bg-green-50 shadow-lg p-5 rounded-lg border-t-4 border-green-400 w-full md:w-80">
        <h1 className="text-xl font-bold my-4">Login</h1>
        <form onSubmit={handleSubmit}>
                  <div className="relative w-full mb-3">
                
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      username
                    </label>
                    <input
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                      type="text"
                      className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="username"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                    value={password}
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  

                  <div className="text-center mt-6">
                    <button type="submit"
                      className="bg-green-500 text-white active:bg-green-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    >
                      Sign In
                    </button>
                    
                  </div>
                </form>
      </div>
    </div>
      </>
  );
}