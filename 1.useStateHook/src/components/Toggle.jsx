import { useState } from "react";

const Toggle = () => {
  let [toggle, setToggle] = useState("Ami");
  return (
    <div>
      <div className="text-center border-2 p-5">
        <h1 className="text-5xl font-semibold">{toggle}</h1>
        <button className="btn mt-4 btn-success" onClick={() => (toggle === "Ami" ? setToggle("Tumi") : setToggle("Ami"))}>
          click
        </button>
      </div>
    </div>
  );
};

export default Toggle;
