import Image from "next/image";
import React from "react";
import Form from "./Form";
const EditPanel = () => {
  return (
    <div className="mt-5 p-5 rounded-lg bg-white shadow-xl border w-full md:w-[60%]">
      <h1 className="font-bold text-2xl">Profile</h1>
      <p className="text-sm">
        Your profile settings will be available for people to see
      </p>
      <div className="mt-5 flex flex-wrap sm:flex-nowrap justify-start items-start gap-4">
        <div className=" border border-purple-600 p-1 w-[250px] h-[200px] rounded-md">
          <div className="w-full h-full rounded bg-gray-100 overflow-hidden">
            <Image
              src={"/avatar.jpg"}
              alt="avatar"
              width={250}
              height={200}
              className="object-cover h-full w-full"
            />
          </div>
        </div>

        <div className=" gap-2 sm:gap-0 sm:h-[200px] flex flex-col justify-between items-start">
          <div>
            <h1 className="text-xl font-bold mb-2">Picture</h1>
            <p className="">
              profile picture maximum size will be 720x720 pixel.
            </p>
          </div>
          <div className="max-w-[300px] flex gap-1">
            <input
              type="file"
              className="bg-purple-600 p-2 px-4 rounded-md text-white  hidden"
              id="file"
            />
            <label
              htmlFor="file"
              className="bg-purple-600 p-2 px-4 rounded-md text-white hover:bg-transparent hover:text-purple-500 border-purple-500 border transition-all duration-300 cursor-pointer"
            >
              upload
            </label>
          </div>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default EditPanel;
