import React from "react";
import InvoiceBody from "./InvoiceBody";
import SubHeader from "./SubHeader";

const InvoiceComp = ({ data }: { data: any }) => {
  return (
    <div>
      <SubHeader status={data.status} />
      <InvoiceBody data={data} />
    </div>
  );
};

export default InvoiceComp;
