import React from "react";

function Button(props) {
  return (
    <button
      className="boxinatorButton"
      data-testid="buttonTest"
      onClick={props.onClick}
      type={props.type}
    >
      {props.btnText}
    </button>
  );
}

export default Button;
