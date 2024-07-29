import React, { useState } from "react";
import "./dateCounter.css";

export default function DateCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("july 28 2024");
  date.setDate(date.getDate() + count);

  /* const handleStepPlus = () => {
    setStep((s) => s + 1);
  };

  const handleStepMinus = () => {
    setStep((s) => s - 1);
  };
 */
  const handleCountPlus = () => {
    setCount((s) => s + step);
  };

  const handleCountMinus = () => {
    setCount((s) => s - step);
  };

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <div className="container">
      <div>
        <input
          type="range"
          min="0"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
        {/* <button onClick={handleStepMinus}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleStepPlus}>+</button> */}
      </div>
      <br />
      <div>
        <button onClick={handleCountMinus}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={handleCountPlus}>+</button>
      </div>
      <p>
        {count === 0
          ? "Today is "
          : `${count} days ${count < 0 ? "ago was " : "from today is "}`}
        {date.toDateString()}.
      </p>
      {step !== 1 || count !== 0 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
}
