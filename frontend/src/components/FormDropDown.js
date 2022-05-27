import React from "react";

function FormDropDown(props) {
  return (
    <div className="inputContainer">
      <label>
        <strong>{props.label}</strong>
      </label>
      <select
        className={`boxinatorInput boxinatorDropDown`}
        onChange={props.onChange}
        value={props.value}
      >
        <option value={""}>Select Country</option>
        <option value={"Sweden"}>Sweden</option>
        <option value={"China"}>China</option>
        <option value={"Brazil"}>Brazil</option>
        <option value={"Australia"}>Australia</option>
      </select>
    </div>
  );
}

export default FormDropDown;
