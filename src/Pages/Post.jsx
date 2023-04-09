import { useRef, useState, useEffect } from "react";
import "../Style/Posts.scss";
import postApi from "../Redux/PostApi.js";
import UserApi from "../Redux/UserApi";
import { useDispatch, useSelector } from "react-redux";
import { InputText } from "primereact/inputtext";
import { getFileLink } from "../Redux/axiosConfig";

const Posts = ({ postData }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const ws = useSelector((state) => state.ws);

  const textRef = useRef();
  const [comments, updateComment] = useState(postData);
  const {
    text,
    username,
    userID,
    media,
    mediaType,
    _id,
    dp,
    reactions,
    createdAt,
    comment,
    userObjId,
  } = comments;

  const [openComments, setCommentModal] = useState(false);

  let time = new Date(createdAt);

  let x = false;
  if (media !== "") {
    x = true;
  }

  async function sendFeedtoPost(type) {
    let body = {
      type,
      userObjId: user._id,
      postId: _id,
      userID: user.userID,
      username: user.username,
      profilePic: user.profilePic,
      time: Date.now(),
    };
    type == "comment" ? (body.msg = textRef.current.value) : "";
    const likeCoOperation = await UserApi().likedCommentOperation(body);
    const commentAdd = await postApi().putInPost(body);
    if (commentAdd.status == 201 && likeCoOperation.status == 201) {
      updateComment((pre) => {
        return { ...pre, ...commentAdd.data };
      });
      dispatch({
        type: "userLogin",
        currentUser: { ...user, ...likeCoOperation.data },
      });
      notify(type);
    }
    type == "comment" ? (textRef.current.value = "") : null;
  }

  function notify(notificationType) {
    if (notificationType != "unliked") {
      let x;
      notificationType == "liked" ? (x = "post_liked") : null;
      notificationType == "comment" ? (x = "post_comment") : null;
      console.log("x notify type", x);
      ws.send(
        JSON.stringify({
          type: "notification",
          data: {
            type: x,
            sender: {
              username: user.username,
              userID: user.userID,
              _id: user._id,
            },
            other: {
              postID: _id,
              userID,
              postOwnerId: userObjId,
            },
          },
        })
      );
    }
  }

  const deletePost = async () => {
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
      <div className="head">
        <div className="left flex gap-2 align-items-center">
          <img src={getFileLink + dp} alt="" />
          <div className="nameID">
            <h3>{username}</h3>
            <p>{userID}</p>
          </div>
        </div>
        {/* <i className="pi pi-user-plus"></i> */}
      </div>
      <p>{text}</p>
      {x == true ? (
        <div className="mediaRepresent  border-round-xl">
          {x == true && mediaType == "image" ? (
            <img
              className="Media flex justify-content-center "
              src={getFileLink + media}
              alt={getFileLink + media}
              onClick={(e) => {
                navigator.clipboard.writeText(getFileLink + media);
              }}
            />
          ) : x == true && mediaType == "video" ? (
            <video
              className="Media flex justify-content-center "
              src={getFileLink + media}
              alt={getFileLink + media}
              controls
            />
          ) : (
            <i className="pi pi-spin"></i>
          )}
        </div>
      ) : null}
      <div className="time">
        <span>{time.toLocaleDateString()} </span>
        <span>{time.toLocaleTimeString()} </span>
      </div>
      <div className="feed flex align-items-center justify-content-between pt-2">
        {/* Reactions */}
        <span
          onClick={() => {
            const type =
              user.liked.length > 0 && user.liked.includes(_id)
                ? "unliked"
                : "liked";
            sendFeedtoPost(type);
          }}
          style={{
            color: user.liked.includes(_id) ? "var(--blue)" : "",
          }}
          className="reactionHover flex gap-2 align-items-center cursor-pointer "
        >
          <i
            className={`pi ${
              user.liked.includes(_id) ? "pi-thumbs-up-fill" : "pi-thumbs-up"
            }`}
          ></i>
          <p>Reaction</p>
        </span>
        <span
          onClick={() => setCommentModal(!openComments)}
          className="commentHover flex gap-2 align-items-center cursor-pointer"
        >
          <i className=" pi pi-comment"></i>
          <p>Comment</p>
        </span>
        <span
          className="deleteHover flex gap-2 align-items-center cursor-pointer "
          onClick={deletePost}
        >
          {/* <i className=" pi pi-share-alt" style={{ fontSize: "1em" }}></i> */}
          <i className=" pi pi-trash"></i>
          <p>Delete</p>
        </span>
      </div>
      <p style={{ color: "var(--comment)", textAlign: "center" }}>
        reactions : {reactions.length} comment : {comment.length}
      </p>
      {openComments == true ? (
        <div className="comments">
          <div className="inputs pb-3">
            {/* Comment On Post */}
            <InputText ref={textRef} />
            <button
              onClick={() => {
                sendFeedtoPost("comment");
              }}
            >
              send
            </button>
          </div>
          <div className="list flex flex-column gap-3  relative">
            <span
              className="closeButton"
              onClick={() => setCommentModal(!openComments)}
            >
              <i className="pi pi-times" style={{ color: "var(--blue)" }}></i>
            </span>
            {comment.map((val, ind) => {
              return (
                <div key={ind} className="item flex gap-2">
                  <img
                    src={getFileLink + val.profilePic}
                    alt={getFileLink + val.profilePic}
                  />
                  <div className="commentText pt-1">
                    <h3>{val.username}</h3>
                    <p className="pt-1">{val.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Posts;
