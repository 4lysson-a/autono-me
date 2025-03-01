import React from "react";
import { createContext } from "react";

type Provider = {
  children: React.ReactNode;
};
type Transaction = {
  date: string;
  description: string;
  amount: string;
  type: "income" | "expense";
};
type TransactionContextType = {
  transactions: Transaction[];
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
};

const TransactionContext = createContext<TransactionContextType>(
  {} as TransactionContextType
);

export const TransactionProvider: React.FC<Provider> = ({ children }) => {
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);
  return (
    <TransactionContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => React.useContext(TransactionContext);
