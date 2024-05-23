import React from "react";

const Form = () => {
  return (
    <div className="mt-10">
      <form action="#" className="space-y-5">
        <div className="space-y-2 sm:space-y-0 sm:space-x-5 flex flex-col sm:flex-row sm:items-center items-start justify-start">
          <label htmlFor="#name" className="font-medium w-[80px]">
            Name{" "}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="type your name"
            className="border rounded-md p-1 px-3 outline-none focus:border-purple-500 transition-all duration-300 w-full sm:w-[300px]"
          />
        </div>
        <div className="space-y-2 sm:space-y-0 sm:space-x-5 flex flex-col sm:flex-row sm:items-center items-start justify-start">
          <label htmlFor="#name" className="font-medium w-[80px]">
            username{" "}
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="type your username"
            className="border rounded-md p-1 px-3 outline-none focus:border-purple-500 transition-all duration-300 w-full sm:w-[300px]"
          />
        </div>
        <div className="space-y-2 sm:space-y-0 sm:space-x-5 flex flex-col sm:flex-row sm:items-center items-start justify-start">
          <label htmlFor="#name" className="font-medium w-[80px] ">
            email{" "}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="type your email"
            className="border rounded-md p-1 px-3 outline-none focus:border-purple-500 transition-all duration-300 w-full sm:w-[300px]"
          />
        </div>
        <div className="space-y-2 sm:space-y-0 sm:space-x-5 flex items-start justify-start">
          <label htmlFor="#name" className="font-medium w-[80px]">
            Description{" "}
          </label>
          <textarea
            type="textarea"
            name="textarea"
            id="textarea"
            placeholder="type your textarea"
            className="border rounded-md p-1 px-3 outline-none focus:border-purple-500 transition-all duration-300 w-full sm:w-[300px]"
            cols={21}
            rows={3}
            maxLength={350}
          />
        </div>
        <button className="bg-purple-600 p-2 px-4 rounded-md text-white hover:bg-transparent hover:text-purple-500 border-purple-500 border transition-all duration-300 ">
          Submit
        </button>
        <button className="bg-transparent p-2 px-4 rounded-md text-red-500 hover:bg-red-500 hover:text-white border-red-500 border transition-all duration-300 ml-4">
          Clear
        </button>
      </form>
    </div>
  );
};

export default Form;
