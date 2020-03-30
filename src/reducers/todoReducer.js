import {
  GET_TODOS,
  SET_LOADING,
  TODO_ERROR,
  ADD_TODOS,
  DELETE_TODOS,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TODOS,
  SEARCH_TODOS
} from "../actions/types";

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
      return {
        ...state,
        todos: [...state.todos, action.payload],
        loading: false
      };
    case DELETE_TODOS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case UPDATE_TODOS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        )
      };
    case SEARCH_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
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
