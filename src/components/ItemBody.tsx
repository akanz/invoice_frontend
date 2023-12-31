import React from "react";

export const itemData = [
  {
    description: "Banner Design",
    quantity: 1,
    price: 156.0,
    total: 156.0,
  },
];

const ItemBody = ({ items }: any) => {
  const total = items.reduce((total: number, item: any) => {
    return total + (item.price * item.quantity);
  }, 0);
  console.log(total);
  return (
    <div className="rounded bg-whitish">
      <div className="p-4 px-6">
        <div className="flex text-sm text-greypurple my-3 mb-6 items-center justify-between">
          <div className="w-4/10">Item Name</div>
          <div>QTY.</div>
          <div>Price</div>
          <div>Total</div>
        </div>
        {items.map((item: any, i: number) => (
          <div key={i} className="flex my-3 items-center justify-between">
            <div className="w-4/10">{item.description}</div>
            <div className="text-greypurple">{item.quantity}</div>
            <div className="text-greypurple">£{item.price}</div>
            <div>£{item.quantity * item.price}</div>
          </div>
        ))}
      </div>

      <div className="bg-greyish rounded-b p-4 text-white flex justify-between">
        <span className="text-sm">Amount Due</span>
        <span className="text-xl">£{total}</span>
      </div>
    </div>
  );
};

export default ItemBody;
