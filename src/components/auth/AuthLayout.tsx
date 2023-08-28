import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <form>
      <Toaster />
      <div className="p-4 w-4/5 shadow rounded bg-white lg:w-1/3 mx-auto mt-20">
        {children}
      </div>
    </form>
  );
};

export default AuthLayout;
