import { useCallback, useState } from "react";

const useHttp = () => {
  const request = useCallback(async (requestObj) => {
    try {
      const response = await fetch(requestObj.url, {
        method: requestObj.method ? requestObj.method : "GET",
        headers: requestObj.headers ? requestObj.headers : {},
        body: requestObj.body ? JSON.stringify(requestObj.body) : null,
      });

      if (!response.ok) {
        throw new Error(`Request Failed ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return error.message;
      //dispatch(addErrorMessage(error.message));
    }
  }, []);

  return {
    request,
  };
};

export default useHttp;
