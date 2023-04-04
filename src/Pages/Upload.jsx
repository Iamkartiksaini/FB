import React, { useState } from "react";
import "../Style/Upload.scss";
import postApi from "../Redux/Api.js";
import UserApi from "../Redux/UserApi";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { saveFileLink, getFileLink } from "../Redux/axiosConfig";
import { InputTextarea } from "primereact/inputtextarea";

const fileAccessBaseLink = getFileLink;

const Upload = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { username, userID, profilePic } = user;
  let initialValue = {
    username,
    userID,
    dp: profilePic,
    media: "",
    mediaType: "",
    text: "",
    tag: "Gurugram,HR",
  };

  const [uploadPost, setUploadPost] = useState(initialValue);
  const [previewMedia, setPreviewMedia] = useState("");

  const post = async () => {
    if (uploadPost.mediaType !== "" || uploadPost.text !== "") {
      let fileName = "";
      if (uploadPost.mediaType !== "") {
        const form = new FormData();
        form.set("file", uploadPost.media);
        const fileRes = await axios.post(saveFileLink, form);
        if (fileRes.status == 201) {
          fileName = fileRes.data.newField;
        } else {
          return;
        }
      }
      uploadPost.media = fileName;
      const createPost = await postApi().post(uploadPost);
      if (createPost.status === 201) {
        UserApi().addPost({
          userID,
          postID: createPost.data._id,
          type: "add",
        });
        const fetchPosts = await postApi().get();
        dispatch({ type: "update", updatedArray: fetchPosts.data });
        setUploadPost(initialValue);
        setPreviewMedia("");
      }
    } else {
      console.log("return");
      return;
    }
  };

  return (
    <div className="Upload bg-white p-2 border-round-2xl  flex flex-column gap-3 ">
      <div className="share-thought flex  gap-3 align-items-center">
        <img
          id="avatar"
          src={
            user !== ""
              ? fileAccessBaseLink + user.profilePic
              : "https://images.pexels.com/photos/15311317/pexels-photo-15311317.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          alt="profile"
        />
        <InputTextarea
          autoResize
          rows={1}
          className="p-inputtext-sm p-d-block p-mb-2 border-round-2xl w-full border-0 bg-black-alpha-10"
          placeholder="Whats in your mind ?"
          value={uploadPost.text}
          onChange={(e) => {
            setUploadPost((pre) => {
              const x = { ...pre };
              x.text = e.target.value;
              return x;
            });
          }}
        />
      </div>
      {previewMedia !== "" ? (
        <div className="preview flex justify-content-center bg-black-alpha-10 border-round-xl">
          {uploadPost.mediaType == "image" ? (
            <img src={previewMedia} alt={previewMedia} />
          ) : null}
          {uploadPost.mediaType == "video" ? (
            <video
              className="Media flex justify-content-center "
              src={previewMedia}
              alt={previewMedia}
              controls
            />
          ) : null}
        </div>
      ) : null}

      <div className="media flex gap-2 justify-content-between " id="link">
        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          onClick={(e) => (e.target.value = "")}
          onChange={(e) => {
            const file = e.target.files[0];
            setPreviewMedia(URL.createObjectURL(file));
            setUploadPost((pre) => {
              pre.media = file;
              pre.mediaType = "image";
              return pre;
            });
          }}
        />
        <label
          onInput={(e) => console.log("E", e)}
          htmlFor="image"
          className="flex align-items-center gap-1"
        >
          <i className=" pi pi-image" style={{ fontSize: "1em" }}></i>
          <p>Image</p>
        </label>
        <input
          type="file"
          name="video"
          id="video"
          accept="video/*"
          onClick={(e) => (e.target.value = "")}
          onChange={(e) => {
            const file = e.target.files[0];
            setPreviewMedia(URL.createObjectURL(file));
            setUploadPost((pre) => {
              pre.media = file;
              pre.mediaType = "video";
              return pre;
            });
          }}
        />
        <label htmlFor="video" className="flex align-items-center gap-1">
          <i className=" pi pi-video" style={{ fontSize: "1em" }}></i>
          <p>Video</p>
        </label>
        <input
          type="file"
          name="audio"
          accept="audio/*"
          id="audio"
          onChange={(e) => {
            const file = e.target.files[0];
            setPreviewMedia(URL.createObjectURL(file));
            setUploadPost((pre) => {
              pre.media = file;
              pre.mediaType = "audio";
              return pre;
            });
          }}
        />
        <label htmlFor="audio" className="flex align-items-center gap-1">
          <i className=" pi  pi-microphone" style={{ fontSize: "1em" }}></i>
          <p>Audio</p>
        </label>
        <span className="flex align-items-center gap-1 ">
          <i className=" pi pi-globe" style={{ fontSize: "1em" }}></i>
          <p className="text-black-alpha">Link</p>
        </span>
        <button id="postButton" onClick={post} type="submit">
          Post
        </button>
      </div>
    </div>
  );
};

export default Upload;
