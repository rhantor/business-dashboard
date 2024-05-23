"use client";
import React, { useEffect, useRef, useState } from "react";
import { RxDotsVertical } from "react-icons/rx";
import { demoData } from "../../data/dummy";
import { motion } from "framer-motion";
import { fadeAnimationVariants } from "../../utils/animationVariations";
import { PiBuildingsLight } from "react-icons/pi";
import Link from "next/link";

const CompaniesList = () => {
  const [detailsVisibility, setDetailsVisibility] = useState();
  const detailsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        setDetailsVisibility(undefined);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleDetails = (toggleId) => {
    setDetailsVisibility((prevId) => (prevId === toggleId ? null : toggleId));
  };

  return (
    <div className="p-2 lg:p-4 xl:p-5 w-full bg-white rounded-md overflow-hidden">
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-4 justify-center items-center ">
          <li className="text-sm sm:text-base list-disc">Name</li>
          <li className="text-sm sm:text-base list-disc">Contacts</li>
          <li className="text-sm sm:text-base list-disc hidden lg:list-item">
            Last Transaction
          </li>
          <li className="text-sm sm:text-base list-disc hidden lg:list-item">
            Method
          </li>
        </div>
        <ul className="">
          {demoData.map((item, id) => (
            <motion.li
              variants={fadeAnimationVariants}
              initial="initial"
              whileInView="animate"
              custom={id}
              key={id}
            >
              <div
                className={
                  "grid grid-cols-2  lg:grid-cols-4 justify-center items-start  text-sm sm:text-base py-2 my-3 px-3 p-2 bg-gray-100 rounded relative transition-all duration-300 hover:bg-green-300"
                }
              >
                <div className="flex gap-3 justify-start items-center">
                  <button
                    type="button"
                    className="bg-green-600 p-2 text-white rounded-md shadow-md"
                  >
                    <PiBuildingsLight />
                  </button>
                  {item.name}
                </div>
                <span>{item.email}</span>
                <span className="hidden lg:inline">{item.lastTransaction}</span>
                <span className="hidden lg:inline">{item.method}</span>{" "}
                <button
                  className="absolute right-1 top-1/2 -translate-y-1/2"
                  onClick={() => toggleDetails(item.id)}
                >
                  <RxDotsVertical />
                </button>
                {detailsVisibility === item.id ? (
                  <motion.div
                    className={`absolute -right-5 -top-12 py-2  shadow-md rounded-md border bg-green-200   overflow-hidden font-actor border-cyan-300`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    ref={detailsRef}
                  >
                    <Link
                      href={`companies/${item.id}`}
                      className="text-xs block transition-all duration-300 hover:bg-gray-100 w-full text-left px-3"
                    >
                      Details
                    </Link>
                    <button className="text-xs block transition-all duration-300 hover:bg-gray-100 w-full text-left px-3 text-red-500 font-bold">
                      Remove
                    </button>
                    <span className="bg-gray-100 p-2 absolute -bottom-1 left-1 -translate-x-1/2 -rotate-90 transform shadow-md rounded-lg"></span>
                  </motion.div>
                ) : null}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompaniesList;
