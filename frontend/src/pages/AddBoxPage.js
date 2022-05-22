import React from "react";
import AddBoxesForm from "../components/AddBoxesForm";
import FormInput from "../components/FormInput";

function AddBoxPage() {
  return (
    <div className="page centerOnPage">
      <AddBoxesForm>
        <FormInput label="hej" />
        <FormInput label="hej" />
        <FormInput label="hej" />
      </AddBoxesForm>
    </div>
  );
}

export default AddBoxPage;
