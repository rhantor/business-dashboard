import React from "react";
import { demoData } from "../../../data/dummy";
import { FaRegEdit } from "react-icons/fa";

const page = ({ params }) => {
  const { company } = params;
  const filteredData = demoData.filter((data) => data.id == company);

  return (
    <div className=" bg-green-50 mx-auto p-4">
      {filteredData.length > 0 ? (
        filteredData.map((data) => (
          <div key={data.id} className="mb-4">
            <div>
              <h1 className="flex justify-star items-center">
                <span> Company Name</span>{" "}
                <FaRegEdit className="inline-block text-sm" />{" "}
              </h1>
              <h1 className="text-xl font-medium">{data.name}</h1>
            </div>
            {/* Render other details about the company here if needed */}
          </div>
        ))
      ) : (
        <p>No company data found for ID: {company}</p>
      )}
    </div>
  );
};

export default page;
