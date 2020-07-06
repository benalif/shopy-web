import React, { useState, useEffect } from "react";
import axios from "axios";
import { SIGNIN_URL } from "../../constants/constant";
import { history } from "../../_helper/history";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    console.log(history.location);
    console.log("from useEffect!");
  });

  function postLogin(username, password) {
    axios
      .post(SIGNIN_URL, {
        username: username,
        password: password,
      })
      .then(
        (response) => {
          console.log("success" + response.data);
        },
        (error) => {
          setMessageError("error");
          console.log("error" + error.data);
        }
      );
  }

  return (
    <div className="global">
      <div className="flex-container">
        <div className="img-login">
          <h1>this is a test</h1>
        </div>
        <form
          className="card"
          onSubmit={(e) => {
            e.preventDefault();
            postLogin(username, password);
            history.push("/about");
          }}
        >
          <p className="login-title">Sign In</p>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="signin-input"
            required
          ></input>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="signin-input"
            required
          ></input>
          <button className="button">LOGIN</button>
          <p>{messageError}</p>
        </form>
      </div>
    </div>
  );
}
