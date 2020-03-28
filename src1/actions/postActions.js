import { GET_TODOS, SET_LOADING, TODO_ERROR } from "./types";

//Get Posts from Server
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

// Set Loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
