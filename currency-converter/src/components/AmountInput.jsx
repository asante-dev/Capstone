import { useState } from "react";

function AmountInput({ amount, setAmount }) {
  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="p-3">
      <label htmlFor="amount" className="block text-sm font-medium">
        Enter Amount
      </label>
      <input
        id="amount"
        type="number"
        value={amount}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border px-3 py-2"
        placeholder="e.g. 100"
      />
    </div>
  );
}

export default AmountInput;
