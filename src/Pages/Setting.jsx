import React, { useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import "../Style/Setting.scss";
import UserApi from "../Redux/UserApi";
import { Button } from "primereact/button";
import axios from "axios";
import { ToggleButton } from "primereact/togglebutton";

const Setting = () => {
  const [img, setImg] = useState("");
  const [upFile, updateFile] = useState("");
  const [account, createAccountSuccfully] = useState(false);
  const [gender, setGender] = useState("Male");

  const usernameRef = useRef();
  const userIDRef = useRef();
  const passwordRef = useRef();
  const bioRef = useRef();

  const handleSubmit = async () => {
    let profilePic;
    try {
      if (passwordRef.current.value != "") {
        const form = new FormData();
        form.set("file", upFile);
        const uploadImageRes = await axios.post(
          "http://localhost:8000/upload",
          form
        );
        profilePic = uploadImageRes.data.newField;
        const body = {
          username: usernameRef.current.value,
          userID: userIDRef.current.value,
          password: passwordRef.current.value,
          tag: bioRef.current.value,
          profilePic,
          gender,
        };
        const createUserResponse = await UserApi().createUser(body);
        if (createUserResponse.status == 201) {
          usernameRef.current.value = "";
          userIDRef.current.value = "";
          passwordRef.current.value = "";
          bioRef.current.value = "";
          setImg("");
          updateFile("");
          createAccountSuccfully(true);
        }
        console.log("createUserResponse", createUserResponse.data);
      }
    } catch (error) {
      console.log({ error: error.message });
    }
  };

  return (
    <div className="Setting">
      {account === false ? <h1>Create Account</h1> : null}
      {account === false ? (
        <div className="form">
          <div className="img">
            <label htmlFor="image">
              <i className="pi pi-upload" />{" "}
            </label>
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              onClick={(e) => (e.target.value = "")}
              onChange={(e) => {
                const file = e.target.files[0];
                setImg(URL.createObjectURL(file));
                updateFile(file);
              }}
            />
            {img == "" ? (
              <i className="pi pi-user" style={{ fontSize: "7rem" }}></i>
            ) : (
              <img src={img} alt="" />
            )}
          </div>
          <div className="text">
            <span>
              <label htmlFor="name">Name</label>
              <InputText name="name" ref={usernameRef} autoComplete="off" />
            </span>
            <span>
              <label htmlFor="userid">Userid</label>
              <InputText name="userid" ref={userIDRef} autoComplete="off" />
            </span>
            <span>
              <label htmlFor="Password">Password</label>
              <InputText name="Password" ref={passwordRef} autoComplete="off" />
            </span>
            <span className="gender">
              <ToggleButton
                onLabel="Male"
                offLabel="Female"
                checked={gender == "Male" ? true : false}
                onChange={(e) => {
                  if (gender == "Male") {
                    setGender("Female");
                  } else {
                    setGender("Male");
                  }
                }}
              />
            </span>
            <span className="bio">
              <label htmlFor="Bio">Bio</label>
              <textarea
                typeof="text"
                name="Bio"
                ref={bioRef}
                autoComplete="off"
              />
            </span>
            <Button
              type="Primary"
              label="Create Account"
              onClick={handleSubmit}
            />
          </div>
        </div>
      ) : (
        <div className="success">
          <h1>Account Created Successfully</h1>
          <Button
            type="Success"
            className="p-button-success"
            label="Login"
            onClick={() => createAccountSuccfully(!account)}
          />
        </div>
      )}
    </div>
  );
};

export default Setting;
