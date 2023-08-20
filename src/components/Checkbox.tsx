import React, { useState } from "react";
import { BsCheckSquareFill } from "react-icons/bs";
import { useStore } from "../../hooks/useStore";
import { IStatusProps, IStatusType } from "../../types/interface";

const Checkbox = ({ name }: { name: IStatusType }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [status, setStatus] = useStore((state) => [
    state.status,
    state.setStatus,
  ]);
  console.log({ isChecked, status });

  const handleSetStatus = () => {
    setIsChecked(!isChecked);
    setStatus(name);
  };
  return (
    <div onClick={handleSetStatus} className="flex my-1.5 items-center">
      {isChecked && status === name ? (
        <BsCheckSquareFill className="text-purplish mr-2 rounded w-4 h-4" />
      ) : (
        <div className="border w-4 h-4 mr-2 border-purplish rounded bg-lightpurple" />
      )}
      <span className="capitalize text-sm">{name}</span>
    </div>
  );
};

export default Checkbox;
