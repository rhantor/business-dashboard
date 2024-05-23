"use client";
import React, { useState } from "react";
import OrderList from "./OrderList";
import PopUp from "./PopUp";
import { AnimatePresence } from "framer-motion";

const ParentOrder = () => {
  const [activeNewOrder, setActiveNewOrder] = useState(false);
  const handleNewOrder = () => {
    setActiveNewOrder(!activeNewOrder);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Orders</h1>
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
      <OrderList />
      <AnimatePresence>
        {activeNewOrder ? <PopUp setActivePopup={setActiveNewOrder} /> : null}
      </AnimatePresence>
    </div>
  );
};

export default ParentOrder;
