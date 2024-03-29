import React, { Suspense, useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Search from "../Component/Search";
import "../Style/Feed.scss";


const Upload = lazy(() => import("./Upload"));
const Header = lazy(() => import("../Component/Header"));
const Ad = lazy(() => import("../Component/Ad"));
const AllPosts = lazy(() => import("./AllPosts"));
const Message = lazy(() => import("./Message"));
const Friends = lazy(() => import("./Friends"));
const Profile = lazy(() => import("./Profile"));
const Notification = lazy(() => import("../Component/Notification"));
const SideBar = lazy(() => import("../Component/SideBar"));

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:4000");
    dispatch({ type: "ws", ws });
    ws.addEventListener("open", () => {
      console.log("Connection opened!");
      ws.send(JSON.stringify({ userObjId: user._id, type: "setup" }));
    });
  }, []);

  // ws.addEventListener("close", () => {
  //   console.log("connection break");
  // });

  return (
    <Suspense
      fallback={
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <i className="pi pi-spin pi-spinner" style={{ fontSize: "3em" }}></i>
        </div>
      }
    >
      <div className=" Main-Container relative ">
        <Header username={user.username} />
        <div className="Content-Container ">
          <div className="Content">
            <Routes>
              <Route
                path="feed"
                element={
                  <>
                    <SideBar />
                    <div className="mainFeed">
                      <Upload />
                      <div className="allPosts">
                        <AllPosts type="globle" />
                      </div>
                    </div>
                    <Ad />
                  </>
                }
              ></Route>
              <Route path="/message" element={<Message />}></Route>
              <Route path="/friends" element={<Friends />}></Route>
              <Route path="/Notification" element={<Notification />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/search" element={<Search />}></Route>
              <Route path="/*" element={<Navigate to={"feed"} />}></Route>
            </Routes>
          </div>
        </div>
        {/* <NavBar /> */}
      </div>
    </Suspense>
  );
};

export default Home;
