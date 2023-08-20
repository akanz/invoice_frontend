import React from "react";
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
  return (
    <div className="pt-12">
      {rowdata.map((item) => (
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
