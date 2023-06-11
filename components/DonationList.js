import { useState } from 'react';

export default function DonationList() {
  const [donations, setDonations] = useState([]);

  // Fetch donations from server and update state
  useEffect(() => {
    fetch('/api/donations')
      .then((response) => response.json())
      .then((data) => setDonations(data));
  }, []);

  return (
    <div>
      <h2>Donations</h2>
      <ul>
        {donations.map((donation) => (
          <li key={donation.id}>
            {donation.amount} donated by {donation.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
