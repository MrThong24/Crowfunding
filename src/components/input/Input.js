/* eslint-disable no-unused-vars */
import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const Input = (props) => {
  const {
    control,
    name,
    type = "text",
    errors = "",
    placeholder = "",
    className,
    children,
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        className={classNames(
          "w-full px-[25px] py-[15px] rounded-[10px] text-[14px] font-medium text-text1 placeholder:text-text4 border border-strock",
          children ? "pr-[60px]" : "",
          errors.length > 0 ? "border-error" : ""
        )}
        id={name}
        type={type}
        placeholder={errors.length <= 0 ? placeholder : " "}
        {...rest}
        {...field}
      />
      {errors.length > 0 && (
        <div className="absolute bottom-[-25px] text-error text-[14px]">
          {errors}
        </div>
      )}
      {children}
    </div>
  );
};
Input.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};
export default Input;
