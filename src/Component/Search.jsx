import React, { useEffect, useRef, useState } from "react";
import "../Style/ProfileTag.scss";
import { getFileLink } from "../Redux/axiosConfig";
import UserApi from "../Redux/UserApi";

const Search = () => {
  const [list, updateList] = useState([]);
  const textRef = useRef();

  async function handleSubmit() {
    const getSearchResult = await UserApi().search({
      username: textRef.current.value,
    });
    console.log("getSearchResult", getSearchResult.data);
    updateList(getSearchResult.data);
  }
  return (
    <div className="searchItem">
      <input type="text" ref={textRef} placeholder="Search Person ....." />
      <button onClick={handleSubmit}>Search</button>
      <div className="upper">
        <h3>Search List</h3>
        <i className="pi pi-plus" />
      </div>
      <ul>
        {list.length > 0 ? (
          list.map((val, ind) => {
            return (
              <div className="head" key={ind}>
                <div className="left flex gap-2 align-items-center">
                  <img
                    src={getFileLink + val.profilePic}
                    alt={getFileLink + val.profilePic}
                  />
                  <div className="nameID">
                    <h3>{val.username}</h3>
                    <p>@{val.userID}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p style={{ textAlign: "center" }}>No Suggestions</p>
        )}
      </ul>
    </div>
  );
};

export default Search;
