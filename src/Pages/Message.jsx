import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MsgModel from "../Component/MsgModel";
import UserApi from "../Redux/UserApi";
import { getFileLink } from "../Redux/axiosConfig";
import "../Style/Message.scss";
import { Button } from "primereact/button";

function Message() {
  const user = useSelector((state) => state.user);
  const ws = useSelector((state) => state.ws);
  const getFriendID = user.friends.map((val) => {
    return { _id: val._id };
  });
  const chatRoomID = user.friends.map((val) => {
    return { roomID: val.roomID };
  });
  const [friendList, setFriendList] = useState([]);
  const [roomKey, setKey] = useState("");
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    console.log("refresh");
    fetchData();
  }, [refresh]);

  async function fetchData() {
    if (getFriendID.length > 0) {
      const roomData = await UserApi().getFriendsModel(getFriendID);
      if (roomData.status == 200 && roomData.data != null) {
        console.log("getFriendsModel");
        setFriendList(roomData.data);
      }
    }
  }

  return (
    <div className="MessageList">
      <h1>Real Time Messaging</h1>
      <br />
      <Button
        title="Refresh"
        icon="pi pi-spinner"
        rounded
        text
        severity="info"
        aria-label="User"
        label="Refresh"
        iconPos="right"
        onClick={() => {
          setRefresh(refresh + 1);
        }}
      />
      <br />
      <div className="friendsList">
        {friendList.length > 0 ? (
          friendList.map((val, ind) => {
            return (
              <div
                className=" friendItem flex align-items-center gap-2 mt-2 mb-2"
                key={ind}
                onClick={() =>
                  setKey({ ...val, roomID: chatRoomID[ind].roomID })
                }
              >
                <img
                  src={getFileLink + val.profilePic}
                  alt={getFileLink + val.profilePic}
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <div className="flex flex-column  justify-content-center">
                  <h3>{val.username}</h3>
                  <p>@{val.userID}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="m-2">Your Friend List Is Empty</div>
        )}
      </div>
      {roomKey !== "" ? (
        <div className="msg">
          <MsgModel data={{ ws, friend: roomKey, setKey }} />
        </div>
      ) : null}
    </div>
  );
}

export default Message;
