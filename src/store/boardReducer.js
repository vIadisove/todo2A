import {ADD_BOARD, DELETE_BOARD, DRAG} from "./action";


const defaultState = {
    ITEMS: [{id:76432, text:"Board1"},
        {id:892375, text:"Board2"},
        {id:821375, text:"Board3"},]
}



export const boardReducer = (state=defaultState, action) =>{
    switch (action.type) {
        case DRAG:
            return {...state, ITEMS: action.payload}
        case ADD_BOARD:
            return {...state, ITEMS: [...state.ITEMS, action.payload]}
        case DELETE_BOARD:
            return {...state, ITEMS: state.ITEMS.filter(ITEM => ITEM.id !== action.payload)}
        default:
            return state
    }
}

