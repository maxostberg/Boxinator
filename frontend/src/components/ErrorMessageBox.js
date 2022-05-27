import React from "react";

function ErrorMessageBox(props) {
  return (
    <div className="errorMessageContainer">
      <h2>Validation</h2>
      {Object.entries(props.errorMessages).map(([key, value]) => {
        return <p key={key}>{value}</p>;
      })}
    </div>
  );
}

export default ErrorMessageBox;
