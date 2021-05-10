import React from "react";
import ReactDOM from "react-dom";
import { getUsers, addUser, editUser, deleteUser } from "./api/users/actions";
import reportWebVitals from "./reportWebVitals";

(async () => {
  try {
    // getUsers().then((users) => console.log(users));
    await deleteUser("1");
  } catch (error) {
    console.log(error);
  }
})();

ReactDOM.render(
  <React.StrictMode>
    <h1>hello</h1>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
