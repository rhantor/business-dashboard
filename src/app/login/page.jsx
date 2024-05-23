import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";

const page = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col gap-3 items-center justify-center p-5">
      <h1 className="text-3xl">Unlock Your World</h1>
      <div className="w-full lg:w-[415px] bg-white shadow-lg rounded-md p-6 border border-green-100 ">
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="demomail@.com"
            className="border p-3 py-2 w-full rounded-md outline-gray-300 mb-2"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="use strong password"
            className="border p-3 py-2 w-full rounded-md outline-gray-300"
            id="password"
          />
          <button
            type="button"
            className="w-full border  mt-4 rounded-md p-3 py-2 border-gray-300 hover:bg-gray-600 hover:text-white transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
      <h2>Or</h2>
      <div className="flex items-center justify-center gap-2">
        <button>
          <Image src={"/google.svg"} height={48} width={48} alt="goole" />
        </button>
        <button>
          <Image src={"/facebook.svg"} height={52} width={52} alt="facebook" />
        </button>
      </div>
    </div>
  );
};

export default page;
