"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { ImageProps } from "next/image";
import React, { ReactNode } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export interface IBtnProps {
  text: string;
  classname: string;
  onClick: (e: any | undefined) => void;
  icon?: ReactNode;
  image?: string | StaticImport;
  loading?: boolean;
}
const Button = ({
  classname,
  image,
  icon,
  text,
  onClick,
  loading,
}: IBtnProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full flex justify-center items-center p-2 px-4 ${classname}`}
    >
      {loading && (
        <AiOutlineLoading3Quarters className="text-white animate-spin mr-1" />
      )}

      <>
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
      </>
    </button>
  );
};

export default Button;
