import React from "react";
import { useDispatch } from "react-redux";
import UserApi from "../Redux/UserApi";
import "../Style/ProfileTag.scss";

const ProfileTag = ({
  tag = null,
  useIn = null,
  userID,
  profilePic = "",
  cName = "",
  password = 123,
}) => {
  const person = {
    username: userID != undefined ? userID : "Kartik Saini off",
    userID: "Kartik23" || userID,
    img:
      profilePic.includes("http") == true
        ? profilePic
        : `http://localhost:8000/assets/${profilePic}`,
    title: tag !== null ? tag : "Gurugram,Hr",
  };
  const y = {
    backgroundColor: "white",
    borderRadius: ".75rem",
    minWidth: "300px",
  };
  const dispatch = useDispatch();

  const handleSwitchAccount = async function () {
    if (useIn == null) {
      return;
    } else {
      const auth = await UserApi().getSingleUser({ userID, password });
      auth.status == 200
        ? dispatch({ type: "userLogin", currentUser: auth.data })
        : null;
    }
  };

  return (
    <div
      className={`ProfileTag flex justify-content-between align-items-center ${
        cName !== "" ? "p-2" : ""
      }`}
      style={y}
    >
      <div className="left flex gap-2 align-items-center">
        <img src={person.img} height="40px" width="40px" alt="" />
        <div className="text">
          <h3 onClick={handleSwitchAccount}>{person.username}</h3>
          <p className="mt-1">{person.title}</p>
        </div>
      </div>
      <i
        className=" pi pi-user-plus"
        style={{ fontSize: " 20px", paddingRight: "20px" }}
        onClick={() => console.log("USER", userID)}
      ></i>
    </div>
  );
};

export default ProfileTag;
