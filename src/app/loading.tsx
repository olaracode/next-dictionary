import React from "react";
import { FaPlay } from "react-icons/fa";
const Skeleton = () => {
  return (
    <div className="w-full min-h-screen my-10">
      <div className="w-full mb-20">
        <div className="flex justify-between items-center w-full">
          <div>
            <div className="font-bold text-3xl capitalize">word</div>
            <div className="text-purple-700 dark:text-purple-300 text-lg">
              phonetic
            </div>
          </div>
          <button
            className="p-5 text-purple-700 bg-purple-300 rounded-full disabled:cursor-not-allowed disabled:opacity-50"
            disabled
          >
            <FaPlay />
          </button>
        </div>
        <div className="mt-4">
          <div className="mb-1 text-gray-500 dark:text-white">noun: </div>
          <ul className="flex flex-wrap gap-4 text-gray-700 dark:text-white">
            <li>
              <div className="text-sm capitalize text-purple-700 dark:text-purple-300 hover:underline">
                word
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <div className="mb-1 text-gray-500 dark:text-white">verb: </div>
          <ul className="flex flex-wrap gap-4 text-gray-700 dark:text-white">
            <li>
              <div className="text-sm capitalize text-purple-700 dark:text-purple-300 hover:underline">
                word
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const loading = () => {
  return <Skeleton />;
};

export default loading;
