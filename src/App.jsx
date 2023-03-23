import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "./Pages/Home";
import jwt_decode from "jwt-decode";

function App() {
  const getToken = localStorage.getItem("UserToken");
  const authStatus = useSelector((state) => state.user);
  const dispatch = useDispatch();

  if (authStatus == "" && getToken != null) {
    var decoded = jwt_decode(getToken);
    dispatch({
      type: "userLogin",
      currentUser: { ...decoded._doc },
    });
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          {authStatus == "" ? (
            <Route path="/" element={<Login />}></Route>
          ) : (
            <Route path="*" element={<Navigate to="/home/feed" />}></Route>
          )}
          {authStatus != "" ? (
            <Route path="/home/*" element={<Home />}></Route>
          ) : (
            <Route path="*" element={<Navigate to="/" />}></Route>
          )}
          {/* <Route path="*" element={<Navigate to="/home/message" />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
