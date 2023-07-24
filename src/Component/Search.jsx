import React, { useEffect, useState } from "react";
import "../Style/ProfileTag.scss";
import { getFileLink } from "../Redux/axiosConfig";
import UserApi from "../Redux/UserApi";

const Search = ({ value, closeModel }) => {
  const [list, updateList] = useState(null);

  useEffect(() => {
    handleSubmit(value);
  }, []);

  useEffect(() => {
    const cx = setTimeout(() => {
      handleSubmit(value);
    }, 1000);
    return () => {
      clearInterval(cx);
    };
  }, [value]);

  async function handleSubmit(value) {
    const getSearchResult = await UserApi().search({
      username: value,
    });
    console.log("getSearchResult", getSearchResult.data);
    updateList(getSearchResult.data);
  }
  return (
    <div className="searchItem">
      <div className="upper">
        <h3>Search List</h3>
        <i className="pi pi-times" onClick={() => closeModel(false)} />
      </div>
      <ul>
        {list !== null && list.length > 0 ? (
          list.map((val, ind) => {
            return (
              <div className="head" key={ind}>
                <img
                  src={getFileLink + val.profilePic}
                  alt={getFileLink + val.profilePic}
                />
                <div className="nameID">
                  <h3>{val.username}</h3>
                  <p>@{val.userID}</p>
                </div>
              </div>
            );
          })
        ) : (
          <h3>No Result Found</h3>
        )}
      </ul>
    </div>
  );
};

export default Search;
