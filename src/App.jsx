import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Pages/Home";
import Message from "./Pages/Message";
import Page404 from "./Component/Page404";

function App() {
  const authStatus = useSelector((state) => state.user);
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
            <Route path="/home/*" element={<Home />}>
              <Route path="message" element={<Message />}></Route>
            </Route>
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
