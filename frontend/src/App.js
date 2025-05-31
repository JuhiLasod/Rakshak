import React from "react";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ResetPass from "./components/ResetPass";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/reset-password" element={<ResetPass/>}/>
    </Routes>
  );
}

export default App;
