import React from "react";

export default function Calculate({ billValue, tip }) {
  console.log({ billValue, tip });

  return (
    <div>
      <strong>
        You pay ${billValue + tip} (${billValue} + ${tip} tip)
      </strong>
    </div>
  );
}
