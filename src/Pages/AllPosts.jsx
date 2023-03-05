import React, { useState, useEffect } from "react";
import Posts from "./Post";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const AllPosts = () => {
  const reduxPosts = useSelector((state) => state.posts);
  const disPatcher = useDispatch();
  useEffect(() => {
    axios.get("http://localhost:4000/post/123").then((res) => {
      if (res.status === 200) {
        disPatcher({ type: "update", updatedArray: res.data });
      }
    });
  }, []);

  return (
    <>
      {reduxPosts
        ? reduxPosts.map((val, ind) => {
            return <Posts postData={val} key={ind} />;
          })
        : null}
    </>
  );
};

export default AllPosts;
