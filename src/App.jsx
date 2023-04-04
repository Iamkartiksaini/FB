import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Pages/Home";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://localhost:4000";

  let authStatus = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (localStorage.getItem("FB-user") !== null && authStatus == "") {
  //     authStatus = JSON.parse(localStorage.getItem("FB-user"));
  //     console.log(authStatus);
  //   }
  //   dispatch({
  //     type: "userLogin",
  //     currentUser: authStatus,
  //   });
  // }, []);

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
