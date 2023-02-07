import React, {useState} from 'react';
import MyButton from "../button/myButton";
import {Modal, Typography} from "@mui/material";
import CreateBoard from "../../CreateBoard/CreateBoard";
import classes from "./myModal.module.css"

const MyModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className={classes.container}>
            <MyButton onClick={handleOpen}>Создать доску</MyButton>
            <Modal open={open}
                   onClose={handleClose}
                   className ={classes.modalWindow}
            >

                <div className={classes.createBoard}>
                    <div className={classes.text}>
                        <Typography variant="h5">
                            Укажите название новой доски
                        </Typography>
                    </div>
                    <CreateBoard></CreateBoard>
                </div>


            </Modal>

            
        </div>
    );
};

export default MyModal;