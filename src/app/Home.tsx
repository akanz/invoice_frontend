import React from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import InvoiceLayout from "./invoice/layout";

const Home = () => {
  return (
    <InvoiceLayout>
      <Table />
    </InvoiceLayout>
  );
};

export default Home;
