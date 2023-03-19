import React, { useEffect, useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

function TransactionForm({ uid }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  // Custom Hook
  const { addDocument, response } = useFirestore("transactions");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({
    //   name,
    //   amount,
    // });
    addDocument({
      // uid:uid,
      uid,
      name,
      amount,
    });
  };

  // Reset the form if success is true
  useEffect(() => {
    if (response.success) {
      setName("");
      setAmount("");
    }
  }, [response.success]);

  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction Name:</span>
          <input
            type="text"
            id="transaction_name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Amount (₱):</span>
          <input
            type="number"
            id="amount"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <button>Add Transaction</button>
      </form>
    </>
  );
}

export default TransactionForm;
