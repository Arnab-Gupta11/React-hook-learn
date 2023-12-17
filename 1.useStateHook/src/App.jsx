import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  return (
    <>
      <div className="w-2/3 min-h-screen flex justify-center items-center mx-auto">
        <div className="text-center border-2 p-5">
          <h1 className="text-5xl font-semibold">{count}</h1>
          <button className="btn mt-4 btn-success" onClick={() => setCount(++count)}>
            click
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
