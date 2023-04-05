import React, { useEffect, useState } from "react";
import UserApi from "../Redux/UserApi";
import { useDispatch, useSelector } from "react-redux";
import { getFileLink } from "../Redux/axiosConfig";

function ProfileTag() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [suggestionList, setSuggestionList] = useState([]);

  const getFriendID = user.friends.map((val) => {
    return { _id: val._id };
  });

  useEffect(() => {
    async function getSuggestions() {
      getFriendID.push({ _id: user._id });
      const suggestionRes = await UserApi().getPeopleList(getFriendID);
      console.log("suggestionRes", suggestionRes.data);
      if (suggestionRes.status == 200) {
        setSuggestionList(suggestionRes.data);
      }
    }
    getSuggestions();
  }, [user.friends]);

  async function addFriend(fr) {
    const me = {
      _id: user._id,
      userID: user.userID,
      username: user.username,
    };
    const friend = {
      _id: fr._id,
      userID: fr.userID,
      username: fr.username,
    };
    const addFriendRes = await UserApi().addFriend({ me, friend });
    if (addFriendRes.status == 200) {
      dispatch({
        type: "userLogin",
        currentUser: addFriendRes.data,
      });
    }
    console.log("addFriendRes", addFriendRes.data);
  }

  return (
    <>
      {suggestionList.length > 0 ? (
        suggestionList.map((val, ind) => {
          return (
            <div
              className=" friendItem flex align-items-center gap-2 mt-2 mb-2"
              key={ind}
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

              <i
                className="pi pi-user-plus"
                onClick={() => {
                  addFriend(val);
                }}
              >
                {" "}
              </i>
            </div>
          );
        })
      ) : (
        <p style={{ textAlign: "center" }}>No Suggestions</p>
      )}
    </>
  );
}

export default ProfileTag;
