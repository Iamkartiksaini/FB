import { InputTextarea } from "primereact/inputtextarea";
import { getFileLink, instance } from "../Redux/axiosConfig";
import "../Style/MsgModel.scss";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import icon from "../assets/react.svg";

const MsgModel = ({ data }) => {
  const { friend, setKey } = data;
  const [roomData, updateRoomData] = useState("");
  const textRef = useRef();

  const user = useSelector((state) => state.user);
  const ws = useSelector((state) => state.ws);
  let members = "";
  useEffect(() => {
    fetchData();
    console.log("load roomData ");
  }, [friend]);

  if (roomData != "") {
    members = roomData.members.map((val, ind) => {
      return val._id;
    });
  }

  async function fetchData() {
    const getroomData = await instance.post("chatRoom/id", {
      _id: friend.roomID,
    });
    updateRoomData(getroomData.data);
  }

  function sendMessage() {
    if (textRef.current.value != "") {
      ws.send(
        JSON.stringify({
          type: "msg",
          roomID: friend.roomID,
          username: user.username,
          userID: user.userID,
          text: textRef.current.value,
          roomMemberslist: members,
        })
      );
    }
    textRef.current.value = "";
  }

  ws.addEventListener("message", ({ data }) => {
    const parseMsg = JSON.parse(data);
    if (parseMsg._doc._id == friend.roomID) {
      updateRoomData(parseMsg._doc);
    }
  });

  return (
    <div className="MsgModel p-2 flex-column ">
      <div className="head flex justify-content-between">
        <div className="left flex gap-2 align-items-center">
          <i onClick={() => setKey("")} className="pi pi-angle-left"></i>{" "}
          <img src={getFileLink + friend.profilePic} alt="" />
          <div className="nameID">
            <h3>{friend.username}</h3>
            <p>{friend.userID}</p>
          </div>
        </div>
        <i className="pi pi-align-justify"></i>
      </div>
      <div className="list p-2">
        {roomData !== "" ? (
          roomData.messages.length > 0 ? (
            roomData.messages.map((val, ind) => {
              const getTime = new Date(val.sendAt).toTimeString()
              const getDate = new Date(val.sendAt).toDateString()
              const amPm = getTime.slice(0, 2) >= 12 ? "pm" : "am"
              return (
                <p
                  key={ind}
                  className={user.userID == val.userID ? "right" : ""}
                >
                  <span>{val.text} <br />
                    <h6> {val.sendAt ? getTime.slice(0, 7) + amPm : " - time error"}</h6>      </span>
                </p>
              );
            })
          ) : (
            <p style={{ color: "var(--comment)" }}>Start Messaging....</p>
          )
        ) : (
          <i className="pi pi-spin pi-spinner" style={{ fontSize: "3em" }}></i>
        )}
      </div>
      <div className="text flex  align-items-center">
        <InputTextarea
          ref={textRef}
          rows={1}
          className="p-inputtext-sm p-d-block p-mb-2  w-full border-0 "
          placeholder="Whats in your mind ?"
        />
        <i onClick={sendMessage} className="pi pi-send"></i>
      </div>
    </div>
  );
};

export default MsgModel;

// fake 