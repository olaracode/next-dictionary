import React from "react";

/**
 * @description Hook to detect and trigger a function when a click is made outside the element
 * @usage Good for dropdowns, modals, drawers, etc
 * @param ref
 * @param fwdFunction
 * @returns ref
 */
const useClickOutside = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  fwdFunction: () => void
) => {
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        fwdFunction();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, fwdFunction]);
  return ref;
};

export default useClickOutside;
