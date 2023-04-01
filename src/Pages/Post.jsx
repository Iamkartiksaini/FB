import { useRef, useState } from "react";
import "../Style/Posts.scss";
import postApi from "../Redux/Api";
import UserApi from "../Redux/UserApi";
import { useDispatch } from "react-redux";
import { InputText } from "primereact/inputtext";
import axios from "axios";

const Posts = ({ postData, activeUser }) => {
  const dispatch = useDispatch();
  const textRef = useRef();
  const [comments, updateComment] = useState(postData);
  const {
    text,
    username,
    userID,
    tag,
    menu,
    media,
    mediaType,
    _id,
    dp,
    reactions,
    createdAt,
    comment,
  } = comments;
  const [count, setCount] = useState(activeUser.liked);
  const [openComments, setCommentModal] = useState(false);

  let time = new Date(createdAt);

  let x = false;
  if (media !== "") {
    x = true;
  }

  async function sendFeedtoUser(type) {
    const body = {
      type,
      postId: _id,
      userID: activeUser.userID,
    };
    function x(body) {
      return axios.put("http://localhost:4000/CURD_Post/reaction", body);
    }
    const commentAdd = await x(body);
    setCount(commentAdd.data.liked);
  }

  async function sendFeedtoPost(type) {
    let body = {
      type,
      postId: _id,
      activeUserId: activeUser.userID,
      activeUsername: activeUser.username,
    };
    if (type == "comment") {
      body = {
        ...body,
        activeUsername: activeUser.username,
        activeUserProfilePic: activeUser.profilePic,
        msg: textRef.current.value,
        time: Date.now(),
      };
    }
    function x(body) {
      return axios.put("http://localhost:4000/post/put", body);
    }
    const commentAdd = await x(body);
    if (commentAdd.status == 201) {
      const z = await axios.post("http://localhost:4000/post/getSinglePost", {
        postId: _id,
      });
      updateComment(z.data);
    }
    if (type == "comment") {
      textRef.current.value = "";
    }
  }

  // Delete Post function ===>
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
          <img src={dp} alt="" />
          <div className="nameID">
            <h3>{username}</h3>
            <p>{userID}</p>
          </div>
        </div>
        <i className="pi pi-user-plus"></i>
      </div>
      <p>{text}</p>
      {x == true ? (
        <div className="mediaRepresent  border-round-xl">
          {x == true && mediaType == "image" ? (
            <img
              className="Media flex justify-content-center "
              src={media}
              alt={media}
            />
          ) : x == true && mediaType == "video" ? (
            <video
              className="Media flex justify-content-center "
              src={media}
              alt={media}
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
        <span
          onClick={() => {
            const y =
              count.length > 0 && count.includes(_id) ? "unliked" : "liked";
            sendFeedtoPost(y);
            sendFeedtoUser(y);
          }}
          style={{
            color: count.includes(_id) ? "var(--blue)" : "",
          }}
          className="reactionHover flex gap-2 align-items-center cursor-pointer "
        >
          <i className=" pi pi-thumbs-up" style={{ fontSize: "1em" }}></i>
          <p>Reaction</p>
        </span>
        <span
          onClick={() => setCommentModal(!openComments)}
          className="commentHover flex gap-2 align-items-center cursor-pointer"
        >
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
      <p style={{ color: "var(--comment)", textAlign: "center" }}>
        reactions : {reactions.length} comment : {comment.length}
      </p>
      {openComments == true ? (
        <div className="comments">
          <div className="inputs pb-3">
            <InputText ref={textRef} />
            <button
              onClick={() => {
                sendFeedtoPost("comment");
                sendFeedtoUser("comment");
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
            {comment.length > 0
              ? comment.map((val, ind) => {
                  return (
                    <div key={ind} className="item flex gap-2">
                      <img
                        src={"http://localhost:8000/assets/" + val.profilePic}
                        alt=""
                      />
                      <div className="commentText pt-1">
                        <h3>{val.username}</h3>
                        <p className="pt-1">{val.text}</p>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Posts;
