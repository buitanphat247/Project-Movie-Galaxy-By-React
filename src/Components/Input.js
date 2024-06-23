import React from "react";

const Input = ({ type, name, id, placeholder, className, ...props }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={`${className} h-[40px] mobile:rounded-md border-gray-500 border-2 px-2 `}
      {...props}
    />
  );
};

export default Input;
