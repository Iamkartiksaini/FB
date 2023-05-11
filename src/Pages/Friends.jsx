import React, { useEffect, useState } from "react";
import UserApi from "../Redux/UserApi";
import { getFileLink } from "../Redux/axiosConfig";

const imgStyle = {
  height: "50px",
  width: "50px",
  borderRadius: "50%",
  objectFit: "cover",
};

const Friends = () => {
  const [list, setlist] = useState(null);
  const x = async () => {
    const req = await UserApi().get();
    const resData = req.data;
    if (req.status == 200) {
      setlist(resData);
    }
  };
  useEffect(() => {
    x();
  }, []);

  return (
    <div className="Friends flex flex-column gap-3 p-3 bg-white border-round-2xl h-full">
      {list &&
        list.map((val, ind) => {
          return (
            <div className="head" key={ind}>
              <div className="left flex gap-2 align-items-center">
                <img
                  src={getFileLink + val.profilePic}
                  alt={getFileLink + val.profilePic}
                  style={imgStyle}
                />
                <div className="nameID">
                  <h3>{val.username}</h3>
                  <p>@{val.userID}</p>
                </div>
              </div>
              <i className="pi pi-user-plus"></i>
            </div>
          );
        })}
    </div>
  );
};

export default Friends;
