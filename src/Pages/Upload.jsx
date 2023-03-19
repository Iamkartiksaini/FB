import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import "../Style/Upload.scss";
import postApi from "../Redux/Api.js";
import UserApi from "../Redux/UserApi";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const Upload = () => {
  const [value, setValue] = useState("");
  const [img, setImg] = useState("");
  const [upFile, updateFile] = useState("");
  const [mType, setMtype] = useState("");
  const imgRef = useRef();
  const vidRef = useRef();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const body = {
    username: user != "" ? user.username : "Kartik Saini",
    userID: user != "" ? user.userID : "Kartik23",
    dp:
      user != ""
        ? `http://localhost:8000/assets/${user.profilePic}`
        : "https://images.pexels.com/photos/15311317/pexels-photo-15311317.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    mediaType: mType == "" ? "" : mType,
    text: value,
    tag: " Gurugram,HR",
  };
  const post = async () => {
    let fileName = "";
    if (mType !== "") {
      const form = new FormData();
      form.set("file", upFile);
      await axios.post("http://localhost:8000/upload", form).then((res) => {
        fileName = res.data.newField;
        console.log("Uploading media res ", res.data);
      });
    }
    body.media = upFile == "" ? "" : `http://localhost:4000/assets/${fileName}`;
    const x = await postApi().post(body);
    const y = await postApi().get();
    // console.log("create post res", x);

    if (x.status === 201 && y.status === 200) {
      dispatch({ type: "update", updatedArray: y.data });
      const userRES = await UserApi().addPost({
        userID: "Kartik23",
        postID: x.data._id,
        type: "add",
      });
      // console.log("add in user ", userRES);
      setValue("");
      setMtype("");
      imgRef.current.value = "";
      vidRef.current.value = "";
    }
  };

  return (
    <div className="Upload bg-white p-2 border-round-2xl  flex flex-column gap-3 ">
      <div className="share-thought flex  gap-3 align-items-center">
        <img
          id="avatar"
          src={
            user !== ""
              ? `http://localhost:8000/assets/${user.profilePic}`
              : "https://images.pexels.com/photos/15311317/pexels-photo-15311317.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          alt="profile"
        />
        <InputText
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="p-inputtext-sm p-d-block p-mb-2 border-round-2xl w-full border-0 bg-black-alpha-10"
          placeholder="Whats in your mind ?"
        />
      </div>
      {mType !== "" ? (
        <div className="preview flex justify-content-center bg-black-alpha-10 border-round-xl">
          {mType == "image" ? <img src={img} alt={img} /> : null}
          {mType == "video" ? (
            <video
              className="Media flex justify-content-center "
              src={img}
              alt={img}
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
          ref={imgRef}
          accept="image/*"
          onClick={(e) => (e.target.value = "")}
          onChange={(e) => {
            const file = e.target.files[0];
            setImg(URL.createObjectURL(file));
            updateFile(file);
            setMtype("image");
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
          ref={vidRef}
          onClick={(e) => (e.target.value = "")}
          onChange={(e) => {
            const file = e.target.files[0];
            setImg(URL.createObjectURL(file));
            updateFile(file);
            setMtype("video");
          }}
        />
        <label htmlFor="video" className="flex align-items-center gap-1">
          <i className=" pi pi-video" style={{ fontSize: "1em" }}></i>
          <p>Media</p>
        </label>
        <input
          type="file"
          name="audio"
          id="audio"
          onChange={(e) => {
            const file = e.target.files[0];
            setImg(URL.createObjectURL(file));
            updateFile(file);
            setMtype("audio");
          }}
        />
        <label htmlFor="audio" className="flex align-items-center gap-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="8"
              y="2"
              width="8"
              height="13"
              rx="4"
              stroke="black"
              strokeLinejoin="round"
            />
            <path
              d="M5.5 11C5.5 12.7239 6.18482 14.3772 7.40381 15.5962C8.62279 16.8152 10.2761 17.5 12 17.5C13.7239 17.5 15.3772 16.8152 16.5962 15.5962C17.8152 14.3772 18.5 12.7239 18.5 11"
              stroke="#222222"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 21V19"
              stroke="#222222"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
