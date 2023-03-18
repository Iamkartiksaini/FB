import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Pages/Home";
import { useEffect } from "react";
import Message from "./Pages/Message";
import Page404 from "./Component/Page404";

function App() {
  const authStatus = useSelector((state) => state.auth);

  const { auth } = authStatus;
  const x = localStorage.getItem("count");
  console.log("auth.satuts", auth);
  useEffect(() => {
    if (auth == true && x == 1) {
      window.location.pathname = "/home/feed";
      localStorage.setItem("count", 2);
    }
  }, [auth]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {auth == false ? <Route path="/" element={<Login />}></Route> : null}
          <Route path="/home/*" element={<Home />}>
            <Route path="message" element={<Message />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/home/message" />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
