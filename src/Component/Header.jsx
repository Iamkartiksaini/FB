import { useState } from "react";
import { InputText } from "primereact/inputtext";
import Notification from "./Notification";
import "../Style/Header.scss";
import { NavLink, Outlet } from "react-router-dom";
import Search from "./Search";

const Header = ({ username }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  function x() {
    setOpen(true);
  }
  return (
    <header className="Header bg-white h-4rem flex justify-content-around align-items-center">
      <i
        className="pi pi-facebook text-5xl"
        style={{ color: "var(--blue)" }}
      ></i>
      {/* Search Bar */}
      <div id="SearchBar" className="p-input-icon-right">
        <i className="pi pi-search" onClick={x} />
        <InputText
          placeholder="Search by name or id"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {open && <Search value={text} closeModel={setOpen} />}
      </div>
      {/* Icons */}
      <div className="icons flex gap-5 align-items-center">
        <div className="card flex justify-content-center">
          <i className="pi pi-bell"></i>
          <div className="modal relative">
            <Notification />
          </div>
        </div>
        <NavLink to={`/${username}/message`}>
          <i className="pi pi-comments"></i>
        </NavLink>
        <NavLink to={`/${username}/feed`}>
          <i className="pi pi-home"></i>
        </NavLink>
        <NavLink to={`/${username}/profile`}>
          <i className="pi pi-user"></i>
        </NavLink>
        <NavLink to={`/${username}/friends`}>
          <i className="pi pi-compass"></i>
        </NavLink>
        <Outlet />
      </div>
      <div className="sm-navigations">
        <i id="openButton" className="pi pi-bars" />
        <ul id="ul" >
          <NavLink to={`/${username}/profile`}>
            <i className="pi pi-user"></i><span>Profile</span>
          </NavLink>
          <NavLink to={`/${username}/feed`}>
            <i className="pi pi-home"></i><span>Home</span>
          </NavLink>
          <NavLink to={`/${username}/message`}>
            <i className="pi pi-comments"></i> <span>Message</span>
          </NavLink>
          <NavLink to={`/${username}/friends`}>
            <i className="pi pi-compass"></i><span>Friend List</span>
          </NavLink>
          <NavLink to={`/${username}/setting`}>
            <i className="pi pi-cog"></i><span>Setting</span>
          </NavLink>
          <Outlet />
        </ul> </div>
    </header>
  );
};

export default Header;
