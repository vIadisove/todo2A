export const ADD_BOARD = "ADD_BOARD";
export const DRAG = "DRAG";
export const DELETE_BOARD = "DELETE_BOARD";
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const SORT_TASK = "SORT_TASK";

export const UPDATE = "UPDATE";

export const dragBoard = (payload) => ({ type: DRAG, payload });
export const addBoard = (payload) => ({ type: ADD_BOARD, payload });
export const deleteBoard = (payload) => ({ type: DELETE_BOARD, payload });
export const addTask = (payload) => ({ type: ADD_TASK, payload });

export const deleteTask = (payload) => ({ type: DELETE_TASK, payload });
export const sortTask = (payload) => ({ type: SORT_TASK, payload });

export const updateCurrentId = (payload) => ({
  type: UPDATE,
  payload,
});
