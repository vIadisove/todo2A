import React from 'react';
import MyButton from "./UI/button/myButton";
import myButton from "./UI/button/myButton";

const Item = ({text, dragStartHandler, dragEndHandler, dragOverHandler, dropHandler}) => {



    return (
        <div
            onDragStart={dragStartHandler}
            onDragLeave={dragEndHandler}
            onDragEnd={dragEndHandler}
            onDragOver={dragOverHandler}
            onDrop={dropHandler}
            className={"item"}
            draggable={true}>
            <div>{text}</div>
            <div className={"tasks"}>задачи</div>
            <div className={myButton}><MyButton>Удалить</MyButton></div>
        </div>
    );
};

export default Item;