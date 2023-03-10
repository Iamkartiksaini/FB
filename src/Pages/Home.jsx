import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AsideBar from "../Component/SideBar";
import Header from "../Component/Header";
import Upload from "./Upload";
import Ad from "../Component/Ad";
import AllPosts from "./AllPosts";
import Postmodel from "../Component/Postmodel";
import DataTable from "../Component/DataTable";

const Home = () => {
  const authStatus = useSelector((state) => state.auth);
  const x = useSelector((state) => state.post_model);

  const dispatch = useDispatch();
  // http://localhost:4000/post/123

  console.log("Home status", authStatus);
  const { data } = authStatus;

  return (
    <div className=" Main-Container ">
      {/* <DataTable /> */}
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
        {/* <Ad />
        <Postmodel /> */}
      </div>
    </div>
  );
};

export default Home;
