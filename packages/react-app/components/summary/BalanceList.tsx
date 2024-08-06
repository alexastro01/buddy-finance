import React from 'react';
import BalanceItem from './BalanceItem';
import OverallBalanceSummary from './OverallBalanceSummary';

interface Balance {
  id: string;
  name: string;
  amount: number;
  isPositive: boolean;
  avatarUrl?: string;
}

const BalanceList: React.FC = () => {
  const balances: Balance[] = [
    { id: '1', name: "Robert", amount: 25.00, isPositive: true },
    { id: '2', name: "Alice", amount: 15.50, isPositive: false, avatarUrl: "/placeholder.png" },
    { id: '3', name: "Bob", amount: 25.50, isPositive: false, avatarUrl: "/placeholder.png" },
    // Add more balances as needed
  ];

  return (
    <div className="w-screen min-h-screen p-4">
    <OverallBalanceSummary balances={balances} />

      <div className="space-y-2">
        {balances.map(balance => (
          <BalanceItem
            key={balance.id}
            name={balance.name}
            amount={balance.amount}
            isPositive={balance.isPositive}
            avatarUrl={balance.avatarUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default BalanceList;