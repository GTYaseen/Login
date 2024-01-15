import React from "react";
import "./table.css";

export const Table = ({ columns, list }) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.title}</th>
            ))}
            {/* New column for buttons */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.key}>
              {columns.map((column) => (
                <td key={column.key}>{item[column.key]}</td>
              ))}
              {/* Button cells */}
              <td>
                <button onClick={() => handleButtonClick(item)}>Click me</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Example button click handler
const handleButtonClick = (item) => {
  // Add your button click logic here
  console.log("Button clicked for item:", item);
};
