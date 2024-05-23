import React from "react";
import CompaniesList from "./CompaniesList";


const page = () => {
  return (
    <div className="h-screen bg-gray-100 rounded overflow-x-hidden p-5 ">
      <h1 className="text-2xl font-sans font-thin mb-4">Companies</h1>{" "}
      <div className=" w-1/2 mb-5">
        {/* <SearchBar /> */}
      </div>
      <CompaniesList />
    </div>
  );
};

export default page;
