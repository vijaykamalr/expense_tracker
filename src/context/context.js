import React, { useState, createContext } from "react";
import  {getTransactions, addTransactions} from "./action";
const initialState = [];
export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  // const deleteTransaction = (id) => {
  //   dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  // };

  const addTransaction = async (transaction) => {
    return await addTransactions(transaction).then(
      (transaction) => transaction
    );
  };

  const getTransaction = async (transaction={}) => {
    const data = await getTransactions(transaction);
    console.log(data)
    setTransactions(data);
  };

  const balance = transactions ? transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0) : 0;
  // const balance = 0;

  return (
    <ExpenseTrackerContext.Provider
      value={{
        transactions,
        balance,
        // deleteTransaction,
        addTransaction,
        getTransaction,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
