import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { instance } from "../Redux/axiosConfig";

const Notification = () => {
  const user = useSelector((state) => state.user);
  const ws = useSelector((state) => state.ws);

  const mainDiv = {
    top: "15px",
    position: "absolute",
    width: "350px",
    backgroundColor: "rgb(217 217 217 / 49%)",
    padding: "20px",
    right: "50%",
    borderRadius: "10px",
    backdropFilter: "blur(3px)",
  };
  const listItem = {
    width: "100%",
    padding: "10px 0px",
    minHeight: "70px",
  };
  const [notificationList, setNotificationList] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const getroomData = await instance.post("chatRoom/get_notification_data", {
      notificationID: user.notifications,
    });
    setNotificationList(getroomData.data);
  }

  if (ws != "") {
    ws.addEventListener("message", ({ data }) => {
      const parseMsg = JSON.parse(data);
      console.log("type:addFriend || post_liked res", parseMsg);
      if (parseMsg.type == "post_liked" || parseMsg.type == "addFriend") {
        fetchData();
      }
    });
  }

  return (
    <div className="mainModelOpenDiv" style={mainDiv}>
      <h3>Notifications</h3>
      <hr />
      <ul>
        {notificationList === ""
          ? "No Notification"
          : notificationList.notifications.map((val, ind) => {
              return (
                <li
                  key={ind}
                  className="flex gap-3 align-items-center"
                  style={listItem}
                >
                  <i
                    className={`pi ${
                      val.type == "addFriend"
                        ? "pi-users"
                        : val.type == "comment"
                        ? "pi-comments"
                        : "pi-heart-fill"
                    }`}
                    style={{ fontSize: "20px" }}
                  />
                  <div className="text flex gap-1">
                    <h4>{val.head}</h4>
                    <p>
                      {val.type == "addFriend"
                        ? "has become your friend"
                        : val.type == "comment"
                        ? `on your post ${val.postID}`
                        : `liked your post (PostID:${val.postID})`}
                    </p>
                  </div>
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default Notification;
