import React from "react";
import classNames from "../../../utils/classNames";

const CampTitle = ({ children, className = "" }) => {
  return <h2 className={classNames("text-text1", className)}>{children}</h2>;
};

export default CampTitle;
