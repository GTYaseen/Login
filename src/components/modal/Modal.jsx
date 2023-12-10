import React from "react";
import "./modal.css";


export const Modal = ({ children, open, onOk, onCancel, title, ...props }) => {
  const modalStyle = {
    display: open ? "block" : "none",
  };
  let topTitle = "Modal-title";
  if (title) {
    topTitle = title;
  }
  return (
    <div className="modal" style={modalStyle}>
      <div className="modal-content">
        <div className="modal-header">
          <p>{topTitle}</p>
          <span onClick={onCancel} className="close-button">
            &#10006;
          </span>
        </div>
        {children}
        <div className="modal-footer">
          <button className="modbtn" onClick={onOk}>
            OK
          </button>
          <button className="modbtn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
