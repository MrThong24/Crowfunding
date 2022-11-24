import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const Label = (props) => {
  const { children, htmlFor = "", className = "" } = props;
  return (
    <label
      className={classNames(
        "text-[14px] text-text2 font-medium inline-block cursor-pointer mb-[10px]",
        className
      )}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};
Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
};
export default Label;
