import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Item from "../Item/Item";
import { deleteBoard, dragBoard } from "../../store/action";

import classes from "./BoxItem.module.css";

const BoxItem = ({ items }) => {
  const [currentCard, setCurrentCard] = useState(null);

  function dragStartHandler(e, card) {
    setCurrentCard(card);
  }

  function dragEndHandler(e) {}

  function dragOverHandler(e) {
    e.preventDefault();
  }

  const dispatch = useDispatch();

  function dropHandler(e, card) {
    e.preventDefault();
    const currentIndex = items.indexOf(currentCard);
    const dropIndex = items.indexOf(card);
    items.splice(currentIndex, 1);
    items.splice(dropIndex, 0, currentCard);
    dispatch(
      dragBoard(
        items.map((c) => {
          return c;
        })
      )
    );
  }

  const removeBoard = (card) => {
    dispatch(deleteBoard(card.id));
  };

  return (
    <div className={classes.board}>
      {items.map((card) => (
        <Item
          dragStartHandler={(e) => dragStartHandler(e, card)}
          dragEndHandler={(e) => dragEndHandler(e)}
          dragOverHandler={(e) => dragOverHandler(e)}
          dropHandler={(e) => dropHandler(e, card)}
          text={card.text}
          tasks={card.tasks.map((task) => {
            return <div className={classes.task}>{task.title}</div>;
          })}
          removeBoard={() => removeBoard(card)}
          id={card.id}
        />
      ))}
    </div>
  );
};

export default BoxItem;
