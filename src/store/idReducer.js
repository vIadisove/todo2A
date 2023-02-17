import { UPDATE } from "./action";

const defaultState = {
  id: 0,
};

export const idReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE:
      return { ...state, id: action.payload };
    default:
      return state;
  }
};
