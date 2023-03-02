// import "./App.css";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Pages/Home";

function App() {
  const authStatus = useSelector((state) => state.auth);
  console.log("App status", authStatus);
  // const { auth } = authStatus;
  const { auth } = true;

  return (
    <BrowserRouter>
      <Routes>
        {auth == false ? (
          <Route path="/" element={<Login />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
