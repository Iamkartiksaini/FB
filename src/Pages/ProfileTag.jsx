import React from "react";
import "../Style/ProfileTag.scss";

const ProfileTag = ({ tag }) => {
  const person = {
    username: "Kartik Saini 123",
    userID: "Kartik23",
    img: "https://images.pexels.com/photos/15311317/pexels-photo-15311317.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  };

  return (
    <div className="ProfileTag flex justify-content-between align-items-center">
      <div className="left flex gap-2 align-items-center">
        <img
          src="https://images.pexels.com/photos/15311317/pexels-photo-15311317.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          height="40px"
          width="40px"
          alt=""
        />
        <div className="text">
          <h3>Kartik Saini</h3>
          <p className="mt-1">{tag}</p>
        </div>{" "}
      </div>
      <i
        className=" pi pi-user-plus"
        style={{ fontSize: " 20px", paddingRight: "20px" }}
      ></i>
    </div>
  );
};

export default ProfileTag;
