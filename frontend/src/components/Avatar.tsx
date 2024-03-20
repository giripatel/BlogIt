import React from "react";
import clsx from "clsx";

interface AvatarInputs {
  name: string;
  size?: "big" | "small"
}
const Avatar = ({ name , size}: AvatarInputs) => {
  return (
    <div className={clsx(`relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`,size == "big"? 'h-10 w-10' : "")}>
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {name[0].toUpperCase()} 
      </span>
    </div>
  );
};

export default Avatar;
