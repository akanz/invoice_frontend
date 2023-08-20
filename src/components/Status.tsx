import React from "react";

const Status = ({
  status,
}: {
  status: "pending" | "paid" | "cancelled" | "draft";
}) => {
  return (
    <span
      className={`${
        status === "paid"
          ? "bg-greenish text-greenish"
          : status === "pending"
          ? "bg-orangish text-orangish"
          : status === "draft"
          ? "bg-greyish text-greyish"
          : "bg-redish text-white"
      } p-2 bg-opacity-5 capitalize  px-4 rounded`}
    >
      {status}
    </span>
  );
};

export default Status;
