import React from "react";
import "../Style/postmodel.scss";
import { useSelector } from "react-redux";

const Postmodel = () => {
  const x = useSelector((state) => state.post_model);
  return (
    <div
      className="Postmodel"
      style={x == false ? { display: "none" } : { display: "flex" }}
    >
      <h1>How are you {x}</h1>
    </div>
  );
};

export default Postmodel;
