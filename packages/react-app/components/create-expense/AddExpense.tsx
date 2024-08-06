import React, { useState } from 'react';
import { AlignLeft, Euro, Calendar, Users, Camera, Edit } from 'lucide-react';

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
    <div className=" p-4 flex flex-col h-full w-screen">

      <div className="mb-6">
        <label className="text-gray-400 mb-2 block">With you and:</label>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-700 rounded-full mr-2"></div>
          <span className="text-gray-300">Robert</span>
        </div>
      </div>

      <div className="space-y-4 flex-grow">
        <div className="flex items-center border-b border-gray-700 py-2">
          <AlignLeft size={20} className="text-gray-500 mr-2" />
          <input
            type="text"
            name="description"
            placeholder="Enter a description"
            value={expenseData.description}
            onChange={handleChange}
            className="bg-transparent flex-grow outline-none text-gray-300 placeholder-gray-600"
          />
        </div>

        <div className="flex items-center border-b border-gray-700 py-2">
          <Euro size={20} className="text-gray-500 mr-2" />
          <input
            type="number"
            name="amount"
            placeholder="0,00"
            value={expenseData.amount}
            onChange={handleChange}
            className="bg-transparent flex-grow outline-none text-gray-300 placeholder-gray-600"
          />
        </div>

        <div className="bg-secondary rounded-lg p-3 text-gray-300">
          {expenseData.paidBy}
        </div>
      </div>

      <div className="flex justify-between text-gray-500 pt-4 border-t border-gray-700">
        <button className="flex items-center">
          <Calendar size={18} className="mr-1" />
          <span className="text-sm">Today</span>
        </button>
 
      </div>
    </div>
  );
};

export default AddExpense;