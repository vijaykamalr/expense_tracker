import axios from "axios";
const baseUrl = "http://localhost:3002";
export const getRequest = (url) => {
  return axios.get(baseUrl + url);
};
export const postRequest = (url, body) => {
  return axios.post(baseUrl + url, body);
};
