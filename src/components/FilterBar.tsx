import React, { useState, useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const FilterBar: React.FC = () => {
  const { dispatch } = useContext(TransactionContext);
  const [filter, setFilter] = useState({ category: '', currency: '', title: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleSearch = () => {
    dispatch({ type: 'FILTER_TRANSACTIONS', payload: filter });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-4 space-y-2 md:space-y-0 md:space-x-2">
      <input
        type="text"
        name="title"
        placeholder="Search by title"
        value={filter.title}
        onChange={handleInputChange}
        className="p-2 border rounded w-full md:w-auto dark:bg-gray-700 dark:text-white"
      />
      <select
        name="category"
        value={filter.category}
        onChange={handleInputChange}
        className="p-2 border rounded w-full md:w-auto dark:bg-gray-700 dark:text-white"
      >
        <option value="" className="bg-white dark:bg-gray-700 dark:text-white">All Categories</option>
        <option value="Income" className="bg-white dark:bg-gray-700 dark:text-white">Income</option>
        <option value="Expense" className="bg-white dark:bg-gray-700 dark:text-white">Expense</option>
      </select>
      <input
        type="text"
        name="currency"
        placeholder="Currency"
        value={filter.currency}
        onChange={handleInputChange}
        className="p-2 border rounded w-full md:w-auto dark:bg-gray-700 dark:text-white"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 w-full md:w-auto"
      >
        Search
      </button>
    </div>
  );
};

export default FilterBar;
