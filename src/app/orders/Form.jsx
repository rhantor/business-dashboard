"use client";
import React, { useState } from "react";

const Form = (props) => {
  const { setActivePopup } = props;
  const [data, setData] = useState();
  const [productName, setProductName] = useState("");
  const [method, setMethod] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="font-bold text-lg" htmlFor="product">
              Product Name
            </label>
            <br />
            <input
              type="number"
              name="product"
              id="product"
              className="p-2 px-3 border rounded shadow w-full outline-none"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              inputMode="numeric"
              min={0}
            />
          </div>
          <div>
            <label className="font-bold text-lg" htmlFor="date">
              Last Transaction
            </label>
            <br />
            <input
              type="date"
              name="date"
              id="date"
              className="p-2 px-3 border rounded shadow w-full outline-none"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              inputMode="numeric"
              min={0}
            />
          </div>
          <div>
            <label className="font-bold text-lg" htmlFor="method">
              Method
            </label>
            <br />
            <select
              name="method"
              id="method"
              className="p-2 px-3 border rounded shadow w-full outline-none"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="Cash">Cash</option>
              <option value="Bank">Bank</option>
              <option value="Rocket">Rocket</option>
              <option value="Bkash">Bkash</option>
            </select>
          </div>
          <div>
            <label className="font-bold text-lg" htmlFor="status">
              Status
            </label>
            <br />
            <select
              name="status"
              id="status"
              className="p-2 px-3 border rounded shadow w-full outline-none"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="processing">processing</option>
              <option value="on-hold">on-hold</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="border border-green-300  text-green-500 p-2 px-3 mt-5 rounded font-bold w-18 h-10 hover:bg-green-500 hover:text-white duration-300"
        >
          Save
        </button>
        <button
          onClick={() => setActivePopup(false)}
          className="border border-red-300  text-red-500 p-2 px-3 mt-5 rounded font-bold ml-5 w-18 h-10 hover:bg-red-500 hover:text-white duration-300"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Form;
