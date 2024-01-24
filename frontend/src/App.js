import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import LoginLayout from "./components/loginLayout";
import HomeLayout from "./components/homeLayout";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import Records from "./pages/records";
import AdminLanding from "./pages/adminLanding";
import AdminDetailed from "./pages/adminDetailed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/*" element={<HomeLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="records" element={<Records />} />
          <Route path="adminLanding" element={<AdminLanding />} />
          <Route path="adminDetailed" element={<AdminDetailed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
