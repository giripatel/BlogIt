import React from "react";

interface AvatarInputs {
  name: string;
}
const Avatar = ({ name }: AvatarInputs) => {
  return (
    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {name[0].toUpperCase()}
      </span>
    </div>
  );
};

export default Avatar;
