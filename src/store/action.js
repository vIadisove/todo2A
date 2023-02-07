export const ADD_BOARD = "ADD_BOARD";
export const DRAG = "DRAG";
export const DELETE_BOARD = "DELETE_BOARD";

export const dragBoard = (payload) => ({type: DRAG, payload})
export const addBoard = (payload) => ({type: ADD_BOARD, payload})
export const deleteBoard = (payload) => ({type: DELETE_BOARD, payload})