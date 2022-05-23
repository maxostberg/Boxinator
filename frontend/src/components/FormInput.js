import React, { useState } from "react";

function FormInput(props) {
  const [inputValue] = useState(props.value);

  return (
    <div className="inputContainer">
      <label>
        <strong>{props.label}</strong>
      </label>
      <input
        type={props.type}
        value={inputValue}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        className={`boxinatorInput`}
      />
      {props.valid && <p className="notValidText">You can not do that</p>}
    </div>
  );
}

export default FormInput;
