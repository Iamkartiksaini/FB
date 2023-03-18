import React from "react";
import "../Style/ProfileTag.scss";

const ProfileTag = ({ tag = null, useIn = null, userID, profilePic = "" }) => {
  const person = {
    username: userID != undefined ? userID : "Kartik Saini off",
    userID: "Kartik23" || userID,
    img:
      profilePic.includes("http") == true
        ? "https://images.pexels.com/photos/15311317/pexels-photo-15311317.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        : `http://localhost:8000/assets/${profilePic}`,
    title: tag !== null ? tag : "Gurugram,Hr",
  };
  const y = {
    backgroundColor: "white",
    borderRadius: ".75rem",
    width: "300px",
  };
  return (
    <div
      className="ProfileTag flex justify-content-between align-items-center"
      style={y}
    >
      <div className="left flex gap-2 align-items-center">
        <img src={person.img} height="40px" width="40px" alt="" />
        <div className="text">
          <h3>{person.username}</h3>
          <p className="mt-1">{person.title}</p>
        </div>
      </div>
      <i
        className=" pi pi-user-plus"
        style={{ fontSize: " 20px", paddingRight: "20px" }}
      ></i>
    </div>
  );
};

export default ProfileTag;
