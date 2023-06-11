import { useState } from 'react';

export default function DonateForm() {
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="amount">Amount:</label>
      <input type="number" id="amount" value={amount} onChange={(event) => setAmount(event.target.value)} />
      <button type="submit">Donate</button>
    </form>
  );
}
