import { useDispatch } from "react-redux";
import {
  saveBoxes,
  saveTotalCost,
  saveTotalWeight,
} from "../redux/slices/boxSlice";
import { resetFormState, startEditingForm } from "../redux/slices/formSlice";
import useHttp from "./useHttp";

function useBoxes() {
  const dispatch = useDispatch();
  const { request } = useHttp();

  const getAllBoxes = async () => {
    const result = await request({
      url: "/api/boxes",
      method: "GET",
    });

    calculateTotalWeight(result);
    calculateTotalCost(result);

    dispatch(saveBoxes(result));
  };

  const postBox = async (box) => {
    const result = await request({
      url: "/api/postbox",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: box,
    });
    dispatch(
      startEditingForm({
        formId: "boxForm",
        data: { id: 0, name: null, weight: null, color: null, country: null },
      })
    );
    await getAllBoxes();
  };

  const calculateTotalWeight = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i].weight;
    }

    dispatch(saveTotalWeight(total));
  };

  const calculateTotalCost = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i].shippingCost;
    }
    dispatch(saveTotalCost(total));
  };

  return {
    postBox,
    getAllBoxes,
  };
}

export default useBoxes;
