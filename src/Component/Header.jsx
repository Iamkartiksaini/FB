import React from "react";
import { InputText } from "primereact/inputtext";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header bg-white h-4rem flex justify-content-around align-items-center">
      <i
        className="pi pi-facebook text-5xl"
        style={{ color: "var(--blue)" }}
      ></i>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText value={""} placeholder="Search" style={{ height: "20px" }} />
      </span>
      <div className="icons flex gap-5">
        <i className="pi pi-bell" style={{ fontSize: "20px" }}></i>
        <NavLink
          to={"/home/friends"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <i className="pi pi-user-plus" style={{ fontSize: "20px" }}></i>
        </NavLink>
        <i className="pi pi-info-circle" style={{ fontSize: "20px" }}></i>
      </div>
    </header>
  );
};

export default Header;
