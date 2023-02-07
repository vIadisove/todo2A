import React, { useState } from "react";
import "./styles/App.css";
import { useDispatch, useSelector } from "react-redux";
import BoxItem from "./components/BoxItem/BoxItem";
import MyModal from "./components/UI/modal/myModal";
import Header from "./components/Header/Header";

function App() {
  const items = useSelector((state) => state.boardReducer.ITEMS);

  return (
    <div className="App">
      <Header></Header>
      <MyModal></MyModal>
      <BoxItem items={items}></BoxItem>
    </div>
  );
}

export default App;
