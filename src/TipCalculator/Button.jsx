import React from "react";

export default function Button({ onReset }) {
  return (
    <div>
      <button onCLick={onReset}>Reset</button>
    </div>
  );
}
