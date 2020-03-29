import { GET_TODOS, SET_LOADING, TODO_ERROR, ADD_TODOS } from "./types";

//Get Todos from Server
export const getTodos = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/todos");
    const data = await res.json();

    dispatch({
      type: GET_TODOS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TODO_ERROR,
      payload: error.response.data
    });
  }
};

//Add Todos to Server
export const addTodos = (todos) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/todos", {
      method: "POST",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    dispatch({
      type: ADD_TODOS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TODO_ERROR,
      payload: error.response.data
    });
  }
};

// Set Loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
