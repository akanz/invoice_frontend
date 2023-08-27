import React from "react";
import { IStatusType } from "../../types/interface";
import Checkbox from "./Checkbox";

export interface cBInterface {
  name: IStatusType;
}
export const checkBoxdata: cBInterface[] = [
  {
    name: "draft",
  },
  {
    name: "pending",
  },
  {
    name: 'paid',
  },
  { name: "cancelled" },
];
const CheckboxModal = () => {
  return (
    <div className="shadow-lg bg-white w-full top-7 absolute rounded p-4">
      {checkBoxdata.map((item, i) => (
        <Checkbox key={i} name={item.name} />
      ))}
    </div>
  );
};

export default CheckboxModal;
