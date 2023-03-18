import React, { useEffect, useState } from "react";
import UserApi from "../Redux/UserApi";
import ProfileTag from "./ProfileTag";

const Friends = () => {
  const [list, setlist] = useState(null);
  useEffect(() => {
    const x = async () => {
      let getApi = await UserApi().get();
      console.log("getApi", getApi);
      setlist(getApi.data);
    };
    x();
  }, []);

  return (
    <div className="Friends">
      {list &&
        list.map((value, index) => {
          console.log(value);
          return (
            <ProfileTag
              userID={value.userID}
              dp={value.profilePic}
              key={index}
              useIn="xyxz"
            />
          );
        })}
    </div>
  );
};

export default Friends;
