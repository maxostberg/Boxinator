import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddBoxesForm from "../components/AddBoxesForm";
import FormDropDown from "../components/FormDropDown";
import FormInput from "../components/FormInput";
import convertToRgb from "../helpers/convertToRgb";
import { startEditingForm, formFieldChange } from "../redux/slices/formSlice";

function AddBoxPage() {
  const dispatch = useDispatch();
  const boxForm = useSelector((state) => state.forms.boxForm);

  useEffect(() => {
    dispatch(
      startEditingForm({
        formId: "boxForm",
        data: { name: "", weight: 0, boxColor: "", country: "" },
      })
    );
  }, [dispatch]);

  const handleFormFieldChange = (fieldName, value) => {
    dispatch(
      formFieldChange({ formId: "boxForm", field: fieldName, value: value })
    );
  };

  //TODO Create a validation hook that takes in a compare and then return a message and a red class to the input.

  return (
    <div className="page centerOnPage">
      <AddBoxesForm>
        <FormInput
          label="Name"
          value={boxForm?.name}
          onChange={(e) => handleFormFieldChange("name", e.target.value)}
        />
        <FormInput
          label="Weight"
          value={boxForm?.weight}
          onChange={(e) => handleFormFieldChange("weight", e.target.value)}
        />
        <FormInput
          label="Box color"
          type="color"
          defaultValue="#ffffff"
          onChange={(e) =>
            handleFormFieldChange("boxColor", convertToRgb(e.target.value))
          }
        />
        <FormDropDown
          label="Country"
          value={boxForm?.country}
          onChange={(e) => handleFormFieldChange("country", e.target.value)}
        />
      </AddBoxesForm>
    </div>
  );
}

export default AddBoxPage;
