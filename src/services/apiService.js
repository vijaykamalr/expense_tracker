import axios from "axios";
const baseUrl = "https://expense-firebase.herokuapp.com";
// const baseUrl = "http://localhost:8080"
export const getRequest = (url) => {
  return axios.get(baseUrl + url);
};
export const postRequest = (url, body) => {
  console.log(body)
  return axios.post(baseUrl + url, body);
};
