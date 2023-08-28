import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const PageLoading = () => {
  return (
    <div className="flex justify-center items-center">
      {" "}
      <AiOutlineLoading3Quarters className="text-4xl animate-spin" />{" "}
    </div>
  );
};

export default PageLoading;
