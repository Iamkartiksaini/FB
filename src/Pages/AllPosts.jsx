import React, { useEffect } from "react";
import Posts from "./Post";
import { useDispatch, useSelector } from "react-redux";
import postApi from "../Redux/Api";

const AllPosts = () => {
  const reduxPosts = useSelector((state) => state.posts);
  const disPatcher = useDispatch();
  useEffect(() => {
    const x = async () => {
      const getPostApi = await postApi().get();
      if (getPostApi.status === 200) {
        disPatcher({ type: "update", updatedArray: getPostApi.data });
      }
    };
    x();
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
