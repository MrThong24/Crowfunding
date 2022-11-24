import React from "react";
import classNames from "../../utils/classNames";

const Heading = (props) => {
  const { children, className = "", number = null } = props;
  return (
    <h2
      className={classNames(
        "text-[18px] font-semibold text-text1 mb-[20px] w-full",
        className
      )}
    >
      {children}{" "}
      {number ? <span className="text-secondary">{`(${number})`}</span> : ""}
    </h2>
  );
};

export default Heading;
