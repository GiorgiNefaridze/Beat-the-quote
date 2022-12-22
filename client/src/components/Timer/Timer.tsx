import React, { memo, useEffect } from "react";

interface IPops {
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
}

const Timer: React.FC<IPops> = memo(({ timer, setTimer }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer((prev) => prev - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <div>
      <h1>Timer: {timer} </h1>
    </div>
  );
});

export default Timer;
