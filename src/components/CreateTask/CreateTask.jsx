import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTask } from "../../store/action";
import MyButton from "../UI/button/myButton";
import MyInput from "../UI/input/MyInput";

import classes from "./CreateTask.module.css";

const CreateTask = () => {
  const dispatch = useDispatch();
  const boardId = useSelector((state) => state.idReducer.id);

  const [title, setTitle] = useState("");
  const addNewBoard = () => {
    if (title === "") {
      alert("Название не указано!");
    } else {
      const newBoard = {
        id: Date.now(),
        title: title,
      };
      dispatch(addTask({ id: boardId, some: newBoard }));
      setTitle("");
    }
  };
  return (
    <form className={classes.form}>
      <MyButton className={classes.element} onClick={addNewBoard}>
        Создать задачу
      </MyButton>
      <MyInput
        className={classes.element}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Название задачи"
      />
    </form>
  );
};

export default CreateTask;
