import React from "react";

function AddBoxesForm(props) {
  return (
    <div className="formContainer">
      <form onSubmit={props.onSubmit}>{props.children}</form>
    </div>
  );
}

export default AddBoxesForm;
