import axios from "axios";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/index.css";
import customFetch from "./utils/customFetch.js";
import { Provider } from "react-redux";
import { store } from "./store.js";


// const data = await customFetch.get("/test");
// console.log(data);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
