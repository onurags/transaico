import React from 'react';
import FilterBar from '../components/FilterBar';
import TransactionList from '../components/TransactionList';

const Home: React.FC = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto pt-20">
      <div className="items-center">
        <FilterBar />
        <TransactionList />
      </div>
    </div>
  );
};

export default Home;