import React from "react";
import { useEffect } from "react";
import {Route, Routes, useNavigate, useLocation} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ResetPass from "./components/ResetPass";
import Home from "./components/Home";
import MyPeople from "./components/MyPeople";
import PrivateRoute from "./components/PrivateRoute";
import AboutUs from "./components/AboutUs";
import Layout from "./components/Layout";
import LayoutIn from "./components/LayoutIn";
import Dash1 from "./components/Dash1";
import Donate from "./components/Donate";
import MyProfile from "./components/MyProfile";
// import Footer from "./components/Footer";
function App() {
  const navigate=useNavigate();
  const location = useLocation();
  const token=localStorage.getItem("token");
  useEffect(()=>{
    
    if(token &&  location.pathname === "/")
    {
      navigate("/home");
    }
  },[navigate, token, location.pathname]);
  return (
    <Routes>
      {/* <Route path="/" element={<Layout><Dashboard/></Layout>}/> */}
      <Route path="/" element={token ?<LayoutIn><PrivateRoute><Home/></PrivateRoute></LayoutIn> : <Layout><Dashboard/></Layout>}/>
      {/* <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>}/> */}
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/reset-password" element={<ResetPass/>}/>
      {/* <Route path="/about-us" element={<Layout><AboutUs/></Layout>}/> */}
      <Route path="/home" element={<LayoutIn><PrivateRoute><Home/></PrivateRoute></LayoutIn>}/>
      <Route path="/my-people" element={<MyPeople/>}/>
      <Route path="/dash1" element={<Dash1/>}/>
      <Route path="/about-us" element={token ?<LayoutIn><AboutUs/></LayoutIn> : <Layout><AboutUs/></Layout>}/>
      <Route path="/donate" element={token ?<LayoutIn><Donate/></LayoutIn> : <Layout><Donate/></Layout>}/>
      <Route path="/my-profile" element={<LayoutIn><MyProfile/></LayoutIn>}/>

      
    </Routes>
  );
}

export default App;
