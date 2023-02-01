import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";



/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 */


const defaultState = {
    ITEMS: [{id:1, text:"Board1"},
        {id:2, text:"Board2"},
        {id:3, text:"Board3"},]
}

const reducer = (state=defaultState, action) =>{
    switch (action.type) {
        case "DRAG":
            return {...state, ITEMS: [action.payload]}
        case "ADD_BOARD":
            return {...state, ITEMS: [...state.ITEMS, action.payload]}
        case "DELETE_BOARD":
            return {...state, ITEMS: state.ITEMS.filter(ITEM => ITEM.id !== action.payload)}
        default:
            return state
    }

}



const store = createStore(reducer)



ReactDOM.render (
    <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
            <App />
        </DndProvider>
    </Provider>,
    document.getElementById('root')
);

