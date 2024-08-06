import React from 'react';

interface Balance {
  amount: number;
  isPositive: boolean;
}

interface OverallBalanceSummaryProps {
  balances: Balance[];
}

const OverallBalanceSummary: React.FC<OverallBalanceSummaryProps> = ({ balances }) => {
  const calculateOverallBalance = (): number => {
    return balances.reduce((sum, balance) => {
      return sum + (balance.isPositive ? balance.amount : -balance.amount);
    }, 0);
  };

  const overallBalance = calculateOverallBalance();

  const formatCurrency = (amount: number): string => {
    return Math.abs(amount).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
  };

  return (
    <div className="mb-6 text-left text-lg">
      {overallBalance > 0 ? (
        <p className="  font-bold">
          Overall, you are owed <span className='text-green-500'>{formatCurrency(overallBalance)}</span>
        </p>
      ) : overallBalance < 0 ? (
        <p className=" font-bold">
          Overall, you owe <span className='text-red-400'>{formatCurrency(overallBalance)}</span>
        </p>
      ) : (
        <p className="text-white font-bold">
          Your balances are settled
        </p>
      )}
    </div>
  );
};

export default OverallBalanceSummary;