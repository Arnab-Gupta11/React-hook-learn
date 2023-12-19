import { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      console.log("Inside interval");
      setTimer(timer + 1);
    }, 1000);

    // cleanup function
    return () => {
      console.log("Clear interval");
      clearInterval(timerId);
    };
  }, [timer]);
  return (
    <div>
      <div className="text-center border-2 p-5 mt-5">
        <h1 className="text-5xl font-semibold">Timer : {timer}</h1>
      </div>
    </div>
  );
};

export default Timer;
