import { useState, useEffect } from 'react';

type Transaction = {
  id: number;
  date: string;
  description: string;
  amount: number;
}

type FilterData = {
  startDate: string;
  endDate: string;
}

const mockTransactionData: Transaction[] = [
  {
    id: 1,
    date: '2023-09-01',
    description: 'Payment for Product A',
    amount: 50.0,
  },
  {
    id: 2,
    date: '2023-09-02',
    description: 'Payment for Product B',
    amount: 75.0,
  },
  {
    id: 3,
    date: '2023-09-03',
    description: 'Payment for Product C',
    amount: 75.0,
  },
  {
    id: 4,
    date: '2023-09-04',
    description: 'Payment for Product D',
    amount: 75.0,
  },
  {
    id: 5,
    date: '2023-09-05',
    description: 'Payment for Product E',
    amount: 75.0,
  },
  {
    id: 6,
    date: '2023-09-06',
    description: 'Payment for Product F',
    amount: 75.0,
  },
  {
    id: 7,
    date: '2023-09-07',
    description: 'Payment for Product G',
    amount: 75.0,
  },
  {
    id: 8,
    date: '2023-09-08',
    description: 'Payment for Product H',
    amount: 75.0,
  },
  {
    id: 9,
    date: '2023-09-09',
    description: 'Payment for Product I',
    amount: 75.0,
  },
  {
    id: 10,
    date: '2023-09-10',
    description: 'Payment for Product J',
    amount: 75.0,
  },
];

const PaymentDashboard = () => {
  const [transactionData, setTransactionData] = useState<Transaction[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterData>({ startDate: '', endDate: ''})

    useEffect(() => {
      try {
        fetchTransactionData(filter);
      } catch {
        setError('Something went wrong')
      }
      console.log(filter)
  }, [filter]);

  const fetchTransactionData = (filter: FilterData) => {
    // Simulate API request delay
    setTimeout(() => {
      const filteredData = mockTransactionData.filter((transaction: Transaction) => {
        if (new Date(transaction.date).getTime() >= new Date(filter.startDate).getTime() &&
            new Date(transaction.date).getTime() <= new Date(filter.endDate).getTime())
            return transaction;
      })
      setTransactionData(filteredData);
    }, 1000);
  };

  return (
    <div className="payment-dashboard">
      <h1>Payment Transaction Dashboard</h1>
      {error && <p className="error-message">Error: {error}</p>}
      <input type="text" name="start-date" onChange={(event) => setFilter({ ...filter, startDate: event.target.value })} />
      <input type="text" name="end-date" onChange={(event) => setFilter({ ...filter, endDate: event.target.value })} />
      <ul className="transaction-list">
        {transactionData.map((transaction: Transaction) => (
          <li key={transaction.id}>
            <p>Transaction ID: {transaction.id}</p>
            <p>Date: {transaction.date}</p>
            <p>Description: {transaction.description}</p>
            <p>Amount: {transaction.amount}</p>
          </li>
        ))}
      </ul>
      {/* Pagination and Summary Section (optional, to be implemented) */}
    </div>
  );
};

export default PaymentDashboard;