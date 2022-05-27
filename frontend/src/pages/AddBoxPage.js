import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddBoxesForm from "../components/AddBoxesForm";
import Button from "../components/Button";
import ErrorMessageBox from "../components/ErrorMessageBox";
import FormDropDown from "../components/FormDropDown";
import FormInput from "../components/FormInput";
import convertToRgb from "../helpers/convertToRgb";
import useBoxes from "../hooks/useBoxes";
import useValidation from "../hooks/useValidation";
import {
  startEditingForm,
  formFieldChange,
  resetFormState,
} from "../redux/slices/formSlice";

function AddBoxPage() {
  const dispatch = useDispatch();
  const boxForm = useSelector((state) => state.forms.boxForm);
  const { postBox } = useBoxes();
  const { errors, checkConditions } = useValidation({
    name: {
      callback: (value) => {
        return value.length < 2;
      },
      message: "name must be more than 2 characters",
    },
    weight: {
      callback: (value) => {
        return value <= 0 || isNaN(value);
      },
      message: "Weight cant be less than 0 and must be a number",
    },
  });

  useEffect(() => {
    dispatch(
      startEditingForm({
        formId: "boxForm",
        data: { id: 0, name: null, weight: null, color: null, country: null },
      })
    );
  }, [dispatch]);

  const handleFormFieldChange = (fieldName, value) => {
    checkConditions(fieldName, value);
    dispatch(
      formFieldChange({ formId: "boxForm", field: fieldName, value: value })
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    postBox(boxForm);
    e.target.reset();
  };

  return (
    <div className="page centerOnPage" data-test="addPage">
      {Object.keys(errors).length !== 0 ? (
        <ErrorMessageBox errorMessages={errors} />
      ) : null}
      <AddBoxesForm onSubmit={(e) => handleFormSubmit(e)}>
        <FormInput
          label="Name"
          defaultValue={boxForm?.name === null ? "" : boxForm?.name}
          onChange={(e) => handleFormFieldChange("name", e.target.value)}
        />
        <FormInput
          label="Weight"
          type="number"
          defaultValue={
            boxForm?.weight === null ? "0" : toString(boxForm?.weight)
          }
          onChange={(e) =>
            handleFormFieldChange(
              "weight",
              isNaN(e.target.value)
                ? 0
                : parseInt(e.target.value) < 0
                ? 0
                : parseInt(e.target.value)
            )
          }
        />
        <FormInput
          label="Box color"
          type="color"
          defaultValue="#ffffff"
          onChange={(e) =>
            handleFormFieldChange("color", convertToRgb(e.target.value))
          }
        />
        <FormDropDown
          label="Country"
          value={boxForm?.country ? boxForm?.country : ""}
          onChange={(e) =>
            handleFormFieldChange(
              "country",
              e.target.value === "" ? null : e.target.value
            )
          }
        />
        <Button type="submit" btnText="Save" />
      </AddBoxesForm>
    </div>
  );
}

export default AddBoxPage;
