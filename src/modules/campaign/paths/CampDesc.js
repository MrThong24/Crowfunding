import React from "react";
import classNames from "../../../utils/classNames";

const CampDesc = ({ className = "", children }) => {
  return (
    <p className={classNames("font-normal text-text3", className)}>
      {children}
    </p>
  );
};

export default CampDesc;
