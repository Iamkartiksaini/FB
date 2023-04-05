import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Pages/Home";

function App() {
  let authStatus = useSelector((state) => state.auth);
  console.log("App");
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
