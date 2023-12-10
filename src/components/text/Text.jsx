import React from "react";
import './text.css'
export const Text = ({ children, bold, size, color, ...props }) => {
  let fontweight;
  if (bold === "true") {
    fontweight = "bold";
  } else {
    fontweight = "normal";
  }
  return (
    <div className="Text">
      <p
        style={{
          fontWeight: fontweight,
          fontSize: size,
          color: color,
        }}
      >
        {children}
      </p>
    </div>
  );
};

