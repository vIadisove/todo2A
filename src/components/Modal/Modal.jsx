import React, { useState } from "react";
import { Typography } from "@mui/material";

import MyButton from "../UI/button/myButton";
import CreateBoard from "../CreateBoard/CreateBoard";
import MyModal from "../UI/modal/myModal";

import classes from "./Modal.module.css";

const Modal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={classes.container}>
      <MyButton onClick={handleOpen}>Создать доску</MyButton>
      <MyModal
        className={classes.modalWindow}
        open={open}
        handleClose={handleClose}
        children={
          <div className={classes.createBoard}>
            <div className={classes.text}>
              <Typography variant="h5">Укажите название новой доски</Typography>
            </div>
            <CreateBoard />
          </div>
        }
      />
    </div>
  );
};

export default Modal;
