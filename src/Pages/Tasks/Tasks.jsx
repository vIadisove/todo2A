import React from "react";

import TasksBoard from "../../components/TasksBoard/TasksBoard";
import CreateTask from "../../components/CreateTask/CreateTask";

import classes from "./Tasks.module.css";

const Tasks = () => {
  return (
    <div className={classes.tasks}>
      <CreateTask />
      <TasksBoard />
    </div>
  );
};

export default Tasks;
