import React from "react";
import { useSelector } from "react-redux";
import AsideBar from "./SideBar";
import Header from "./Header";

const Home = () => {
  const authStatus = useSelector((state) => state.auth);
  console.log("Home status", authStatus);
  const { data } = authStatus;

  return (
    <div className=" Main-Container bg-gray-50">
      <Header />
      <div className="Content-Container flex-wrap ">
        <AsideBar />
        <div className="Content">
          <h1>{data !== undefined || null ? data.name : "Dummy"}</h1>
        </div>
        <div className="Ad">
          <h1>{data !== undefined || null ? data.name : "Dummy"}</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
