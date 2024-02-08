import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timerId;

    if (isRunning && !isPaused) {
      timerId = setInterval(() => {
        setTime(prevTime => prevTime + 0.01);
      }, 10);
    }

    return () => clearInterval(timerId);
  }, [isRunning, isPaused]);

  const handleStart = () => {
    setIsRunning(true);
    setIsPaused(false);
    setTime(0);
  };

  const handlePauseContinue = () => {
    setIsPaused(prevPaused => !prevPaused);
  };

  const handleStop = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTime(0);
  };

  const formatTime = timeInSeconds => {
    return timeInSeconds.toFixed(2);
  };

  return (
    <div className="timer">
      <p className="timer__time">Time: {formatTime(time)} s</p>
      <button className="timer__button" onClick={handleStart}>Start</button>
      <button className="timer__button" onClick={handlePauseContinue}>
        {isRunning && !isPaused ? "Pause" : "Continue"}
      </button>
      <button className="timer__button" onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Timer;
