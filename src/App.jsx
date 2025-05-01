import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Support from "./pages/Support";
import Story from "./pages/Story";
import Blog from "./pages/Blog";
import Features from "./pages/Features";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Medications from "./pages/Medications";
import Schedule from "./pages/Schedule";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/support" element={<Support />} />
      <Route path="/story" element={<Story />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/features" element={<Features />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard/:id" element={<Dashboard />} />
      <Route path="/medications/:id" element={<Medications />} />
      <Route path="/schedule/:id" element={<Schedule />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/settings/:id" element={<Settings />} />
    </Routes>
  );
}

export default App;
