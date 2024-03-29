import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useDispatch } from "react-redux";
import UserApi from "../Redux/UserApi";
import Setting from "./Setting";
import jwt_decode from "jwt-decode";
import { getFileLink } from "../Redux/axiosConfig";
import "../Style/Login.scss"

const Login = () => {
  const [page, setPage] = useState("login");
  const [state, setState] = useState("");
  const [state2, setState2] = useState("");
  const [usersList, setUserList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const getAllUsers = await UserApi().get();
    if (getAllUsers.status == 200) {
      setUserList(getAllUsers.data);
    }
  }

  const dispatch = useDispatch();
  const handleSubmit = async function () {
    if (state !== "" && state2 !== "") {
      const authResponse = await UserApi().getSingleUser({
        userID: state,
        password: state2,
      });
      if (authResponse.status == 200) {
        const token = authResponse.data;
        var decoded = jwt_decode(token);
        localStorage.setItem("UserToken", token);
        localStorage.setItem("FB-user", JSON.stringify(decoded._doc));
        dispatch({
          type: "userLogin",
          currentUser: { ...decoded._doc, token },
        });
        dispatch({
          type: "auth",
        });
      }
    }
  };

  return (
    <div
      className="Login"
    >
      <i
        className="pi pi-facebook text-5xl"
        style={{ color: "white" }}
      ></i>
      {page == "login" ? (
        <>
          {" "}
          <span className="p-float-label">
            <InputText
              id="in"
              value={state}
              // autoComplete="off"
              onChange={(e) => setState(e.target.value)}
            />
            <label htmlFor="in">Username</label>
          </span>
          <span className="p-float-label">
            <InputText
              id="password"
              // autoComplete="off"
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

      <div className="lists">
        {usersList.map((value, index) => {
          return (
            <div
              key={index}
              className="head"
              onClick={() => {
                setState(value.userID);
                setState2(value.password);
                handleSubmit();
              }}
            >
              <img
                src={getFileLink + value.profilePic}
                alt=""
              />
              <div className="nameID ">
                <h3>{value.username}</h3>
                <p>{value.userID}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Login;
