import React from "react";
import { useEffect } from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ResetPass from "./components/ResetPass";
import Home from "./components/Home";
import MyPeople from "./components/MyPeople";
import PrivateRoute from "./components/PrivateRoute";
import AboutUs from "./components/AboutUs";
import Layout from "./components/Layout";
// import Footer from "./components/Footer";
function App() {
  const navigate=useNavigate();
  useEffect(()=>{
    const token=localStorage.getItem("token");
    if(token)
    {
      navigate("/home");
    }
  },[navigate]);
  return (
    <Routes>
      <Route path="/" element={<Layout><Dashboard/></Layout>}/>
      {/* <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>}/> */}
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/reset-password" element={<ResetPass/>}/>
      <Route path="/about-us" element={<Layout><AboutUs/></Layout>}/>
      <Route path="/home" element={<Layout><PrivateRoute><Home/></PrivateRoute></Layout>}/>
      <Route path="/my-people" element={<MyPeople/>}/>
      {/* <Route path="/footer" element={<Footer/>}/> */}
    </Routes>
  );
}

export default App;
