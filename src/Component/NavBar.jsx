import React from "react";
import "../Style/NavBar.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar flex justify-content-between p-3 z-3">
      <NavLink to="feed">
        <span>
          <i className="pi pi-home"></i>
          <p>Home</p>{" "}
        </span>
      </NavLink>
      <NavLink to={"message"}>
        <span>
          <i className="pi pi-comments"></i>
          <p>Message</p>{" "}
        </span>
      </NavLink>
      <NavLink to={"profile"}>
        <span>
          <i className="pi pi-users"></i>
          <p>Profile</p>
        </span>
      </NavLink>
      <NavLink to={"setting"}>
        <span>
          <i className="pi pi-cog"></i>
          <p>Setting</p>
        </span>
      </NavLink>
    </div>
  );
};

export default NavBar;
