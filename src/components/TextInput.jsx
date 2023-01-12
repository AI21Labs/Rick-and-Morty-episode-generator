import React from "react";

export const TextInput = ({ onChange, value, height }) => {
  return (
    <div className="textarea-container">
        <textarea
          type="text"
          value={value}
          onChange={onChange}
          style={{ height: height }}
        />
    </div>
  );
};
