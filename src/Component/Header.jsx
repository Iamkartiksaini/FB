import { useState } from "react";
import { InputText } from "primereact/inputtext";
import Notification from "./Notification";
import "../Style/Upload.scss";
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
      <span className="p-input-icon-right">
        <i className="pi pi-search" onClick={x} />
        <InputText
          placeholder="Search by name or id"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {open && <Search value={text} closeModel={setOpen} />}
      </span>
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
          <i className="pi pi-cog"></i>
        </NavLink>
        <NavLink to={`/${username}/profile`}>
          <i className="pi pi-user"></i>
        </NavLink>
        <NavLink to={`/${username}/friends`}>
          <i className="pi pi-users"></i>
        </NavLink>
        <Outlet />
      </div>
    </header>
  );
};

export default Header;
