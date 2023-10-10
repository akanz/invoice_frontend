import React, { ChangeEvent, useState } from "react";
import TextInput from "./TextInput";
import { MdDelete } from "react-icons/md";
import Button from "./Button";
import Select from "./Select";
import { IFormProps, optionProps, options } from "../../types/interface";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { initialValues } from "../../utils/formik";
import { useStore } from "../../hooks/useStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { instance } from "../../utils/axios";
import { createNewInvoice } from "../../utils/api";
import toast, { Toaster } from "react-hot-toast";

const FormPage = ({ type }: IFormProps) => {
  const [toggleModal, user] = useStore((state) => [
    state.toggleSideModal,
    state.user,
  ]);
  const [error, setError] = useState(null);
  // Access the client
  const queryClient = useQueryClient();

  const mutation = useMutation(createNewInvoice, {
    onSuccess: (res) => {
      console.log(res);
      toast(res.data.message);
      // Invalidate and refetch
      queryClient.invalidateQueries("invoice");
      toggleModal();
    },
    onError: (error: any) => {
      console.log(error);
      setError(error);
      toast(error.message);
      setTimeout(() => {
        setError(null);
      }, 3000);
    },
  });
  return (
    <div>
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: error ? "#EC5757" : "#33D69F",
            color: "white",
          },
          duration: 2500,
        }}
      />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          mutation.mutate({
            ...values,
            senderId: user.id,
            status: "pending",
          });
        }}
      >
        {({ values, handleSubmit, handleReset, handleChange }) => (
          <Form>
            {/* Sender */}
            {/* <TextInput
              name="senderAddress"
              title="Bill From"
              label="Street Address"
              value={values.senderAddress}
              handleChange={handleChange}
            /> */}
            {/* <div className="flex justify-between">
        <TextInput label="City"  />
        <div className="mx-3">
          <TextInput label="Post Code"  />
        </div>

        <TextInput label="Country"  />
      </div> */}

            {/* Receiver */}
            {/* <TextInput
              title="Bill To"
              name="receiverName"
              label="Client’s Name"
              value={values.receiverName}
              handleChange={handleChange}
            /> */}
            <TextInput
              label="Client’s Email"
              name="receiverEmail"
              value={values.receiverEmail}
              handleChange={handleChange}
            />
            <TextInput
              label="Street Address"
              name="receiverAddress"
              value={values.receiverAddress}
              handleChange={handleChange}
            />
            <div className="flex justify-between">
              <TextInput
                label="Invoice Date"
                name="scheduledDate"
                value={values.scheduledDate}
                handleChange={handleChange}
              />
              <Select options={options} label="Payment Terms" />
            </div>

            {/* Invoice details */}
            <TextInput
              label="Project Description"
              name="description"
              value={values.description}
              handleChange={handleChange}
            />
            {/* Items array */}
            <FieldArray name="items">
              {({ insert, remove, push }) => (
                <div className="my-2 mb-8">
                  <h2 className="text-lg mt-2">Item List</h2>
                  {values.items.length > 0 &&
                    values.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex mb-4 justify-between items-center"
                      >
                        <div className="w-4/10">
                          <div className="my-2 text-greypurple">Item Name</div>
                          <Field
                            className="w-full p-2 border border-lightpurple rounded"
                            name={`items.${index}.description`}
                            placeholder="name"
                            type="text"
                          />
                        </div>

                        <div className="w-1/10">
                          <div className="my-2 text-greypurple">Qty.</div>
                          <Field
                            className="w-full p-2 border border-lightpurple rounded"
                            name={`items.${index}.quantity`}
                            type="number"
                          />
                        </div>

                        <div className="w-1/15">
                          <div className="my-2 text-greypurple">price</div>
                          <Field
                            className="w-full p-2 border border-lightpurple rounded"
                            name={`items.${index}.price`}
                            type="number"
                          />
                        </div>

                        <div className="w-1/15 ">
                          <div className="my-2">Total</div>
                          <div>$ {item.price * item.quantity}</div>
                        </div>
                        <div className="mt-9">
                          <span onClick={() => remove(index)}>
                            <MdDelete className=" text-greypurple" />
                          </span>
                        </div>
                      </div>
                    ))}
                  <div
                    onClick={() =>
                      push({
                        name: "",
                        qty: 0,
                        price: 0,
                      })
                    }
                    className="w-full text-center rounded-full p-3 cursor-pointer text-greypurple bg-lightpurple"
                  >
                    + Add New Item
                  </div>
                </div>
              )}
            </FieldArray>

            {/* Buttons */}
            <div className="w-full my-2 flex items-center justify-between">
              <div>
                {type === "create" && (
                  <span
                    onClick={() => null}
                    className="rounded-full text-sm mr-2.5 p-3 cursor-pointer text-greypurple bg-lightpurple"
                  >
                    Discard
                  </span>
                )}
              </div>
              {type === "edit" ? (
                <div className="flex items-center">
                  <span
                    onClick={() => {
                      handleReset();
                      toggleModal();
                    }}
                    className="rounded-full text-sm mr-2.5 p-3 cursor-pointer text-greypurple bg-lightpurple"
                  >
                    Cancel
                  </span>
                  <Button
                    text="Save changes"
                    classname="p-3 text-sm text-white bg-purplish"
                    onClick={handleSubmit}
                  />
                </div>
              ) : (
                <div className="flex items-center">
                  <span
                    onClick={handleReset}
                    className="rounded-full text-sm mr-2.5 p-3 cursor-pointer text-greypurple bg-lightpurple"
                  >
                    Save as Draft
                  </span>
                  <Button
                    text="Save & Send"
                    loading={mutation.isLoading}
                    classname="p-3 text-sm text-white bg-purplish"
                    onClick={handleSubmit}
                  />
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormPage;
