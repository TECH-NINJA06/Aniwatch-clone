"use client";
import React, { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import axios from "axios";
import Link from "next/link";

const page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(`"username" ${username}, "password" ${password}`);
  };

  return (
    <div className=" h-[100vh] w-[100vw] relative">
      <img
        src="./login bg.jpg"
        alt=""
        className="h-full -z-50 grayscale w-full"
      />
      <div className=" h-[80%] w-[30%] z-50  flex justify-center items-center absolute top-[10%] left-[35%] rounded-md backdrop-blur-[2px] border border-white">
        <div className="h-full w-full mx-5 flex flex-col justify-evenly">
          <div className=" h-20 w-full flex justify-center items-center font-semibold text-3xl text-[#ffdd95]">
            <h1>LOGIN</h1>
          </div>
          <div className="bg-white h-[75%] w-full">
            <div className="flex items-center flex-col pap-5 mt-7 justify-between">
              <div className="flex justify-center items-center gap-1">
                <h6 className="text-black font-bold">Username: </h6>
                <input
                  type="text"
                  name="username"
                  id=""
                  className=" rounded-r-md"
                  placeholder="Enter your Username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div className="flex justify-center items-center gap-1 mt-7 mb-10">
                <h6 className="text-black font-bold">Password: </h6>
                <input
                  type="password"
                  name="password"
                  id=""
                  className=" rounded-r-md"
                  placeholder="Enter your Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="h-10 w-36 bg-black flex justify-center items-center rounded-md">
                <button className="h-full w-full" onClick={handleSubmit}>
                  Login
                </button>
              </div>
              <div className="h-10 w-40 bg-black dark:bg-white flex justify-center items-center rounded-md mt-10">
                <button
                  className="h-full w-full border flex justify-center items-center gap-1 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
                  onClick={() => signIn("google")}
                >
                  <img
                    className="w-6 h-6"
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    loading="lazy"
                    alt="google logo"
                  />
                  <span className="font-medium text-white text-sm dark:text-black">
                    Login with Google
                  </span>
                </button>
              </div>
              <div className="h-10 w-full flex justify-center items-center mt-20 text-black">
                <p>New to Aniwatch? <Link href='/signup'>Signup</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
