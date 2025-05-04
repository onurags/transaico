export interface Transaction {
  id: string;
  date: string;
  amount: number;
  category: 'Income' | 'Expense';
  currency: string;
  title: string;
  note?: string;
}

export type TransactionAction =
  | { type: 'ADD_TRANSACTION'; payload: Transaction }
  | { type: 'EDIT_TRANSACTION'; payload: Transaction }
  | { type: 'REMOVE_TRANSACTION'; payload: { id: string } }
  | { type: 'FILTER_TRANSACTIONS'; payload: { category: string; currency: string; title: string } };
