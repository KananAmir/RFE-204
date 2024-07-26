import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId: number = setInterval(() => {
      setTime(new Date());
      console.log(time);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div>
      <h1>Current Time:</h1>
      <h2>{formattedTime}</h2>
    </div>
  );
};

export default Clock;
