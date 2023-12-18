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
  const removeProduct = (id) => {
    const newArray = array.filter((product) => product.id !== id);
    setArray(newArray);
  };
  return (
    <div>
      <div className=" border-2 p-5 mt-3">
        {array.map((product) => {
          return (
            <div key={product.id} className="flex items-center gap-4 justify-between mt-4">
              <h1 className="text-xl font-semibold">
                Product Name: {product.name} || Product Quantity: {product.quantity}
              </h1>
              <button
                className="btn btn-info"
                onClick={() => {
                  removeProduct(product.id);
                }}
              >
                X
              </button>
            </div>
          );
        })}
        <button className="btn mt-4 btn-success" onClick={clearArray}>
          clear all
        </button>
      </div>
    </div>
  );
};

export default ArrayUseState;
