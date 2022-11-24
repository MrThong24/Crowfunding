import React from "react";
import { useDropdown } from "./dropdown-context";

const Option = (props) => {
  const { onClick, children } = props;
  const { setShow } = useDropdown();
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <div
      onClick={handleClick}
      className="py-4 px-5 cursor-pointer flex items-center justify-between hover:text-primary transition-all text-sm"
    >
      {children}
    </div>
  );
};

export default Option;
