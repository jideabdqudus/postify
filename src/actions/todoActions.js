import {
  GET_TODOS,
  SET_LOADING,
  TODO_ERROR,
  ADD_TODOS,
  DELETE_TODOS,
  UPDATE_TODOS,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_TODOS
} from "./types";

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
      payload: error.response.statusText
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
      payload: error.response.statusText
    });
  }
};

//Delete Todos to Server
export const deleteTodos = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/todos/$(id)`, {
      method: "DELETE"
    });
    dispatch({
      type: DELETE_TODOS,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: TODO_ERROR,
      payload: error.response.statusText
    });
  }
};

//Update todos on server
export const updateTodo = (todo) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/todos/${todo.id}`, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_TODOS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TODO_ERROR,
      payload: error.response.statusText
    });
  }
};

// Search todos from the server
export const searchTodos =(text) => async (dispatch) =>{
  try{
    setLoading();

    const res = await fetch (`/todos?q=${text}`);
    const data = await res.json()

    dispatch({
      type: SEARCH_TODOS,
      payload: data
    })
  } catch (error){
    dispatch({
      type: TODO_ERROR,
      payload: error.response.statusText
    })
  }
}


//Set current todo
export const setCurrent = (todo) => {
  return {
    type: SET_CURRENT,
    payload: todo
  };
};

//Clear current todo
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

// Set Loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
