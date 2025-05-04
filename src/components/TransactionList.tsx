import React, { useContext, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import TransactionItem from './TransactionItem';
import AddEditTransactionModal from './AddEditTransactionModal';
import { Transaction } from '../types';

const TransactionList: React.FC = () => {
  const { transactions } = useContext(TransactionContext);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedTransaction(null);
    setIsModalOpen(true);
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 w-full md:w-auto"
      >
        Add Transaction
      </button>
      {transactions.length === 0 ? (
        <div className="w-full h-full flex flex-col items-center justify-center relative">
          {/* <div
            className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}
          ></div>
          <p className="relative z-10 text-xl text-gray-700 bg-white bg-opacity-75 px-4 py-2 rounded">
            No transactions to show
          </p> */}
        </div>
      ) : (
        <div className="space-y-4 w-full">
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onEdit={() => handleEdit(transaction)}
            />
          ))}
        </div>
      )}
      {isModalOpen && (
        <AddEditTransactionModal
          transaction={selectedTransaction!}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default TransactionList;
