import { useState } from "react";
import Button from "./Button.js";

export default function FormSplitBill({ selectedFriend, splitBill }) {
  const [bill, setBill] = useState("");
  const [expenses, setExpenses] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const friendExpenses = bill ? bill - expenses : "";

  function handleBillSubmit(e) {
    e.preventDefault();

    if (!bill || !expenses) {
      return;
    }
    splitBill(whoIsPaying === "user" ? friendExpenses : -expenses);
  }
  return (
    <form className="form-split-bill" onSubmit={handleBillSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>Your expense</label>
      <input
        type="text"
        value={expenses}
        onChange={(e) =>
          setExpenses(
            Number(e.target.value) > bill ? expenses : Number(e.target.value)
          )
        }
      />
      <label>{selectedFriend.name}'s expense</label>
      <input
        type="text"
        disabled
        value={friendExpenses !== 0 && expenses ? friendExpenses : ""}
      />
      <label>Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
