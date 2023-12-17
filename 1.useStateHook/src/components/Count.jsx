import { useState } from "react";

const Count = () => {
  let [count, setCount] = useState(0);
  return (
    <div>
      <div className="text-center border-2 p-5">
        <h1 className="text-5xl font-semibold">{count}</h1>
        <button className="btn mt-4 btn-success" onClick={() => setCount(++count)}>
          click
        </button>
      </div>
    </div>
  );
};

export default Count;
