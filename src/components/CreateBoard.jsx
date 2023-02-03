import React, {useState} from 'react';
import MyButton from "./UI/button/myButton";
import MyInput from "./UI/input/MyInput";
import {useDispatch, useSelector} from "react-redux";
import {addBoard} from "../store/action";


const CreateBoard = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const addNewBoard = (e) => {
        const newBoard = {
            id:Date.now(),
            text: title,
        }
        dispatch(addBoard(newBoard))
    }

    return (
        <form className={"form"}>
            <MyButton onClick={addNewBoard}>Создать доску</MyButton>
            <MyInput value={title} onChange={e=> setTitle(e.target.value)} type="text" placeholder ="Название доски" />
        </form>
    );
};

export default CreateBoard;