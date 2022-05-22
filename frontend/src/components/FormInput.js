import React from "react";

function FormInput(props) {
  return (
    <div className="inputContainer">
      <label>
        <strong>{props.label}</strong>
      </label>
      <input
        value={props.value}
        onChange={props.onChange}
        className="boxinatorInput"
      />
    </div>
  );
}

export default FormInput;
