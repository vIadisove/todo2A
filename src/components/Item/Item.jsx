import React from 'react';
import MyButton from "../UI/button/myButton";
import classes from "./Item.module.css";

const Item = ({text, dragStartHandler, dragEndHandler, dragOverHandler, dropHandler, removeBoard}) => {

    return (
        <div
            onDragStart={dragStartHandler}
            onDragLeave={dragEndHandler}
            onDragEnd={dragEndHandler}
            onDragOver={dragOverHandler}
            onDrop={dropHandler}
            className={classes.item}
            draggable={true}>

            <div>{text}</div>
            <div className={classes.tasks}>задачи</div>
            <div className={classes.button}><MyButton onClick={removeBoard}>Удалить</MyButton></div>
        </div>
    );
};

export default Item;