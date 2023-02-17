import React from "react";

import MyButton from "../UI/button/myButton";

import classes from "./Task.module.css";

const Task = ({
  title,
  removeTask,
  dragStartHandler,
  dropHandler,
  dragOverHandler,
  dragEndHandler,
}) => {
  return (
    <div
      className={classes.task}
      onDragStart={dragStartHandler}
      onDragLeave={dragEndHandler}
      onDragEnd={dragEndHandler}
      onDrop={dropHandler}
      onDragOver={dragOverHandler}
      draggable={true}
    >
      <div>{title}</div>
      <MyButton size={"small"} onClick={removeTask}>
        Удалить задачу
      </MyButton>
    </div>
  );
};

export default Task;
