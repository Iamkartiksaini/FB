import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AsideBar from "../Component/SideBar";
import Header from "../Component/Header";
import Upload from "./Upload";
import Ad from "../Component/Ad";
import AllPosts from "./AllPosts";
import DataTable from "../Component/DataTable";
import NavBar from "../Component/NavBar";
import Message from "./Message";
import Friends from "./Friends";
import Setting from "./Setting";

const Home = () => {
  const authStatus = useSelector((state) => state.auth);
  localStorage.setItem("count", 1);
  // http://localhost:4000/post/123

  console.log("Home status", authStatus);
  const { data } = authStatus;

  return (
    <div className=" Main-Container relative ">
      {/* <DataTable /> */}
      <Routes>
        <Route path="feed" element={<Header />}></Route>
      </Routes>

      <div className="Content-Container flex-wrap ">
        <AsideBar />
        <Ad />
        <div className="Content">
          <Routes>
            <Route
              path="/feed"
              element={
                <>
                  <Upload />
                  <div className="allPosts">
                    <AllPosts type="pvt" userID={"kartik23"} />
                  </div>
                </>
              }
            ></Route>
            <Route path="/message" element={<Message />}></Route>
            <Route path="/friends" element={<Friends />}></Route>
            <Route path="/*" element={<Navigate to={"/feed"} />}></Route>
          </Routes>
        </div>
        <Setting />
      </div>
      <NavBar />
    </div>
  );
};

export default Home;
