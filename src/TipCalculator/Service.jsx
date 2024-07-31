import React from "react";

export default function Service({ children, tip, onChangeTip }) {
  return (
    <div>
      <span>
        <strong>{children}</strong>
        <select
          value={tip}
          onChange={(e) => onChangeTip(Number(e.target.value))}
        >
          <option value="0">Disssatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>
      </span>
    </div>
  );
}
