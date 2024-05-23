import React from "react";
import { CiSettings } from "react-icons/ci";
import Wrapper from "./Wrapper";
const page = () => {
  return (
    <main className=" space-y-4 bg-gray-100 min-h-screen relative">
      <header>
        <h1 className="font-thin font-mono text-2xl flex items-center justify-start gap-4">
          <CiSettings className="animate-spin " />
          <span>Settings</span>
        </h1>
      </header>
      <div className="flex items-center justify-center bg-[url('/evening.jpg')] bg-no-repeat bg-cover min-h-screen">
        <Wrapper />
      </div>
    </main>
  );
};

export default page;
