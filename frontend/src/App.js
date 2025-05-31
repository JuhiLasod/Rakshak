import React from "react";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;
