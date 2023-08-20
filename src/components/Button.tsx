"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { ImageProps } from "next/image";
import React, { ReactNode } from "react";

export interface IBtnProps {
  text: string;
  classname: string;
  onClick: () => void;
  icon?: ReactNode;
  image?: string | StaticImport;
}
const Button = ({ classname, image, icon, text, onClick }: IBtnProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full flex justify-center items-center p-2 px-4 ${classname}`}
    >
      {icon && icon}
      {image && (
        <Image
          className="mr-2 -ml-1"
          src={image}
          alt="add invoice"
          width={32}
          height={32}
        />
      )}
      {text}
    </button>
  );
};

export default Button;
