import React from "react";

export interface ITextProps {
  title?: string;
  label: string;
  inputStyle?: string;
  readOnly?: boolean;
}
const TextInput = ({
  title,
  label,
  inputStyle,
  readOnly = false,
  ...props
}: ITextProps) => {
  return (
    <div className="mb-4">
      <h3 className="text-sm mb-4 text-purplish">{title}</h3>
      <div>
        <label className="my-2 text-greypurple">{label}</label>
      </div>
      <div>
        <input
          readOnly={readOnly}
          className={`${inputStyle} w-full p-2 border border-lightpurple rounded`}
        />
      </div>
    </div>
  );
};

export default TextInput;
