import React, { ReactNode } from "react";
import Sidebar from "../../components/Sidebar";

const InvoiceLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Sidebar />
      <div className="lg:w-3/5 w-11/12 mb-40 md:w-4/5 pt-40 lg:pt-20 mx-auto">
        {children}
      </div>
    </div>
  );
};

export default InvoiceLayout;
