import React from "react";

export default function Bill({ billValue, onChangeBill }) {
  return (
    <div>
      <span>
        <strong>How much was the bill? </strong>
        <input
          placeholder="Bill Value"
          type="text"
          value={billValue}
          onChange={(e) =>
            onChangeBill(
              isNaN(Number(e.target.value)) ? "" : Number(e.target.value)
            )
          }
        />
      </span>
    </div>
  );
}
