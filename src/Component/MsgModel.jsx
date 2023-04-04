import { useSelector } from "react-redux";
import { getFileLink } from "../Redux/axiosConfig";
import "../Style/MsgModel.scss";

const MsgModel = ({ data }) => {
  const user = useSelector((state) => state.user);
  const { userID } = user;
  const friend = data.members.filter((val) => val.userID != userID);
  console.log("friend");
  let currentUser = friend[0];
  return (
    <div className="MsgModel p-2 flex-column gap-3">
      <div className="head flex justify-content-between">
        <div className="left flex gap-2 align-items-center">
          <img src={getFileLink + user.profilePic} alt="" />
          <div className="nameID">
            <h3>{currentUser.username}</h3>
            <p>{currentUser.userID}</p>
          </div>
        </div>
        <i className="pi pi-align-justify"></i>
      </div>
      <div className="list">
        {data !== ""
          ? data.messages.map((val, ind) => {
              return (
                <p key={ind}>
                  {val.username} : {val.text}
                </p>
              );
            })
          : "No Data"}
      </div>
    </div>
  );
};

export default MsgModel;
