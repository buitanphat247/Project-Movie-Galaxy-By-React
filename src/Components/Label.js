import React from "react";

const Label = ({ htmlFor, id, name, className, children, ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      id={id}
      name={name}
      className={`${className} text-white text-lg font-bold`}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
