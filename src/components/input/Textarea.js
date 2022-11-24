import React from "react";
import { useController } from "react-hook-form";

const Textarea = (props) => {
  const { control, name, children, placeholder, ...rest } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <textarea
      placeholder={placeholder}
      className="w-full px-6 py-4 text-sm font-medium bg-transparent border rounded-xl placeholder:text-text4 resize-none min-h-[140px] outline-none"
      {...rest}
      {...field}
    ></textarea>
  );
};

export default Textarea;
