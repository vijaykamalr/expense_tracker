import { postRequest } from "../services/apiService";

export const addTransactions = async (data) => {
  const transactRequest = await postRequest("/expense", data);
  return transactRequest;
};
export const getTransactions = async (data={}) => {
  const transactRequest = await postRequest("/expense/transaction",data);
  return transactRequest.data;
};

// export const deleteTransac = async (data) => {
//   console.log(data);
//   const transactRequest = await postRequest("/expense", data);
//   console.log(transactRequest);
//   return transactRequest;
// };