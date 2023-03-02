import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
const Login = () => {
  const [page, setPage] = useState("login");
  const [state, setState] = useState("");
  const [state2, setState2] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = function () {
    dispatch({ type: "login", data: { name: state, user_id: state2 } });
  };

  // if (page === "login") {
  //   axios
  //     .post("http://localhost:4000/auth", {
  //       userID: state,
  //       password: state2,
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => console.log(err));
  // } else if (page == "SignUp") {
  //   axios
  //     .post("http://localhost:4000/", {
  //       userID: state,
  //       password: state2,
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => console.log(err));
  // }
  // };

  return (
    <div className="align-items-center flex flex-column gap-3 justify-center justify-content-center text-blue-500">
      <h1>{page == "login" ? "Login" : "Create Account"} </h1>
      <span className="p-float-label">
        <InputText
          id="in"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <label htmlFor="in">Username</label>
      </span>
      <span className="p-float-label">
        <InputText
          id="password"
          value={state2}
          onChange={(e) => setState2(e.target.value)}
        />
        <label htmlFor="password">password</label>
      </span>

      <Button
        className="bg-transparent text-blue-400"
        label={page == "login" ? "Create Account ?" : "Login ?"}
        onClick={() =>
          setPage((pre) => {
            return pre == "login" ? "SignUp" : "login";
          })
        }
      />

      <Button
        label={page == "login" ? "Login" : "Create Account"}
        onClick={handleSubmit}
      />
    </div>
  );
};

export default Login;
