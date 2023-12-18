import { useEffect, useState } from "react";

const UseEffect1 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 1) {
      document.title = `chat(${count})`;
    } else {
      document.title = `chat`;
    }
  });
  console.log("Outside useEffect");

  const counting = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div className="text-center border-2 p-5">
        <h1 className="text-5xl font-semibold">{count}</h1>
        <button className="btn mt-4 btn-success" onClick={counting}>
          click
        </button>
      </div>
    </div>
  );
};

export default UseEffect1;
