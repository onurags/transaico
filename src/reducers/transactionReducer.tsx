import { Transaction, TransactionAction } from '../types';

export const transactionReducer = (state: Transaction[], action: TransactionAction): Transaction[] => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return [...state, action.payload];
    case 'EDIT_TRANSACTION':
      return state.map((transaction) =>
        transaction.id === action.payload.id ? action.payload : transaction
      );
    case 'REMOVE_TRANSACTION':
      return state.filter((transaction) => transaction.id !== action.payload.id);
    case 'FILTER_TRANSACTIONS':
      return state.filter((transaction) =>
        (action.payload.category ? transaction.category === action.payload.category : true) &&
        (action.payload.currency ? transaction.currency === action.payload.currency : true) &&
        (action.payload.title ? transaction.title.includes(action.payload.title) : true)
      );
    default:
      return state;
  }
};
