import React, { useState } from 'react';
import { AlignLeft, Euro, Calendar, Users, Camera, Edit, PlusCircle, DollarSign } from 'lucide-react';

interface ExpenseData {
  description: string;
  amount: number;
  paidBy: string;
  date: string;
  group: string;
}

const AddExpense: React.FC = () => {
  const [expenseData, setExpenseData] = useState<ExpenseData>({
    description: '',
    amount: 0,
    paidBy: 'Paid by you and split equally',
    date: 'Today',
    group: 'No group',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setExpenseData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log('Saving expense:', expenseData);
    // Here you would typically save the expense to your state or backend
  };

  return (
    <div className="p-6 flex flex-col h-full w-screen bg-base-100 space-y-6">
      <div>
        <label className="text-base-content opacity-70 mb-3 block text-lg">With you and:</label>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-neutral rounded-full mr-3"></div>
          <span className="text-base-content text-xl font-semibold">Robert</span>
        </div>
      </div>

      <div className="space-y-6 flex-grow">
        <div className="flex items-center border-b-2 border-base-content border-opacity-20 py-3">
          <AlignLeft size={24} className="text-base-content opacity-50 mr-3" />
          <input
            type="text"
            name="description"
            placeholder="Enter a description"
            value={expenseData.description}
            onChange={handleChange}
            className="bg-transparent flex-grow outline-none text-base-content placeholder-base-content placeholder-opacity-50 text-lg"
          />
        </div>

        <div className="flex items-center border-b-2 border-base-content border-opacity-20 py-3">
          <DollarSign size={24} className="text-base-content opacity-50 mr-3" />
          <input
            type="number"
            name="amount"
            placeholder="0,00"
            value={expenseData.amount}
            onChange={handleChange}
            className="bg-transparent flex-grow outline-none text-base-content placeholder-base-content placeholder-opacity-50 text-lg"
          />
        </div>

        <div className="badge badge-neutral">
          {expenseData.paidBy}
        </div>
      </div>

      {/* <div className="flex justify-between text-base-content opacity-70 pt-4 border-t-2 border-base-content border-opacity-20">
        <button className="flex items-center text-lg">
          <Calendar size={22} className="mr-2" />
          <span>Today</span>
        </button>
        <button className="flex items-center text-lg">
          <Users size={22} className="mr-2" />
          <span>No group</span>
        </button>
        <button className="flex items-center text-lg">
          <Camera size={22} />
        </button>
        <button className="flex items-center text-lg">
          <Edit size={22} />
        </button>
      </div> */}

      {/* Add Expense Button */}
      <button 
        onClick={handleSave}
        className="btn btn-primary btn-lg w-full flex items-center justify-center text-lg"
      >
        <PlusCircle size={24} className="" />
        Add Expense
      </button>
    </div>
  );
};

export default AddExpense;