import React, { ReactNode } from "react";

export interface IModalProps {
  title: string;
  description: string;
  component?: ReactNode;
}
const Modal = (props: IModalProps) => {
  const { title, description, component } = props;
  return (
    <>
      <div className="py-8 px-10 z-10 rounded-lg absolute top-3/10 left-2/10 lg:left-3/10 w-2/3 lg:w-1/3 bg-white shadow-lg">
        <h1 className="text-2xl mb-3 font-bold">{title}</h1>
        <h3 className="mb-3 text-sm text-greypurple">{description}</h3>
        <div>{component}</div>
      </div>
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
    </>
  );
};

export default Modal;
