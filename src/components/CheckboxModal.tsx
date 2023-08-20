import React from "react";
import Checkbox from "./Checkbox";

export const checkBoxdata = [
  {
    name: "draft",
  },
  {
    name: "pending",
  },
  {
    name: "success",
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
