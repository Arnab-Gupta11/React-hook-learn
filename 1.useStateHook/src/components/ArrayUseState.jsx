import { useState } from "react";

const ArrayUseState = () => {
  const products = [
    {
      id: 1,
      name: "watch",
      quantity: 10,
    },
    {
      id: 2,
      name: "Sunglass",
      quantity: 15,
    },
  ];
  const [array, setArray] = useState(products);
  const clearArray = () => {
    setArray([]);
  };
  return (
    <div>
      <div className=" border-2 p-5">
        {array.map((product) => (
          <h1 key={product.id} className="text-xl font-semibold">
            Product Name: {product.name} || Product Quantity: {product.quantity}
          </h1>
        ))}
        <button className="btn mt-4 btn-success" onClick={clearArray}>
          clear
        </button>
      </div>
    </div>
  );
};

export default ArrayUseState;
