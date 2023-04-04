import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { useSelector } from "react-redux";
import { InputText } from "primereact/inputtext";
import axios from "axios";
import MsgModel from "../Component/MsgModel";
import icon from "../assets/react.svg";

function Message() {
  const user = useSelector((state) => state.user);
  const [ws, setWs] = useState(new WebSocket("ws://localhost:4000"));
  const [msg, setmsg] = useState("");
  const [roomKey, setKey] = useState("");
  const [refresh, setRefresh] = useState(0);

  ws.addEventListener("open", () => {
    console.log("Connection opened!");
  });
  ws.addEventListener("close", () => {});

  useEffect(() => {
    if (roomKey !== "") {
      {
        fetchData();
      }
    }
  }, [roomKey]);

  const textRef = useRef();
  ws.onmessage = ({ data }) => showMessage(data);

  async function fetchData() {
    const roomData = await axios.post("http://localhost:4000/chatRoom/id", {
      _id: roomKey,
    });
    setmsg(roomData.data);
  }

  function sendBtn() {
    if (!ws && value !== "") {
      showMessage("No WebSocket connection :(");
      return;
    }
    if (textRef.current.value != "") {
      ws.send(
        JSON.stringify({
          username: user.username,
          userID: user.userID,
          text: textRef.current.value,
          _id: roomKey,
        })
      );
      textRef.current.value = "";
    }
  }

  function showMessage(data) {
    let x = JSON.parse(data);
    if (typeof x == "object") {
      setmsg(x);
      notify();
    }
  }

  return (
    <div>
      <h1>Real Time Messaging</h1>
      <br />
      <p
        onClick={() => {
          setRefresh(refresh + 1);
          notify();
        }}
      >
        Refresh <i className="pi pi-spinner"></i>
      </p>
      <br />
      <InputText
        ref={textRef}
        id="messageBox"
        placeholder="Type your message here"
      />

      <Button
        id="send"
        title="Send Message!"
        onClick={() => {
          sendBtn();
        }}
        label="send"
      />
      <div className="friendsList">
        {user.friends.map((val, ind) => {
          return (
            <div
              key={ind}
              onClick={() => setKey(val.roomID)}
              style={
                val.roomID == roomKey
                  ? { backgroundColor: "teal" }
                  : { backgroundColor: "transparent" }
              }
            >
              <h3>{val.username}</h3>
              <p>{val.userID}</p>
            </div>
          );
        })}
      </div>
      <div className="msg">
        <MsgModel data={msg} />
      </div>
    </div>
  );
}

function notify() {
  // Check if the browser supports notifications
  if ("Notification" in window) {
    // Request permission for notifications
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        // Create a notification
        var notification = new Notification("New message", {
          body: "You have a new message!",
          icon: icon,
          badge: icon,
          vibrate: [200, 100, 200],
          data: "hello",
        });

        // Close the notification after a few seconds
        setTimeout(notification.close.bind(notification), 5000);
      }
    });
  }
}

export default Message;
