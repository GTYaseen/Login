import React from "react";
import "./input.css";
export const Input = ({ placeholder, value, onChange,width,height,type,...props }) => {
  return (
    <input
      onChange={onChange}
      value={value}
      className="input"
      type={type}
      placeholder={placeholder}
      style={{width:width,height:height}}
    />
  );
};
