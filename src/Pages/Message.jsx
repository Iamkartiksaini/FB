import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { useSelector } from "react-redux";
import { InputText } from "primereact/inputtext";
import axios from "axios";

function Message() {
  const ws = new WebSocket("ws://localhost:4000");
  ws.addEventListener("open", () => {
    console.log("Connection opened!");
  });
  ws.addEventListener("close", () => {});

  const user = useSelector((state) => state.user);
  const [msg, setmsg] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const roomData = await axios.post("http://localhost:4000/chatRoom/id", {
        _id: "64281a82c46b049e3c836f53",
      });
      console.log("room Data", roomData.data);
      setmsg(roomData.data.messages);
    }
    fetchData();
  }, [setmsg]);

  const textRef = useRef();
  ws.onmessage = ({ data }) => showMessage(data);

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
          _id: "64281a82c46b049e3c836f53",
        })
      );
    }
  }

  function showMessage(data) {
    let x = JSON.parse(data);
    if (typeof x == "object") {
      setmsg(x.messages);
      console.log("incoming", x);
    }
  }

  return (
    <div>
      <h1>Real Time Messaging</h1>
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
      <div className="msg">
        {msg.map((val, ind) => {
          return (
            <li key={ind}>
              {val.username} : {val.text}
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default Message;
