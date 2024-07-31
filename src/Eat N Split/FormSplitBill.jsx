import React, { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");

  const [expense, setExpense] = useState("");

  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const friendExpense = bill ? bill - expense : "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !expense) return;

    onSplitBill(whoIsPaying === "user" ? friendExpense : -expense);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🙎Your expense</label>
      <input
        type="text"
        value={expense}
        onChange={(e) =>
          setExpense(
            Number(e.target.value) > bill ? expense : Number(e.target.value)
          )
        }
      />

      <label>🧍{selectedFriend.name}'s expense</label>
      <input type="text" disabled value={friendExpense} />

      <label>🤑Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
