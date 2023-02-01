import React, {useCallback, useState} from 'react';
import Item from "./Item";
import update from "immutability-helper";
import {useDispatch} from "react-redux";

const BoxItem = ({items}) => {
    const dispatch = useDispatch();
    const [cards, setCards] = useState(items)

    const moveCard = useCallback((dragIndex, hoverIndex) => {


        setCards((prevCards) =>
            update(prevCards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevCards[dragIndex]],
                ],
            }),
        )
            //dispatch({type:"DRAG", payload:cards})
    }

    , [])



    const renderCard = useCallback((card, index) => {
        return (
            <Item
                key={card.id}
                index={index}
                id={card.id}
                text={card.text}
                moveCard={moveCard}
            />
        )
    }, [])



    return (
        <div className={"board"}>
            {items.map((card, i) => renderCard(card, i))}
            {/*{cards.map((item) =>
                <Item text={item.text}/>)}*/}
        </div>
    );
};

export default BoxItem;

