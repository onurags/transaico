import React, { createContext, useReducer, ReactNode } from 'react';
import { Transaction, TransactionAction } from '../types';
import { transactionReducer } from '../reducers/transactionReducer';

type TransactionContextType = {
  transactions: Transaction[];
  dispatch: React.Dispatch<TransactionAction>;
};

const initialState: TransactionContextType = {
  transactions: [],
  dispatch: () => {},
};

export const TransactionContext = createContext<TransactionContextType>(initialState);

export const TransactionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [transactions, dispatch] = useReducer(transactionReducer, []);

  return (
    <TransactionContext.Provider value={{ transactions, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
};
