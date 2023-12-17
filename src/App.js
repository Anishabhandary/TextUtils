import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2D2D2C";
      showAlert(": Dark Mode Enabled", "success");
      document.title = "TextUtils-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(": Light Mode Enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text To Analyse"
                  mode={mode}
                />
              }
            ></Route>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route exact path="/login" element={<Login mode={mode} />}></Route>
            <Route
              exact
              path="/register"
              element={<Registration mode={mode} showAlert={showAlert} />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
