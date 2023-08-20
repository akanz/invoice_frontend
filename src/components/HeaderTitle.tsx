import React from "react";

export interface IHTProps {
  title: string;
  classname?: string;
}
const HeaderTitle = ({ title, classname }: IHTProps) => {
  return <h2 className={`text-2xl font-bold my-2 ${classname}`}>{title}</h2>;
};

export default HeaderTitle;
