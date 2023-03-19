import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SideBar from "../Component/SideBar";
import Header from "../Component/Header";
import Upload from "./Upload";
import Ad from "../Component/Ad";
import AllPosts from "./AllPosts";
import DataTable from "../Component/DataTable";
import NavBar from "../Component/NavBar";
import Message from "./Message";
import Friends from "./Friends";
import Setting from "./Setting";
import Notification from "../Component/Notification";

const Home = () => {
  // http://localhost:4000/post/123

  return (
    <div className=" Main-Container relative ">
      {/* <DataTable /> */}
      <Routes>
        <Route path="feed" element={<Header />}></Route>
      </Routes>
      <div className="Content-Container flex-wrap ">
        <SideBar />
        <div className="Content">
          <Routes>
            <Route
              path="/feed"
              element={
                <>
                  <Ad />
                  <Upload />
                  <div className="allPosts">
                    <AllPosts type="globle" userID={"kartik23"} />
                  </div>
                </>
              }
            ></Route>
            <Route path="/message" element={<Message />}></Route>
            <Route path="/friends" element={<Friends />}></Route>
            <Route path="/Notification" element={<Notification />}></Route>
            <Route path="/setting" element={<Setting />}></Route>
            <Route path="/*" element={<Navigate to={"/feed"} />}></Route>
          </Routes>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Home;
