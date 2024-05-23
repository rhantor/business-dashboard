"use client";
import React, { useState } from "react";
import Options from "./SettingsOptions";
import ProfileEdit from "./EditPanel";
import PrivacyEdit from "./PrivacyEdit";
const Wrapper = () => {
  const [selectedSettings, setSelectedSettings] = useState("profile");
  return (
    <div
      className="flex justify-normal items-start
   gap-16 relative flex-wrap lg:flex-nowrap mt-2 pt-1 p-5 rounded-lg bg-white/30 shadow-xl border w-full md:w-[60%] backdrop-blur-md "
    >
      <div>
        <Options
          selectedSettings={selectedSettings}
          setSelectedSettings={setSelectedSettings}
        />
      </div>

      {selectedSettings == "profile" ? <ProfileEdit /> : <PrivacyEdit />}
    </div>
  );
};

export default Wrapper;
