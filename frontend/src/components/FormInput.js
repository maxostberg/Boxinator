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
        data-testid={"inputTest"}
      />
    </div>
  );
}

export default FormInput;
