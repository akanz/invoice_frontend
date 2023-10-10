import React, { ReactPropTypes } from "react";

export interface ITextProps {
  title?: string;
  label: string;
  inputStyle?: string;
  handleChange?: (e: any) => void;
  readOnly?: boolean;
  value?: string | number;
  name?: string;
  type?: string;
  defaultValue?: string | number;
}
const TextInput = ({
  title,
  label,
  inputStyle,
  readOnly = false,
  ...props
}: ITextProps) => {
  const { handleChange, value, name, type, defaultValue }: any = props;
  return (
    <div className="mb-4">
      <h3 className="text-sm mb-4 text-purplish">{title}</h3>
      <div>
        <label className="my-2 text-greypurple">{label}</label>
      </div>
      <div>
        <input
          defaultValue={defaultValue ?? ""}
          onChange={handleChange}
          readOnly={readOnly}
          value={value}
          name={name}
          type={type ? type : name === "password" ? "password" : "text"}
          className={`${inputStyle} w-full p-2 border border-lightpurple rounded`}
        />
      </div>
    </div>
  );
};

export default TextInput;
