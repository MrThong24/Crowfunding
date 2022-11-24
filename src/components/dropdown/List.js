import React from "react";
import { useDropdown } from "./dropdown-context";

const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    show && (
      <div className="absolute w-full left-0 z-20 bg-white rounded-lg shadow-sm top-full  overflow-y-auto">
        {children}
      </div>
    )
  );
};

export default List;
