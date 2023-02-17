import {
  ADD_BOARD,
  ADD_TASK,
  DELETE_BOARD,
  DELETE_TASK,
  DRAG,
  SORT_TASK,
} from "./action";

const defaultState = {
  ITEMS: [
    {
      id: 76432,
      text: "Board1",
      tasks: [
        { id: 342, title: "Задача номер 1" },
        { id: 343, title: "Задача номер 2" },
      ],
    },
    { id: 892375, text: "Board2", tasks: [] },
    { id: 821375, text: "Board3", tasks: [] },
  ],
};

export const boardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DRAG:
      return { ...state, ITEMS: action.payload };
    case ADD_BOARD:
      return { ...state, ITEMS: [...state.ITEMS, action.payload] };
    case DELETE_BOARD:
      return {
        ...state,
        ITEMS: state.ITEMS.filter((ITEM) => ITEM.id !== action.payload),
      };
    case ADD_TASK:
      const itemId = action.payload.id;
      const task = action.payload.some;
      return {
        ...state,
        ITEMS: state.ITEMS.map((item) =>
          item.id == itemId ? { ...item, tasks: [...item.tasks, task] } : item
        ),
      };
    case DELETE_TASK:
      const boardId = action.payload.id;
      const taskId = action.payload.someId;
      return {
        ...state,
        ITEMS: state.ITEMS.map((item) =>
          item.id == boardId
            ? {
                ...item,
                tasks: item.tasks.filter((task) => task.id !== taskId),
              }
            : item
        ),
      };

    case SORT_TASK:
      return {
        ...state,
        ITEMS: state.ITEMS.map((item) =>
          item.id == action.payload.id
            ? { ...item, tasks: action.payload.some }
            : item
        ),
      };
    default:
      return state;
  }
};
