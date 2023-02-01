import React, {useState} from 'react';
import './styles/App.css';
import MyButton from "./components/UI/button/myButton";
import MyInput from "./components/UI/input/MyInput";
import ItemBoard from "./components/ItemBoard";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {useDispatch, useSelector} from "react-redux";
import BoxItem from "./components/BoxItem";
import CreateBoard from "./components/CreateBoard";


function App() {

    const items = useSelector(state => state.ITEMS)








  return (
    <div className="App">

        <CreateBoard></CreateBoard>
        <BoxItem items={items}></BoxItem>



        {/*

        <div>
            {items.map(item =>
                <div>{item.text}</div>)}
        </div>
        */}

    </div>
  );
}

export default App;
