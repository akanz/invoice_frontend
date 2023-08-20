"use client";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import Status from "./Status";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Modal from "./Modal";
import { IStatusProps } from "../../types/interface";

const SubHeader = ({ status = "pending" }: IStatusProps) => {
  const [deleteModal, setDeleteModal] = useState(false);

  const handleDeleteInvoice = () => {
    setDeleteModal(false);
  };
  const MoreComp = (
    <div className="flex justify-end">
      <Button
        classname="bg-lightpurple mx-2 text-greypurple"
        onClick={() => setDeleteModal(false)}
        text="Cancel"
      />
      <Button
        classname="bg-redish mx-2 text-white"
        onClick={handleDeleteInvoice}
        text="Delete"
      />
    </div>
  );

  return (
    <div>
      <Link href={"/"} passHref>
        <div className="mb-4 flex items-center">
          <MdKeyboardArrowLeft className="text-purplish" />
          <span className="ml-1"> Go back</span>
        </div>
      </Link>

      <div className="px-6 py-5 shadow my-4 flex items-center justify-between rounded-lg bg-white">
        <div className="flex justify-between w-full md:w-auto items-center">
          <span className="mr-2">Status</span>
          <Status status={status} />
        </div>
        <div className="fixed bottom-0 justify-between p-6 md:p-0 right-0 md:static w-full bg-white md:w-auto flex items-center">
          <Button
            classname="bg-lightpurple mx-2 text-greypurple"
            onClick={() => null}
            text="Edit"
          />
          <Button
            classname="bg-redish mx-2 text-white"
            onClick={() => setDeleteModal(!deleteModal)}
            text="Delete"
          />
          <Button
            classname="bg-purplish text-white"
            onClick={() => null}
            text="Mark as Paid"
          />
        </div>
      </div>
      {deleteModal && (
        <Modal
          title="Confirm Deletion"
          description="Are you sure you want to delete invoice #XM9141? This action cannot be undone."
          component={MoreComp}
        />
      )}
    </div>
  );
};

export default SubHeader;
