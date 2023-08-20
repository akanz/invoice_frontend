"use client";
import React from "react";
import Image from "next/image";
import { useStore } from "../../hooks/useStore";
import HeaderTitle from "./HeaderTitle";
import Form from "./Form";

const Sidebar = () => {
  const sideBarOpen = useStore((state) => state.sideModal);
  const toggleModal = useStore((state) => state.toggleSideModal);
  console.log(sideBarOpen);
  return (
    <>
      <div className="bg-greyish z-10 w-full lg:w-28 fixed flex lg:flex-col justify-between lg:h-full lg:rounded-r-3xl">
        <Image
          src={"/images/nav.svg"}
          width={112}
          height={112}
          alt="nav icon"
        />
        <div></div>
        <div className="flex items-center lg:block">
          <div className="h-24 flex items-center justify-center">
            <Image
              src={"/images/moon.svg"}
              width={20}
              height={20}
              alt="darkmode icon"
            />
          </div>

          <div className="flex items-center p-8 border-t-darkish border-t-0.5 justify-center">
            <Image
              src={"/images/pic.svg"}
              width={40}
              height={40}
              alt="nav icon"
            />
          </div>
        </div>
      </div>
      {sideBarOpen && (
        <>
          <div
            onClick={toggleModal}
            className="bg-black opacity-40 absolute inset-0"
          ></div>
          <div className="w-4/5 mt-10 pt-20 lg:mt-0 lg:pt-10 lg:w-1/2 lg:pl-28 py-8 rounded-r-3xl overflow-auto absolute top-0 bottom-0 bg-white shadow-xl">
            <div className="w-10/12 pt-4 mx-auto">
              <HeaderTitle title="Edit #XM9141" />
              <Form type="edit" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
