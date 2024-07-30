import React from "react";

export default function Stats({ items }) {
  const numItems = items.length;
  const packedItems = items.filter((items) => items.packed).length;
  const percentPackedItems = Math.round((packedItems / numItems) * 100);

  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  return (
    <footer className="stats">
      <em>
        {percentPackedItems === 100
          ? "You got everything! Ready to go ✈️"
          : `👜 You have ${numItems} items on your list, and you already packed ${packedItems} (${percentPackedItems}%)`}
      </em>
    </footer>
  );
}
