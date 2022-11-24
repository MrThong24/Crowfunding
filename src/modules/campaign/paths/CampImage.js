import React from "react";
import classNames from "../../../utils/classNames";

const CamImage = ({ src, className }) => {
  return (
    <img
      className={classNames("w-full object-cover", className)}
      src={src}
      alt="Card"
    />
  );
};

export default CamImage;
