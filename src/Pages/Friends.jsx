import React, { useEffect, useState } from "react";
import UserApi from "../Redux/UserApi";
import ProfileTag from "./ProfileTag";

const Friends = () => {
  const [list, setlist] = useState(null);
  useEffect(() => {
    const x = async () => {
      let getApi = await UserApi().get();
      setlist(getApi.data);
    };
    x();
  }, []);

  return (
    <div className="Friends flex flex-column gap-3 p-3">
      {list &&
        list.map((value, index) => {
          return (
            <ProfileTag
              cName="p-3"
              userID={value.userID}
              profilePic={value.profilePic}
              password={value.password}
              key={index}
              useIn="list"
            />
          );
        })}
    </div>
  );
};

export default Friends;
