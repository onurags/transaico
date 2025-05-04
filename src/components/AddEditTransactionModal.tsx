import React, { useState, useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { Transaction } from '../types';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  transaction?: Transaction;
  onClose: () => void;
}

const AddEditTransactionModal: React.FC<Props> = ({ transaction, onClose }) => {
  const { dispatch } = useContext(TransactionContext);
  const [formData, setFormData] = useState<Transaction>({
    id: transaction ? transaction.id : uuidv4(),
    date: transaction ? transaction.date : '',
    amount: transaction ? transaction.amount : 0,
    category: transaction ? transaction.category : 'Income',
    currency: transaction ? transaction.currency : 'USD',
    title: transaction ? transaction.title : '',
    note: transaction ? transaction.note : '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (transaction) {
      dispatch({ type: 'EDIT_TRANSACTION', payload: formData });
    } else {
      dispatch({ type: 'ADD_TRANSACTION', payload: formData });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">{transaction ? 'Edit' : 'Add'} Transaction</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              required
            >
              <option value="Income" className="bg-white dark:bg-gray-700 dark:text-white">Income</option>
              <option value="Expense" className="bg-white dark:bg-gray-700 dark:text-white">Expense</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Currency</label>
            <input
              type="text"
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Note</label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2 transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out transform hover:bg-gray-700 hover:scale-105"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditTransactionModal;
