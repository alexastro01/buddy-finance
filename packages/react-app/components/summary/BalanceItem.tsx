import React from 'react';
import Image from 'next/image';

interface BalanceItemProps {
  name: string;
  amount: number;
  isPositive: boolean;
  avatarUrl?: string;
}

const BalanceItem: React.FC<BalanceItemProps> = ({ 
  name, 
  amount, 
  isPositive,
  avatarUrl
}) => {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-700">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={`${name}'s avatar`}
              width={40}
              height={40}
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-lg font-bold text-white">
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <span className="text-lg text-white">{name}</span>
      </div>
      <div className="text-right">
        <div className={`text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? 'owes you' : 'you owe'}
        </div>
        <div className={`text-lg font-bold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {amount.toLocaleString('de-DE', { style: 'currency', currency: 'USD' })}
        </div>
      </div>
    </div>
  );
};

export default BalanceItem;