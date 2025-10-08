"use client";
import React, { useState, useEffect } from "react";
function CounterApp() {
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    if (timeLeft === 0) {
      setIsActive(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const handleClick = () => {
    if (isActive && timeLeft > 0) {
      setCount((prev) => prev + 1);
    }
  };

  const startContador = () => {
    setCount(0);
    setTimeLeft(10);
    setIsActive(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">{count}</h1>
        <p className="mt-2 text-lg font-semibold">
          Time left: {timeLeft} seconds
        </p>

        <button
          onClick={handleClick}
          disabled={!isActive || timeLeft === 0}
          className="mt-4 px-4 py-2 bg-gray-200 rounded"
        >
          +
        </button>
        <button
          onClick={startContador}
          className="mt-4 px-4 py-2 bg-gray-200 rounded"
        >Start Counter
        </button>
    </div>
  );
}

export default CounterApp;
