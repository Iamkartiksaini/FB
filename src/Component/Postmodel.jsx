import React from "react";
import "../Style/postmodel.scss";
import { useSelector } from "react-redux";
import AllPosts from "../Pages/AllPosts";

const Postmodel = () => {
  const x = useSelector((state) => state.post_model);

  return (
    <div
      className="Postmodel"
      style={x == false ? { display: "none" } : { display: "flex" }}
    >
      <h1>How are you {x}</h1>
      <AllPosts type={"pvt"} userID="kartik23" />
    </div>
  );
};

export default Postmodel;
