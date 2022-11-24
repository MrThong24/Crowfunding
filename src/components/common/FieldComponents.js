import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const FieldComponents = (props) => {
  const { children, className = "", defaultClassName = "colForm" } = props;
  if (defaultClassName !== "colForm")
    return (
      <div
        className={classNames(
          "grid grid-cols-2 gap-x-[45px]",
          className,
          defaultClassName
        )}
      >
        {children}
      </div>
    );
  return (
    <div
      className={classNames(
        defaultClassName,
        "flex flex-col mb-[25px]",
        className
      )}
    >
      {children}
    </div>
  );
};
FieldComponents.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default FieldComponents;
