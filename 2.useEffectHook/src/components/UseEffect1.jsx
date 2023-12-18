import { useEffect, useState } from "react";

const UseEffect1 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("I am First useEffect");
    if (count >= 1) {
      document.title = `chat(${count})`;
    } else {
      document.title = `chat`;
    }
  }, [count]); //this useEffect will run whenever count state is changed
  useEffect(() => {
    console.log("I am Second useEffect");
  }, []); //this useEffect will run first time render componenet
  useEffect(() => {
    console.log("No dependency array");
  }); //If we do not use dependency array then it will run for every rendering
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
