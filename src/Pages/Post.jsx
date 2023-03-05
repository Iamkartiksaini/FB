import React from "react";
import ProfileTag from "./ProfileTag";
import "../Style/Posts.scss";
const Posts = ({ postData }) => {
  const { text, username, tag, menu, media, mediaLink } = postData;
  const styleImage = {
    backgroundImage: `url( "${media}")`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "300px",
    width: "100%",
  };
  let x = false;
  if (media !== "") {
    x = true;
  }

  return (
    <div className="Posts p-2 flex flex-column gap-3">
      <ProfileTag tag={tag} />
      <p>{text}</p>
      {x == true ? (
        <div
          className="Media flex justify-content-center  border-round-xl"
          style={styleImage}
        ></div>
      ) : null}
      <div className="feed flex align-items-center justify-content-between p-2">
        <span className="flex gap-2 align-items-center">
          <i className=" pi pi-thumbs-up" style={{ fontSize: "1em" }}></i>
          <p>Reaction</p>
        </span>
        <span className="flex gap-2 align-items-center">
          <i className=" pi pi-comment" style={{ fontSize: "1em" }}></i>
          <p>Comment</p>
        </span>
        <span className="flex gap-2 align-items-center">
          <i className=" pi pi-share-alt" style={{ fontSize: "1em" }}></i>
          <p>Share</p>
        </span>
      </div>
    </div>
  );
};

export default Posts;
