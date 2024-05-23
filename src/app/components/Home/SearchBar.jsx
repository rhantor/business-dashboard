"use client";
import { fadeAnimationVariants } from "@/utils/animationVariations";
import { motion } from "framer-motion";
import React, { useState } from "react";

import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [keywords, setKeywords] = useState("");
  return (
    <motion.div
      variants={fadeAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={-1}
      className="flex items-center w-full justify-center border border-green-100 shadow-md rounded-md group "
    >
      <input
        type="text"
        name="text"
        id="text"
        placeholder="search only keywords"
        className="px-3 py-2 rounded-tl-md rounded-bl-md outline-none inline-block h-8 focus:text-sm transition-all focus:border-green-300 w-11/12"
        onChange={(e) => setKeywords(e.target.value)}
      />
      <button
        type="button"
        className="outline-none rounded-tr-md rounded-br-md p-2 h-8 bg-gray-300 w-1/12 flex items-center justify-center hover:bg-green-300 transition duration-300"
      >
        <CiSearch className=" md:text-lg text-sm" />
      </button>
    </motion.div>
  );
};

export default SearchBar;
