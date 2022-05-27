import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useBoxes from "../hooks/useBoxes";

function DispatchesPage() {
  const { getAllBoxes } = useBoxes();
  const boxes = useSelector((state) => state.boxes.boxes);
  const totalWeight = useSelector((state) => state.boxes.totalWeight);
  const totalCost = useSelector((state) => state.boxes.totalCost);

  useEffect(() => {
    if (!boxes) {
      getAllBoxes();
    }
  }, [boxes]);
  return (
    <div className="page tableContainer">
      <div className="totalContainer">
        <p>
          <strong>Total Weight: </strong>
          {totalWeight} Kg
        </p>
        <p>
          <strong>Total Cost: </strong>
          {totalCost} SEK
        </p>
      </div>
      <table className="table">
        <thead className="thead">
          <tr>
            <th>Name</th>
            <th>Weight</th>
            <th>Color</th>
            <th>ShippingCost</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {boxes &&
            boxes.map((box) => {
              return (
                <tr>
                  <td>{box.name}</td>
                  <td>{box.weight} Kg</td>
                  <td style={{ backgroundColor: `rgb(${box.color})` }}></td>
                  <td>{box.shippingCost} SEK</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default DispatchesPage;
