"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useStore } from "../../hooks/useStore";
import Button from "./Button";
import CheckboxModal from "./CheckboxModal";

const TableHeader = () => {
  const openModal = useStore((state) => state.toggleSideModal);
  const [openCheckModal, setOpenCheckModal] = useState(false);
  return (
    <div className="flex justify-between">
      <div>
        <h2 className="text-3xl font-semibold">Invoices</h2>
        <h4 className="text-lightgrey font-light">
          There are 7 total invoices
        </h4>
      </div>
      <div className="flex items-center">
        <div
          onClick={() => setOpenCheckModal(!openCheckModal)}
          className="flex cursor-pointer relative items-center"
        >
          <span className="mr-2 flex">
            Filter <span className="ml-1 hidden md:flex">by status</span>{" "}
          </span>
          <MdKeyboardArrowDown className="text-purplish" />
          {openCheckModal && <CheckboxModal />}
        </div>
        <Button
          classname="bg-purplish ml-4 text-white"
          text="New Invoice"
          image="/images/plus.svg"
          onClick={openModal}
        />
      </div>
    </div>
  );
};

export default TableHeader;
