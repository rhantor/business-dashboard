"use client";
import React, { ReactNode, useState } from "react";
import { IoDiamondOutline, IoBagHandleOutline } from "react-icons/io5";
import { RxDash, RxDashboard } from "react-icons/rx";
import { AiOutlineSetting } from "react-icons/ai";
import { PiBuildingsLight } from "react-icons/pi";

import Link from "next/link";
const Sidebar = ({ children }) => {
  const linkData = ["dashboard", "orders", "companies", "settings"];

  const [selectLink, setSelectLink] = useState("dashboard");
  
  return (
    <div className="overflow-x-hidden relative">
      <div className=" bg-gray-200 fixed h-screen w-20 border-r border-r-gray-300 p-1 px-3  items-center flex-col hidden sm:flex">
        <ul className="space-y-5 mt-5">
          {linkData.map((link, index) => (
            <Link
              key={index}
              href={`/${link}`}
              className={` bg-gray-200 p-3 border border-gray-600 shadow-md text-xl rounded-md hover:bg-gray-600 hover:text-gray-50 hover:border-gray-300 transition-all duration-300 cursor-pointer inline-block ${
                selectLink == link
                  ? "bg-gray-600 text-gray-50 border-gray-300 "
                  : "text-gray-600"
              }`}
              onClick={() => setSelectLink(link)}
            >
              {link == "dashboard" && <RxDashboard />}
              {link == "orders" && <IoBagHandleOutline />}
              {link == "companies" && <PiBuildingsLight />}
              {link == "settings" && <AiOutlineSetting />}
            </Link>
          ))}
        </ul>
      </div>
      <div className="ml-10 sm:ml-20 min-h-screen relative">{children}</div>
    </div>
  );
};

export default Sidebar;
