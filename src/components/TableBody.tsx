"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { base_url, instance } from "../../utils/axios";
import PageLoading from "./alerts/PageLoading";
import TableRow, { ITRowProps } from "./TableRow";

export const rowdata: ITRowProps[] = [
  {
    name: "Jensen Huang",
    date: "Due  19 Aug 2021",
    amount: "£1,800.90",
    status: "paid",
    id: "XM9141",
  },
  {
    name: "Jensen Huang",
    date: "Due  19 Aug 2021",
    amount: "£1,800.90",
    status: "paid",
    id: "XM9141",
  },
  {
    name: "Jensen Huang",
    date: "Due  19 Aug 2021",
    amount: "£1,800.90",
    status: "paid",
    id: "XM9141",
  },
  {
    name: "Jensen Huang",
    date: "Due  19 Aug 2021",
    amount: "£1,800.90",
    status: "paid",
    id: "XM9141",
  },
  {
    name: "Jensen Huang",
    date: "Due  19 Aug 2021",
    amount: "£1,800.90",
    status: "paid",
    id: "XM9141",
  },
];
const TableBody = () => {
  const getInvoices = async () => {
    const res = await instance.get(`/invoice`);
    return res.data;
  };
  // Queries
  const { data, isLoading, isError }: any = useQuery({
    queryKey: ["invoice"],
    queryFn: getInvoices,
  });

  console.log(data);
  if (isLoading) {
    return <PageLoading />;
  }
  return (
    <div className="pt-12">
      {data &&
        data?.map((item: any) => (
          <TableRow
            key={item.id}
            name={item.name}
            id={item.id}
            amount={item.amount}
            status={item.status}
            date={item.date}
          />
        ))}
    </div>
  );
};

export default TableBody;
