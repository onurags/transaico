import React, { useContext } from 'react';
import { Transaction } from '../types';
import { TransactionContext } from '../context/TransactionContext';

interface Props {
  transaction: Transaction;
  onEdit: () => void;
}

const TransactionItem: React.FC<Props> = ({ transaction, onEdit }) => {
  const { dispatch } = useContext(TransactionContext);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      dispatch({ type: 'REMOVE_TRANSACTION', payload: { id: transaction.id } });
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg mb-2 shadow flex justify-between items-center">
      <div>
        <h3 className="text-lg font-bold">{transaction.title}</h3>
        <p className="text-gray-500">{transaction.date}</p>
      </div>
      <div className="text-right">
        <p className={`text-lg font-bold ${transaction.category === 'Income' ? 'text-green-500' : 'text-red-500'}`}>
          {transaction.amount} {transaction.currency}
        </p>
        <p className="text-gray-500">{transaction.category}</p>
      </div>
      <div className="flex">
        <button
          onClick={onEdit}
          className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TransactionItem;
