import React from "react";
import ProfileTag from "./ProfileTag";
import "../Style/Posts.scss";
import postApi from "../Redux/Api";
import UserApi from "../Redux/UserApi";
import { useDispatch } from "react-redux";

const Posts = ({ postData }) => {
  const dispatch = useDispatch();

  const { text, username, tag, menu, media, mediaType, _id } = postData;
  const styleImage = {
    // backgroundImage: `url( "${media}")`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "300px",
    width: "100%",
    objectFit: "contain",
  };
  let x = false;
  if (media !== "") {
    x = true;
  }

  // Delete Post function ===>
  const deletePost = async () => {
    console.log("id", _id);
    const delBody = { userID: "Kartik23", postID: _id, type: "delete" };
    const res = await postApi().delete(_id);
    const delInUser = await UserApi().addPost(delBody);
    console.log("del Body", delInUser);
    if (res.status == 200) {
      const y = await postApi().get();
      dispatch({ type: "update", updatedArray: y.data });
    }
  };

  return (
    <div className="Posts p-2 flex flex-column gap-3">
      <ProfileTag tag={tag} />
      <p>{text}</p>
      {x == true && mediaType == "image" ? (
        <img
          className="Media flex justify-content-center  border-round-xl"
          style={styleImage}
          src={media}
          alt={media}
        />
      ) : null}
      {x == true && mediaType == "video" ? (
        <video
          className="Media flex justify-content-center  border-round-xl"
          style={styleImage}
          src={media}
          alt={media}
          controls
        />
      ) : null}
      <div className="feed flex align-items-center justify-content-between p-2">
        <span className="reactionHover flex gap-2 align-items-center cursor-pointer ">
          <i className=" pi pi-thumbs-up" style={{ fontSize: "1em" }}></i>
          <p>Reaction</p>
        </span>
        <span className="commentHover flex gap-2 align-items-center cursor-pointer">
          <i className=" pi pi-comment" style={{ fontSize: "1em" }}></i>
          <p>Comment</p>
        </span>
        <span
          className="deleteHover flex gap-2 align-items-center cursor-pointer "
          onClick={deletePost}
        >
          {/* <i className=" pi pi-share-alt" style={{ fontSize: "1em" }}></i> */}
          <i className=" pi pi-trash" style={{ fontSize: "1em" }}></i>
          <p>Delete</p>
        </span>
      </div>
    </div>
  );
};

export default Posts;
