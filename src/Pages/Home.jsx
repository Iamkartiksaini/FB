import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AsideBar from "./SideBar";
import Header from "./Header";
import Upload from "./Upload";
import Ad from "./Ad";
import AllPosts from "./AllPosts";
import Postmodel from "./Postmodel";

const Home = () => {
  const authStatus = useSelector((state) => state.auth);
  const x = useSelector((state) => state.post_model);

  const dispatch = useDispatch();
  // http://localhost:4000/post/123

  console.log("Home status", authStatus);
  const { data } = authStatus;

  return (
    <div className=" Main-Container ">
      <Header />
      <button onClick={() => dispatch({ type: "open" })}>
        {x == true ? "Close model" : " Open model"}
      </button>
      <div className="Content-Container flex-wrap ">
        <AsideBar />
        <div className="Content">
          <Upload />
          <div className="allPosts">
            <AllPosts />
          </div>
        </div>
        <Ad />
        <Postmodel />
      </div>
    </div>
  );
};

export default Home;
