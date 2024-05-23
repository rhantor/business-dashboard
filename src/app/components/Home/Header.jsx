"use client";
import React, { useState } from "react";
import { CiSearch, CiUser } from "react-icons/ci";

const Header = () => {
  const [keywords, setKeywords] = useState("");
  return (
    <div className="bg-gray-100 p-3 w-full">
      <div className="flex items-center justify-between font-actor">
        <div className="flex items-center justify-center border border-cyan-100 shadow-md rounded-md group ">
          <input
            type="text"
            name="text"
            id="text"
            placeholder="search only keywords"
            className="px-3 py-2 rounded-tl-md rounded-bl-md outline-none inline-block h-8 focus:text-sm transition-all focus:font-actor"
            onChange={(e) => setKeywords(e.target.value)}
          />
          <button
            type="button"
            className="outline-none rounded-tr-md rounded-br-md p-2 h-8 bg-gray-300 "
          >
            <CiSearch className=" md:text-lg text-sm" />
          </button>
        </div>
        <div className="flex items-center justify-between gap-2 font-actor">
          <button className="text-2xl">
            <CiUser />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
