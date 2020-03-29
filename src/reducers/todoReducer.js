import { GET_TODOS, SET_LOADING, TODO_ERROR, ADD_TODOS } from "../actions/types";

const initialState = {
  todos: null,
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
        loading: false
      };
    case ADD_TODOS:
      return{
        ...state,
        todos: [...state.todos, action.payload],
        loading:false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case TODO_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
