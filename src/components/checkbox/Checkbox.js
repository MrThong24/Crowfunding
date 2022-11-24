import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const Checkbox = ({
  checked = true,
  name = "",
  onClick = () => {},
  children,
}) => {
  return (
    <div className="flex items-start gap-x-5 mb-[20px]">
      <div
        className={classNames(
          `flex items-center justify-center w-[20px] h-[20px] border rounded-[4px] cursor-pointer border-text4 text-white`,
          checked ? "bg-primary border-primary" : " "
        )}
        onClick={onClick}
      >
        <input
          type="checkbox"
          name={name}
          className="hidden"
          onChange={() => {}}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </div>
      {children && (
        <div className="cursor-pointer" onClick={onClick}>
          {children}
        </div>
      )}
    </div>
  );
};
Checkbox.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
export default Checkbox;
