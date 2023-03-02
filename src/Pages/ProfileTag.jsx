import React from "react";
import addFriend from "../assets/User_add.png";
import "../Style/ProfileTag.scss";

const ProfileTag = () => {
  return (
    <div className="ProfileTag flex justify-content-between align-items-center">
      <div className="left flex gap-2 align-items-center">
        <img
          src="https://images.pexels.com/photos/15311317/pexels-photo-15311317.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          height="40px"
          width="40px"
          alt=""
        />
        <div className="text">
          <h3>Kartik Saini</h3>
          <p className="mt-1">99 friends</p>
        </div>{" "}
      </div>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="12.9135"
          cy="8.68344"
          rx="4.19297"
          ry="4.19297"
          stroke="#989898"
          stroke-width="2.09648"
          stroke-linecap="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.3039 16.1005C13.8449 16.0478 13.3802 16.0211 12.9137 16.0211C10.9016 16.0211 8.9239 16.5178 7.28581 17.4605C5.64833 18.4028 4.40326 19.7636 3.82638 21.3783C3.6316 21.9234 3.91566 22.5233 4.46084 22.7181C5.00602 22.9128 5.60587 22.6288 5.80064 22.0836C6.17933 21.0236 7.03989 20.0209 8.33152 19.2775C9.39439 18.6659 10.6742 18.2751 12.0308 18.1561C12.3776 17.1324 13.2373 16.3453 14.3039 16.1005Z"
          fill="#989898"
        />
        <path
          d="M19.2036 14.9728L19.2036 23.3587"
          stroke="#989898"
          stroke-width="2.6206"
          stroke-linecap="round"
        />
        <path
          d="M23.3963 19.1657L15.0104 19.1657"
          stroke="#989898"
          stroke-width="2.6206"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default ProfileTag;
