import axios from "axios";

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;
const customFetch = axios.create({
  baseURL: "/api/v1",
});

export default customFetch;
