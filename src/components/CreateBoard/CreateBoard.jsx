import React, {useState} from 'react';
import MyButton from "../UI/button/myButton";
import MyInput from "../UI/input/MyInput";
import {useDispatch, useSelector} from "react-redux";
import {addBoard} from "../../store/action";
import classes from "./CreateBoard.module.css"


const CreateBoard = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const addNewBoard = (e) => {
        if(title === ""){
            alert ("Название не указано!")
        }
        else{
            const newBoard = {
                id:Date.now(),
                text: title,
            }
            dispatch(addBoard(newBoard))
            setTitle("")
        }

    }

    return (
        <form className={classes.form}>

            <MyButton className = {classes.element} onClick={addNewBoard}>Создать доску</MyButton>
            <MyInput className = {classes.element} value={title} onChange={e=> setTitle(e.target.value)} type="text" placeholder ="Название доски" />
        </form>
    );
};

export default CreateBoard;