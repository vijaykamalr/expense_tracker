import { addTransaction, getTransaction } from "./action";

const contextReducer = (state, action) => {
  let transactions;

  switch (action.type) {
    case "DELETE_TRANSACTION":
      transactions = state.filter(
        (transaction) => transaction.id !== action.payload
      );
      localStorage.setItem('transactions', JSON.stringify(transactions));

      return transactions;
    case "GET_TRANSACTION":
      
      // state = getTransaction().then(transaction=>transaction);
      // console.log(state);
      // localStorage.setItem('transactions', JSON.stringify(transactions));

      return state;
    case "ADD_TRANSACTION":
      transactions = [action.payload, ...state];
      // await addTransaction(action.payload);
      state = addTransaction(action.payload).then(transaction=>transaction);
      console.log(transactions);
      // localStorage.setItem('transactions', JSON.stringify(transactions));

      return state;
    default:
      return state;
  }
};

export default contextReducer;
