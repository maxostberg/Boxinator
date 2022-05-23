import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddBoxesForm from "../components/AddBoxesForm";
import FormDropDown from "../components/FormDropDown";
import FormInput from "../components/FormInput";
import convertToRgb from "../helpers/convertToRgb";
import useValidation from "../hooks/useValidation";
import { startEditingForm, formFieldChange } from "../redux/slices/formSlice";

function AddBoxPage() {
  const dispatch = useDispatch();
  const boxForm = useSelector((state) => state.forms.boxForm);
  const { errors, validFields, checkConditions } = useValidation({
    name: {
      callback: (value) => {
        return value.length < 6;
      },
      message: "name must be more than 6 characters",
    },
  });

  useEffect(() => {
    dispatch(
      startEditingForm({
        formId: "boxForm",
        data: { name: "", weight: 0, boxColor: "", country: "" },
      })
    );
  }, [dispatch]);

  const handleFormFieldChange = (fieldName, value) => {
    checkConditions(fieldName, value);
    console.log(validFields);
    dispatch(
      formFieldChange({ formId: "boxForm", field: fieldName, value: value })
    );
  };

  //make component
  const errorBoxes = (obj) => {
    for (const [key, value] of Object.entries(obj)) {
      console.log(obj);
      return <p>{value}</p>;
    }
  };

  return (
    <div className="page centerOnPage">
      {Object.keys(errors).length !== 0 ? errorBoxes(errors) : null}
      <AddBoxesForm>
        <FormInput
          label="Name"
          value={boxForm?.name}
          onChange={(e) => handleFormFieldChange("name", e.target.value)}
          valid={false}
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
            handleFormFieldChange(
              "boxColor",
              convertToRgb(
                e.target.value === "" ? "255,255,255" : e.target.value
              )
            )
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
