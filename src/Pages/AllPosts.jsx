import React, { useEffect } from "react";
import Posts from "./Post";
import { useDispatch, useSelector } from "react-redux";
import postApi from "../Redux/PostApi.js";

const AllPosts = ({ type, userID = "" }) => {
  const reduxPosts = useSelector((state) => state.posts);
  const disPatcher = useDispatch();
  const x = async () => {
    let getPostApi;
    console.log("fetch all post data");
    if (type == "globle" || reduxPosts == "") {
      getPostApi = await postApi().get();
    } else if ((type = "pvt")) {
      getPostApi = await postApi().singleUserPost({ userID });
    }
    console.log(type, "Post ===>", getPostApi.data);
    if (getPostApi.status === 200) {
      disPatcher({ type: "update", updatedArray: getPostApi.data });
    }
  };
  useEffect(() => {
    x();
  }, []);

  return (
    <>
      {type == "globle" && reduxPosts !== "" ? (
        reduxPosts.map((val, ind) => {
          return <Posts postData={val} key={ind} />;
        })
      ) : type === "pvt" && reduxPosts !== "" ? (
        reduxPosts.map((val, ind) => {
          return <Posts postData={val} key={ind} />;
        })
      ) : (
        <div>
          <i className="pi pi-spin pi-spinner" style={{ fontSize: "2em" }}></i>
        </div>
      )}
    </>
  );
};

export default AllPosts;
