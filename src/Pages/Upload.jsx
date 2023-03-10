import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import "../Style/Upload.scss";
import postApi from "../Redux/Api.js";
import UserApi from "../Redux/UserApi";
import { useDispatch } from "react-redux";
import axios from "axios";

const Upload = () => {
  const [value, setValue] = useState("");
  const [img, setImg] = useState("");
  const [upFile, updateFile] = useState("");
  const [mType, setMtype] = useState("");
  const [mediaName, updateMediaName] = useState("");
  const imgRef = useRef();
  const vidRef = useRef();

  const dispatch = useDispatch();

  const imgStyle = {
    borderRadius: " 50%",
    objectFit: "cover",
    height: "50px",
    width: "50px",
    flexShrink: "0",
  };

  const link = {
    borderTop: "1px solid #e5e5e5",
    paddingTop: " 10px",
  };
  const postButton = {
    backgroundColor: "var(--blue)",
    border: "none",
    borderRadius: "10px",
    padding: " 3px 18px",
    fontWeight: "800",
    color: "white",
  };

  const body = {
    username: "kartik",
    userID: "kartik23",
    dp: "https://images.pexels.com/photos/15311317/pexels-photo-15311317.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    mediaType: mType == "" ? "" : mType,
    text: value,
    tag: " Gurugram,HR",
    media:
      upFile == ""
        ? ""
        : `http://localhost:4000/assets/${
            mediaName === "" ? upFile.name : mediaName
          }`,
  };
  const post = async () => {
    if (mType !== "") {
      const form = new FormData();
      form.set("file", upFile);
      await axios.post("http://localhost:8000/upload", form).then((res) => {
        updateMediaName(res.data.originalname);
        console.log("Uploading media res ", res.data);
      });
    }
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
          style={imgStyle}
          src="https://images.pexels.com/photos/15311317/pexels-photo-15311317.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="profile"
        />
        <InputText
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="p-inputtext-sm p-d-block p-mb-2 border-round-2xl w-full border-0 bg-black-alpha-10"
          placeholder="Whats in your mind ?"
        />
      </div>
      <div className="preview flex justify-content-center bg-black-alpha-10 border-round-xl">
        {mType == "image" ? (
          <img
            style={{ maxHeight: "400px", width: "auto" }}
            src={img}
            alt="img"
          />
        ) : null}

        {mType == "video" ? (
          <video
            className="Media flex justify-content-center "
            style={{ maxHeight: "400px", width: "auto" }}
            src={img}
            alt={img}
            controls
          />
        ) : null}
      </div>

      <div className="media flex gap-2 justify-content-between " style={link}>
        <input
          type="file"
          name="image"
          id="image"
          ref={imgRef}
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
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7 7C7 6.11003 7 5.66505 6.7322 5.37715C6.65621 5.29546 6.54711 5.21378 6.44732 5.16387C6.09566 4.98799 5.70533 5.10255 4.92468 5.33167C3.41701 5.77416 2.5 6.3589 2.5 7C2.5 7.6411 3.41701 8.22584 4.92468 8.66834C5.70533 8.89746 6.09566 9.01202 6.44732 8.83613C6.54711 8.78623 6.65621 8.70454 6.7322 8.62285C7 8.33496 7 7.88997 7 7ZM17 7C17 7.88997 17 8.33495 17.2678 8.62285C17.3438 8.70454 17.4529 8.78623 17.5527 8.83613C17.9043 9.01202 18.2947 8.89746 19.0753 8.66834C20.583 8.22584 21.5 7.6411 21.5 7C21.5 6.3589 20.583 5.77416 19.0753 5.33167C18.2947 5.10255 17.9043 4.98799 17.5527 5.16387C17.4529 5.21378 17.3438 5.29546 17.2678 5.37715C17 5.66505 17 6.11003 17 7Z"
              fill="#7E869E"
              fillOpacity="0.25"
            />
            <path
              d="M5.96062 15.3157L3.5 18L7.96641 19.2181C8.48244 19.3588 8.74045 19.4292 9.00474 19.4646C9.26903 19.5 9.53647 19.5 10.0713 19.5H14.1218C14.5605 19.5 14.7798 19.5 14.9974 19.4761C15.215 19.4522 15.4291 19.4047 15.8573 19.3095L19.5 18.5L18.3779 16.6298L18.3779 16.6298C17.9603 15.9338 17.7515 15.5859 17.5165 15.3796C16.8622 14.8056 15.9118 14.7206 15.1661 15.1694C14.8982 15.3307 14.6309 15.6361 14.0965 16.2469L14.0965 16.2469C13.8499 16.5287 13.7266 16.6695 13.6002 16.7482C13.2491 16.9665 12.7999 16.9463 12.4698 16.6973C12.351 16.6076 12.2408 16.4562 12.0206 16.1534L11.6456 15.6377C10.5357 14.1116 9.98076 13.3485 9.21743 13.1943C9.0305 13.1565 8.83911 13.1457 8.64911 13.1621C7.87325 13.2292 7.2357 13.9247 5.96062 15.3157Z"
              fill="#7E869E"
              fillOpacity="0.25"
            />
            <path
              d="M3.5 18L5.96062 15.3157C7.2357 13.9247 7.87325 13.2292 8.64911 13.1621C8.83911 13.1457 9.0305 13.1565 9.21743 13.1943C9.98076 13.3485 10.5357 14.1116 11.6456 15.6377L12.0206 16.1534C12.2408 16.4562 12.351 16.6076 12.4698 16.6973C12.7999 16.9463 13.2491 16.9665 13.6002 16.7482C13.7267 16.6695 13.8499 16.5287 14.0965 16.2469V16.2469C14.6309 15.6361 14.8982 15.3307 15.1661 15.1694C15.9118 14.7206 16.8622 14.8056 17.5165 15.3796C17.7515 15.5859 17.9603 15.9339 18.3779 16.6298L19.5 18.5"
              stroke="#222222"
            />
            <path d="M6.5 9V5" stroke="#222222" strokeLinecap="round" />
            <path d="M17.5 9V5" stroke="#222222" strokeLinecap="round" />
            <path
              d="M2.5 17V7M21.5 7V17"
              stroke="#222222"
              strokeLinecap="round"
            />
            <path
              d="M17.5074 4.96298C19.1476 5.27007 20.3747 5.70633 21.0117 6.20882C21.6488 6.71132 21.6628 7.25408 21.0518 7.75881C20.4409 8.26354 19.2364 8.70415 17.6123 9.0171C15.9882 9.33004 14.0283 9.49914 12.0154 9.5C10.0024 9.50085 8.0405 9.33343 6.41253 9.02187C4.78457 8.71031 3.57474 8.27073 2.95756 7.76652C2.34037 7.26231 2.34774 6.71955 2.97859 6.21651C3.60943 5.71347 4.83116 5.27617 6.46753 4.96768"
              stroke="#222222"
              strokeLinecap="round"
            />
            <path
              d="M21.5 17C21.5 17.663 20.4991 18.2989 18.7175 18.7678C16.9359 19.2366 14.5196 19.5 12 19.5C9.48044 19.5 7.06408 19.2366 5.28249 18.7678C3.50089 18.2989 2.5 17.663 2.5 17"
              stroke="#222222"
            />
          </svg>
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
            width="24"
            height="24"
            viewBox="0 0 24 24"
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
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 14V17C16 19.2091 14.2091 21 12 21V21C9.79086 21 8 19.2091 8 17V14"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8V16"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 10V7C16 4.79086 14.2091 3 12 3V3C9.79086 3 8 4.79086 8 7V10"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-black-alpha">Link</p>
        </span>
        <button style={postButton} onClick={post} type="submit">
          Post
        </button>
      </div>
    </div>
  );
};

export default Upload;
