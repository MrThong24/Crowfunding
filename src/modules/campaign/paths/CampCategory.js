import React from "react";
import { Link } from "react-router-dom";
import { IconFolder } from "../../../components/icons";
import classNames from "../../../utils/classNames";

const CampCategory = ({ text = "", className }) => {
  return (
    <Link
      to="/"
      className="flex items-stretch gap-x-[12px] cursor-pointer mb-[15px] text-text3"
    >
      <IconFolder></IconFolder>
      <span className={(classNames("font-medium text-text3"), className)}>
        {text}
      </span>
    </Link>
  );
};

export default CampCategory;
