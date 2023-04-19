import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import Notification from "./Notification";
import "../Style/Upload.scss";
import { NavLink } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  return (
    <header className="Header bg-white h-4rem flex justify-content-around align-items-center">
      <i
        className="pi pi-facebook text-5xl"
        style={{ color: "var(--blue)" }}
      ></i>
      <span className="p-input-icon-right">
        <i className="pi pi-search" />
        <InputText placeholder="Search" />
        <Search />
      </span>
      {/* Icons */}
      <div className="icons flex gap-5 align-items-center">
        <div className="card flex justify-content-center">
          <i className="pi pi-bell"></i>
          <div className="modal relative">
            <Notification />
          </div>
        </div>
        <NavLink to={"/home/message"}>
          <i className="pi pi-comments"></i>
        </NavLink>
        <NavLink to={"feed"}>
          <i className="pi pi-cog"></i>
        </NavLink>
        <NavLink to={"profile"}>
          <i className="pi pi-user"></i>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
