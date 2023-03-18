import React, { useEffect, useState } from "react";
import Posts from "./Post";
import { useDispatch, useSelector } from "react-redux";
import postApi from "../Redux/Api";

const AllPosts = ({ type, userID }) => {
  const reduxPosts = useSelector((state) => state.posts);
  const disPatcher = useDispatch();

  useEffect(() => {
    const x = async () => {
      let getPostApi;
      if (type == "Public") {
        getPostApi = await postApi().get();
      } else if ((type = "pvt")) {
        getPostApi = await postApi().post2({ userID });
      }
      if (getPostApi.status === 200) {
        disPatcher({ type: "update", updatedArray: getPostApi.data });
      }
      x();
    };
  }, []);

  return (
    <>
      {reduxPosts
        ? reduxPosts.map((val, ind) => {
            return <Posts postData={val} key={ind} />;
          })
        : null}
      {type === "pvt" && reduxPosts
        ? reduxPosts.map((val, ind) => {
            return <Posts postData={val} key={ind} />;
          })
        : null}
    </>
  );
};

export default AllPosts;
