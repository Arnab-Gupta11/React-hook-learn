import { useState } from "react";

const ObjectUseState = () => {
  const obj = {
    name: "Watch",
    quantity: 10,
    price: 2000,
  };
  const [product, setProduct] = useState(obj);
  const updateObj = () => {
    setProduct({ ...product, name: "White Watch" });
  };

  return (
    <div>
      <div className=" border-2 p-5 mt-3">
        <h1 className="text-xl font-semibold">
          Product Name: {product.name} || Product Quantity: {product.quantity}
        </h1>

        <button className="btn mt-4 btn-success" onClick={updateObj}>
          Update
        </button>
      </div>
    </div>
  );
};

export default ObjectUseState;
