"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Order = () => {
  const [activeNewOrder, setActiveNewOrder] = useState<any>(false);
  const handleNewOrder = () => {
    setActiveNewOrder(!activeNewOrder);
  };
  return (
    <div className="overflow-hidden ">
      <button
        className={`p-2 px-3 bg-green-300 rounded-md border hover:border-green-300 hover:bg-transparent transition-all duration-300 ${
          activeNewOrder
            ? "text-red-600 border-red-600 hover:border-red-600 bg-transparent"
            : "text-black"
        }`}
        onClick={handleNewOrder}
      >
        {activeNewOrder ? "Close" : "New Order +"}
      </button>
    </div>
  );
};

export default Order;
