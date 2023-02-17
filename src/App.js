import React, { useState } from "react";
import "./styles/App.css";
import { useSelector } from "react-redux";
import BoxItem from "./components/BoxItem/BoxItem";
import MyModal from "./components/UI/modal/myModal";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./Pages/Homepage";
import Tasks from "./Pages/Tasks/Tasks";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="Tasks" element={<Tasks />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
