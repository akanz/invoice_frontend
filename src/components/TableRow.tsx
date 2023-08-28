import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

export interface ITRowProps {
  id: string;
  date: string;
  name: string;
  amount: string;
  status: "draft " | "pending" | "paid" | "cancelled";
}
const TableRow = ({ id, date, name, amount, status }: ITRowProps) => {
  return (
    <Link passHref href={`/invoice/${id}`}>
      <div className="p-4 px-6 mt-5 shadow-sm rounded-lg bg-white flex flex-wrap items-center justify-between">
        <span>#{id}</span>
        <span className="text-lightgrey">{date}</span>
        <span className="text-lightgrey">{name}</span>
        <span className="text-xl">{amount}</span>
        <span
          className={`${
            status === "paid"
              ? "bg-greenish text-greenish"
              : status === "pending"
              ? "bg-orangish bg-opacity-5 text-orangish"
              : status === "cancelled"
              ? "bg-redish bg-opacity-5 text-redish"
              : "bg-greyish text-greyish"
          } p-2 bg-opacity-5  px-4 rounded`}
        >
          {status}
        </span>
        <MdKeyboardArrowRight className="text-purplish hidden md:block text-xl" />
      </div>
    </Link>
  );
};

export default TableRow;
