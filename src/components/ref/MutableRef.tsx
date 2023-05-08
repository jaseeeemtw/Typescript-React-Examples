import { useEffect, useRef, useState } from "react";

function MutableRef() {
  const [timer, setTimer] = useState(0);
  const [running, setIsRunning] = useState<boolean | null>(true);
  const timerRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (timerRef.current) {
      console.log("cleared!");
      setIsRunning(false);
      window.clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      console.log("timer called");
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, [running]);

  return (
    <>
      <p> The timer is at {timer}</p>
      <button onClick={stopTimer}>Stop Timer</button>
    </>
  );
}

export default MutableRef;
