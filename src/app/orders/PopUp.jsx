"use client";
import { motion } from "framer-motion";
import React from "react";
import Form from "./Form";

const Popup = (props) => {
  const { setActivePopup } = props;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"
    >
      <div
        className="fixed w-full h-full bg-black opacity-50 z-10"
        onClick={() => setActivePopup(false)}
      ></div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="relative max-w-[767px] w-full bg-gray-100 z-20 p-4 rounded-lg"
      >
        <h1 className="text-center text-lg   mb-5">Customer Engagement Data</h1>
        <Form setActivePopup={setActivePopup} />
      </motion.div>
    </motion.div>
  );
};

export default Popup;
