import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useDispatch } from "react-redux";
import UserApi from "../Redux/UserApi";
import Setting from "./Setting";

const Login = () => {
  const [page, setPage] = useState("login");
  const [state, setState] = useState("");
  const [state2, setState2] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = async function () {
    const authResponse = await UserApi().getSingleUser({
      userID: state,
      password: state2,
    });
    dispatch({ type: "userLogin", currentUser: authResponse.data });
  };
  return (
    <div
      style={{
        height: "100vh",
        // backgroundColor: "aliceblue",
        backgroundColor: "#8BC6EC",
        backgroundImage: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
      }}
      className="align-items-center flex flex-column gap-3 justify-center justify-content-center text-blue-500"
    >
      {page == "login" ? <h1>Login</h1> : null}
      {page == "login" ? (
        <>
          {" "}
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
          </span>{" "}
        </>
      ) : (
        <Setting />
      )}
      {page == "login" ? (
        <Button
          label={page == "login" ? "Login" : "Create Account"}
          onClick={handleSubmit}
        />
      ) : null}
      <Button
        className="p-button-text p-button-plain text-indigo-50"
        label={page == "login" ? "Create Account ?" : "Login ?"}
        onClick={() => {
          page == "login" ? setPage("Create Account") : setPage("login");
        }}
      />
    </div>
  );
};

export default Login;
