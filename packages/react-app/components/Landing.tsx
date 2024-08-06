import React from 'react';
import { Wallet, Users, CreditCard, TrendingUp } from 'lucide-react';

const Landing = () => {
  return (
    <div className="flex flex-col items-center p-8 min-h-screen text-base-content">
      <div className="w-full max-w-md">
     
        
        <h1 className="text-5xl font-bold mb-2 text-primary">Buddy Finance</h1>
        <p className="text-xl mb-10 text-secondary">Split expenses, not friendships</p>
        
        <div className="space-y-8 mb-10">
          <BenefitItem 
            icon={<Wallet className="text-primary" size={28} />}
            title="Easy Expense Tracking"
            description="Log and split expenses with just a few taps"
          />
          <BenefitItem 
            icon={<Users className="text-primary" size={28} />}
            title="Group Management"
            description="Create groups for trips, roommates, or events"
          />
          <BenefitItem 
            icon={<CreditCard className="text-primary" size={28} />}
            title="Seamless Payments"
            description="Settle debts quickly and securely"
          />
          <BenefitItem 
            icon={<TrendingUp className="text-primary" size={28} />}
            title="Insightful Reports"
            description="Get clear overviews of your shared finances"
          />
        </div>
        
        <button className="btn btn-primary btn-lg w-full shadow-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

const BenefitItem = ({ icon, title, description }: any) => (
  <div className="flex items-start">
    <div className="bg-base-100 p-3 rounded-full shadow-md mr-4">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm opacity-80">{description}</p>
    </div>
  </div>
);

export default Landing;