
import { motion } from "framer-motion";
import React from "react";
import { CiUser } from "react-icons/ci";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { MdOutlinePrivacyTip } from "react-icons/md";

const Options = () => {
  return (
    <div className="mt-5 ">
      <div className="mt-0 space-y-5 ">
        <motion.div className=" title_bg w-[300px] p-3 rounded-xl border shadow-xl">
          <h2 className=" font-bold text-3xl text-white">Nure Alam</h2>
          <h4 className="text-white text-sm">Employer</h4>
        </motion.div>
        <h1>Hello world</h1>
        <div className="p-3 w-[300px] bg-white border flex justify-between items-center gap-2 rounded-xl shadow-xl ">
          <div className="bg-[#8f8f8f] p-1 w-fit rounded-lg flex-initial">
            <CiUser className=" text-white text-xl" />
          </div>
          <div className="flex-1">
            <h4 className="text-base">Profile</h4>
            <p className="text-xs">Picture, Name, Description</p>
          </div>
          <div className="flex-initial text-purple-600 text-xl">
            <MdOutlineArrowRightAlt />
          </div>
        </div>
        <div className="p-3 w-[300px]  flex justify-between items-center gap-2 rounded-xl transition-all duration-300 hover:bg-white hover:border hover:shadow-xl cursor-pointer group  ">
          <div className="bg-[#8f8f8f] p-1 w-fit rounded-lg flex-initial">
            <MdOutlinePrivacyTip className=" text-white text-xl" />
          </div>
          <div className="flex-1">
            <h4 className="text-base">Privacy</h4>
            <p className="text-xs"> Email, Password, Account </p>
          </div>
          <div className="flex-initial">
            <MdOutlineArrowRightAlt className="group-hover:text-xl group-hover:text-purple-600 transition-all duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
