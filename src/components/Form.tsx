import React from "react";
import TextInput from "./TextInput";
import { MdDelete } from "react-icons/md";
import Button from "./Button";
import Select from "./Select";
import { IFormProps, optionProps } from "../../types/interface";

export const options: optionProps[] = [
  {
    name: "Net 1 Day",
    day: 1,
  },
  {
    name: "Net 7 Days",
    day: 7,
  },
  {
    name: "Net 14 Days",
    day: 14,
  },
  {
    name: "Net 30 Days",
    day: 39,
  },
];
const Form = ({ type }: IFormProps) => {
  
  return (
    <form>
      {/* Sender */}
      <TextInput title="Bill From" label="Street Address" />
      <div className="flex justify-between">
        <TextInput label="City" />
        <div className="mx-3">
          <TextInput label="Post Code" />
        </div>

        <TextInput label="Country" />
      </div>

      {/* Receiver */}
      <TextInput title="Bill To" label="Client’s Name" />
      <TextInput label="Client’s Email" />
      <TextInput label="Street Address" />
      <div className="flex justify-between">
        <TextInput label="Invoice Date" />
        <Select options={options} label="Payment Terms" />
      </div>

      {/* Invoice details */}
      <TextInput label="Project Description" />
      <div className="my-2 mb-8">
        <h2 className="text-lg mt-2">Item List</h2>
        <div className="flex justify-between items-center">
          <div className="w-4/10">
            <TextInput label="Item Name" />
          </div>

          <div className="w-1/10 mx-3">
            <TextInput label="Qty." />
          </div>
          <div className="w-1/15">
            <TextInput label="Price" />
          </div>
          <div className="w-1/15 ">
            <TextInput inputStyle={"border-0"} label="Total" />
          </div>

          <span>
            <MdDelete className=" text-greypurple" />
          </span>
        </div>
        <Button
          text="+ Add New Item"
          classname="w-full text-greypurple bg-lightpurple"
          onClick={() => null}
        />
      </div>
      <div className="w-full my-2 flex items-center justify-between">
        <div>
          {type === "create" && (
            <Button
              text="Discard"
              classname="p-3 text-sm text-greypurple bg-lightpurple mr-2.5"
              onClick={() => null}
            />
          )}
        </div>
        {type === "edit" ? (
          <div className="flex items-center">
            <Button
              text="Cancel"
              classname="p-3 text-sm text-greypurple bg-lightpurple mr-2.5"
              onClick={() => null}
            />
            <Button
              text="Save Changes"
              classname="p-3 text-sm text-white bg-purplish"
              onClick={() => null}
            />
          </div>
        ) : (
          <div className="flex items-center">
            <Button
              text="Save as Draft"
              classname="p-3 text-sm text-greypurple  bg-greyish mr-2.5"
              onClick={() => null}
            />
            <Button
              text="Save & Send"
              classname="p-3 text-sm text-white bg-purplish"
              onClick={() => null}
            />
          </div>
        )}
      </div>
    </form>
  );
};

export default Form;
