import React from "react";
import InvoiceBody from "./InvoiceBody";
import SubHeader from "./SubHeader";

const InvoiceComp = () => {
  return (
    <div>
      <SubHeader status="pending" />
      <InvoiceBody />
    </div>
  );
};

export default InvoiceComp;
