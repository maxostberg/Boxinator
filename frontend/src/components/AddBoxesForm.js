import React from "react";

function AddBoxesForm(props) {
  return (
    <div className="formContainer">
      <h2>Add a box</h2>
      <form onSubmit={props.onSubmit}>{props.children}</form>
    </div>
  );
}

export default AddBoxesForm;
