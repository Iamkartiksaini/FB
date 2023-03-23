import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Header = React.lazy(() => import("../Component/Header"));
const Upload = React.lazy(() => import("./Upload"));
const Ad = React.lazy(() => import("../Component/Ad"));
const AllPosts = React.lazy(() => import("./AllPosts"));
const NavBar = React.lazy(() => import("../Component/NavBar"));
const Message = React.lazy(() => import("./Message"));
const Friends = React.lazy(() => import("./Friends"));
const Setting = React.lazy(() => import("./Setting"));
const Notification = React.lazy(() => import("../Component/Notification"));
const SideBar = React.lazy(() => import("../Component/SideBar"));

const Home = () => {
  // http://localhost:4000/post/123

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
                      <AllPosts type="globle" />
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
    </Suspense>
  );
};

export default Home;
