import React from "react";
import HeaderTitle from "./HeaderTitle";
import ItemBody from "./ItemBody";

const InvoiceBody = () => {
  return (
    <div className="rounded-lg my-6 bg-white shadow p-6 md:p-8 md:px-10">
      <div className="mt-3 mb-6">
        <div className="flex mb-8 justify-between">
          <div className="mb-6 md:mb-0">
            <HeaderTitle title="#XM9141" />
            <span className="text-greypurple">Graphic Design</span>
          </div>
          <div className="w-1/2 md:w-1/5 text-greypurple md:text-end">
            19 Union Terrace London E1 3EZ United Kingdom
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-1/2 md:w-3/10">
            <div className="mb-3">
              <h4 className="text-greypurple mb-2">Invoice Date</h4>
              <h2 className="text-lg font-bold">21 Aug 2021</h2>
            </div>
            <div>
              <h4 className="text-greypurple mb-2">Payment Date</h4>
              <h2 className="text-lg font-bold">21 Aug 2021</h2>
            </div>
          </div>

          <div className="w-1/2 md:w-4/10">
            <h4 className="text-greypurple mb-2">Bill To</h4>
            <h2 className="text-lg font-bold">Alex Grim</h2>
            <div className="text-sm w-4/5 md:w-3/5 text-greypurple">
              84 Church Way Bradford BD1 9PB United Kingdom
            </div>
          </div>
          <div className="mt-5 md:mt-0 w-full md:w-4/10">
            <h4 className="text-greypurple mb-2">Sent to</h4>
            <h2 className="text-lg font-bold">alexgrim@mail.com</h2>
          </div>
        </div>
      </div>
      <ItemBody />
    </div>
  );
};

export default InvoiceBody;
