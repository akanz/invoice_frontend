import React, { useState } from "react";
import { optionProps } from "../../types/interface";
import TextInput from "./TextInput";

const Select = ({
  options,
  label,
}: {
  options: optionProps[];
  label: string;
}) => {
  const [selectModal, setSelectModal] = useState(false);
  return (
    <div onClick={() => setSelectModal(!selectModal)} className="relative">
      <TextInput label={label} readOnly={true} />
      {selectModal && (
        <div className="shadow-lg rounded bg-white w-full absolute top-24">
          {options.map((item, i) => (
            <div
              className="px-4 py-2.5 cursor-pointer text-sm hover:text-purplish border-b border-lightpurple"
              key={i}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
