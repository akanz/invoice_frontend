import React from "react";

const Message = ({ text, type }: any) => {
  return (
    <div
      className={`p-2 ${
        type === "error" ? "bg-redish" : "bg-greenish"
      } text-white rounded text-center`}
    >
      {text}
    </div>
  );
};

export default Message;
