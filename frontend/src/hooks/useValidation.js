import React, { useState } from "react";

function useValidation(conditions) {
  const [errors, setErrors] = useState({});
  const [validFields, setValidFields] = useState({});

  const checkConditions = (field, value) => {
    if (conditions[field].callback(value)) {
      setErrors({ ...errors, [field]: conditions[field].message });
      return;
    }

    delete errors[field];
    return;
  };

  return {
    errors,
    validFields,
    checkConditions,
  };
}

export default useValidation;
