import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Task from "../Task/Task";
import { deleteTask, sortTask } from "../../store/action";

import classes from "./TasksBoard.module.css";

const TasksBoard = () => {
  const boardId = useSelector((state) => state.idReducer.id);

  const items = useSelector((state) =>
    state.boardReducer.ITEMS.filter(
      (item) => Number(item.id) === Number(boardId)
    ).map((item) =>
      item.tasks.map((task) => {
        return task;
      })
    )
  );
  const ITEMS = useSelector((state) => state.boardReducer.ITEMS);
  const dispatch = useDispatch();
  const removeTask = (task) => {
    dispatch(deleteTask({ id: boardId, someId: task.id }));
  };

  const [currentTask, setCurrentTask] = useState(null);

  function dragStartHandler(e, task) {
    setCurrentTask(task);
  }
  function dragEndHandler(e) {}

  function dragOverHandler(e) {
    e.preventDefault();
  }

  function dropHandler(e, task) {
    e.preventDefault();
    const currentIndex = items[0].indexOf(currentTask);
    const dropIndex = items[0].indexOf(task);
    items[0].splice(currentIndex, 1);
    items[0].splice(dropIndex, 0, currentTask);
    const sorted = items[0].map((t) => {
      return t;
    });
    dispatch(sortTask({ id: boardId, some: sorted }));
  }

  return (
    <div>
      {ITEMS.filter((item) => item.id == boardId).map((item) => (
        <div className={classes.container}>
          {item.tasks.map((task) => (
            <Task
              dragStartHandler={(e) => dragStartHandler(e, task)}
              dragEndHandler={(e) => dragEndHandler(e)}
              dropHandler={(e) => dropHandler(e, task)}
              dragOverHandler={(e) => dragOverHandler(e)}
              removeTask={() => removeTask(task)}
              title={task.title}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TasksBoard;
