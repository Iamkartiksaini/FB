import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProfileTag from "../Pages/ProfileTag";
import "../Style/SideBar.scss";
import { Button } from "primereact/button";

const SideBar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <aside className="SideBar flex flex-column gap-1 p-2">
      <ProfileTag profilePic={user.profilePic} userID={user.userID} />
      <div className="info">
        <span className="flex align-items-center">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.4724 22.8674L13.1829 7.14377M22.6171 5.04729L2.7005 9.24026"
              stroke="#7E869E"
              strokeOpacity="0.25"
              strokeWidth="1.04824"
            />
            <path
              d="M2.7005 6.3052C2.7005 5.13106 2.7005 4.54399 2.929 4.09553C3.13 3.70105 3.45072 3.38033 3.8452 3.17934C4.29366 2.95084 4.88073 2.95084 6.05486 2.95084H19.2627C20.4369 2.95084 21.0239 2.95084 21.4724 3.17934C21.8669 3.38033 22.1876 3.70105 22.3886 4.09553C22.6171 4.54399 22.6171 5.13106 22.6171 6.3052V19.5131C22.6171 20.6872 22.6171 21.2743 22.3886 21.7228C22.1876 22.1172 21.8669 22.438 21.4724 22.639C21.0239 22.8675 20.4369 22.8675 19.2627 22.8675H6.05486C4.88072 22.8675 4.29366 22.8675 3.8452 22.639C3.45072 22.438 3.13 22.1172 2.929 21.7228C2.7005 21.2743 2.7005 20.6872 2.7005 19.5131V6.3052Z"
              stroke="#222222"
              strokeWidth="1.04824"
              strokeLinecap="round"
            />
            <path
              d="M13.1826 16.0847C13.1826 18.3472 10.9396 19.9366 9.96116 20.5223C9.68386 20.6883 9.34355 20.6883 9.06624 20.5223C8.08782 19.9366 5.84485 18.3472 5.84485 16.0847C5.84485 13.8649 7.62253 12.385 9.5137 12.385C11.4704 12.385 13.1826 13.8649 13.1826 16.0847Z"
              stroke="#222222"
              strokeWidth="1.04824"
            />
            <ellipse
              cx="9.51406"
              cy="16.0539"
              rx="1.04824"
              ry="1.04824"
              fill="#222222"
            />
          </svg>
          <p>Sector-106,Gurgoan,Haryana,India</p>
        </span>
        <span className="flex align-items-center">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6586 20.9836V10.5012C12.6586 7.53628 12.6586 6.05385 11.7375 5.13278C10.8164 4.21172 9.334 4.21172 6.36913 4.21172H5.32083C4.33255 4.21172 3.8384 4.21172 3.53138 4.51874C3.22436 4.82576 3.22436 5.3199 3.22436 6.30819V15.7424C3.22436 16.7307 3.22436 17.2248 3.53138 17.5319C3.8384 17.8389 4.33255 17.8389 5.32084 17.8389H9.51384C9.51385 17.8389 9.51385 17.8389 9.51386 17.8389C11.2506 17.8389 12.6586 19.2468 12.6586 20.9836C12.6586 20.9836 12.6586 20.9836 12.6586 20.9836V20.9836Z"
              stroke="#33363F"
              strokeWidth="1"
            />
            <path
              d="M12.6586 20.9836V10.5012C12.6586 7.53628 12.6586 6.05385 13.5796 5.13278C14.5007 4.21172 15.9831 4.21172 18.948 4.21172H19.9963C20.9846 4.21172 21.4787 4.21172 21.7858 4.51874C22.0928 4.82576 22.0928 5.3199 22.0928 6.30819V15.7424C22.0928 16.7307 22.0928 17.2248 21.7858 17.5319C21.4787 17.8389 20.9846 17.8389 19.9963 17.8389H15.8033C15.8033 17.8389 15.8033 17.8389 15.8033 17.8389C14.0665 17.8389 12.6586 19.2468 12.6586 20.9836C12.6586 20.9836 12.6586 20.9836 12.6586 20.9836V20.9836Z"
              stroke="#33363F"
              strokeWidth="1"
            />
          </svg>
          <p>Education at XYZ Collage</p>
        </span>
      </div>
      <div className="views">
        <div className="flex justify-content-between ">
          <p>Profile Total Views</p> <span>99.9k</span>
        </div>
        <div className="flex justify-content-between">
          <p>Total Likes</p> <span>99.9k</span>
        </div>
        <div className="flex justify-content-between">
          <p>Friends</p> <span>{user.friends.length}</span>
        </div>
      </div>
      <div className="Links p-2">
        <h2>Social Profile</h2>
        <div className="info">
          <span className="flex align-items-center">
            <svg
              width="26"
              height="25"
              viewBox="0 0 26 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.89124 8.54997C3.89124 6.07925 3.89124 4.84389 4.65879 4.07633C5.42635 3.30878 6.66171 3.30878 9.13243 3.30878H16.8306C19.3013 3.30878 20.5366 3.30878 21.3042 4.07633C22.0718 4.84389 22.0718 6.07925 22.0718 8.54997V16.2481C22.0718 18.7188 22.0718 19.9541 21.3042 20.7217C20.5366 21.4893 19.3013 21.4893 16.8306 21.4893H9.13243C6.66171 21.4893 5.42635 21.4893 4.65879 20.7217C3.89124 19.9541 3.89124 18.7188 3.89124 16.2481V8.54997Z"
                stroke="#222222"
                strokeWidth="1.3103"
              />
              <ellipse
                cx="17.5268"
                cy="7.85388"
                rx="1.51504"
                ry="1.51504"
                fill="#222222"
              />
              <path
                d="M16.3667 12.399C16.3667 14.2685 14.8512 15.784 12.9817 15.784C11.1122 15.784 9.59674 14.2685 9.59674 12.399C9.59674 10.5295 11.1122 9.01404 12.9817 9.01404C14.8512 9.01404 16.3667 10.5295 16.3667 12.399Z"
                stroke="#222222"
                strokeWidth="1.3103"
              />
            </svg>
            <div className="text">
              <h3>Instagram</h3>
              <p className="mt-1">{user.socialLinks[0].address}</p>
            </div>
          </span>
          <span className="flex align-items-center">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.785 12.1582L19.2833 14.6565C19.6193 14.9924 19.6193 15.5371 19.2833 15.8731C17.467 17.6893 14.5916 17.8937 12.5367 16.3525L11.0504 15.2378C9.40552 14.0042 7.94433 12.543 6.71068 10.8981L5.59596 9.4118C4.05479 7.35691 4.25914 4.48147 6.07543 2.66518C6.41137 2.32923 6.95605 2.32923 7.292 2.66518L9.7903 5.16348C10.1587 5.5319 10.1587 6.12924 9.7903 6.49767L8.82692 7.46104C8.67382 7.61414 8.63587 7.84804 8.7327 8.0417C9.85222 10.2807 11.6678 12.0963 13.9068 13.2158C14.1004 13.3126 14.3343 13.2747 14.4874 13.1216L15.4508 12.1582C15.8192 11.7898 16.4166 11.7898 16.785 12.1582Z"
                stroke="#33363F"
                strokeWidth="1.88683"
              />
            </svg>
            <div className="text">
              <h3>Mobile Number</h3>
              <p className="mt-1">{user.socialLinks[1].address}</p>
              <br />
            </div>{" "}
          </span>
        </div>
        <Button
          label="Logout"
          icon="pi pi-upload"
          // iconPos="right"
          className="p-button-text p-button-plain"
          onClick={() => {
            localStorage.clear();
            dispatch({ type: "userLogin", currentUser: "" });
          }}
        />
      </div>
    </aside>
  );
};

export default SideBar;
