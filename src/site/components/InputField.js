import React from "react";

const InputField = (props) => {
  const { icon, type, placeholder, value, changeValue } = props;
  return (
    <div className="form-group">
      <span className="icon">{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={changeValue}
        className="form-control"
      />
    </div>
  );
};

export default InputField;
