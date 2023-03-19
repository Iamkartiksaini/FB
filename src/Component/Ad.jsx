import React, { useEffect, useState } from "react";
import "../Style/Ad.scss";
import ProfileTag from "../Pages/ProfileTag";
import UserApi from "../Redux/UserApi";
import { useSelector } from "react-redux";

const Ad = () => {
  const [allUsers, refreshAllUser] = useState("");
  const images = {
    link2:
      "https://images.pexels.com/photos/11662238/pexels-photo-11662238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link1:
      "https://images.pexels.com/photos/6605302/pexels-photo-6605302.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  };
  const user = useSelector((state) => state.user);

  useEffect(() => {
    try {
      async function x() {
        const getUsersRes = await UserApi().getPeopleList({
          userID: user.userID,
        });
        refreshAllUser(getUsersRes.data);
      }
      x();
    } catch (error) {
      console.log("err", error);
    }
  }, []);

  async function refreshList() {
    const getUsersRes = await UserApi().getPeopleList({ userID: user.userID });
    console.log("getUsersRes", getUsersRes.data);
    refreshAllUser(getUsersRes.data);
  }

  return (
    <div className="Ad flex flex-column  gap-4">
      {/* <div className="img flex flex-column  border-round-xl gap-4">
        <div className="head flex justify-content-between align-items-center ">
          <h1>Sponserd</h1>
          <p>Create Ad</p>
        </div>
        <div
          className="AdImage"
          style={{
            height: "220px",
            width: "310px",
            background: `url("${images.link1}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="AdImage"
          style={{
            height: "140px",
            width: "310px",
            background: `url("${images.link2}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div> */}
      <div className="suggestions flex flex-column  gap-2 bg-white border-round-xl">
        <div className="head flex justify-content-between align-items-center ">
          <h1>Add Friends</h1>
          <p onClick={refreshList}>Refresh</p>
        </div>
        <div className="UserList">
          {allUsers !== ""
            ? allUsers.map((value, ind) => {
                return (
                  <ProfileTag
                    key={ind}
                    tag={value.tag}
                    userID={value.userID}
                    useIn={"list"}
                    profilePic={value.profilePic}
                    password={value.password}
                  />
                );
              })
            : null}
          {allUsers == "" ? (
            <i
              className="pi pi-spin pi-spinner"
              style={{ fontSize: "2em" }}
            ></i>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Ad;
