"use client";

import React from "react";
import { GrDown, GrMoon, GrSun } from "react-icons/gr";
import useDarkTheme from "@/hooks/useDarkTheme";
import useDisclosure from "@/hooks/useDisclosure";
import useClickOutside from "@/hooks/useClickOutside";
import useTypography, { FontVariantT } from "@/hooks/useTypography";

const typographyOptions = ["serif", "sans-serif", "monospace"];

const Dynamics = () => {
  const { toggle, theme } = useDarkTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = useClickOutside(React.useRef(null), onClose);
  const { changeTypography, typography } = useTypography();
  return (
    <div className="flex gap-2">
      <button
        className="flex items-center justify-center gap-1 w-[100px] capitalize"
        onClick={isOpen ? onClose : onOpen}
      >
        {typography} <GrDown />
      </button>
      {isOpen && (
        <div
          className="absolute z-10 w-[150px] top-16 flex flex-col gap-3 p-4 bg-white rounded-md shadow-md dark:bg-slate-600"
          ref={ref}
        >
          {typographyOptions.map((variant) => (
            <button
              key={variant}
              className={`${
                variant === typography ? "font-bold" : ""
              } hover:bg-gray-200 dark:hover:bg-slate-700 rounded-md px-4 py-2 capitalize`}
              onClick={() => changeTypography(variant as FontVariantT)}
            >
              {variant}
            </button>
          ))}
        </div>
      )}
      <div className="border-l-2 border-gray-300" />
      <div className="flex">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value={"dark"}
            onChange={toggle}
            checked={theme === "dark"}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {theme === "light" ? <GrMoon /> : <GrSun />}
          </span>
        </label>
      </div>
    </div>
  );
};

export default Dynamics;
