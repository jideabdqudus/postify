import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem"
import Preloader from "../Preloader";



const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    getTodos();
    //eslint-disable-next-line
  },[]);

  const getTodos = async () => {
    setLoading(true);
    const res = await fetch("/todos");
    const data = await res.json();

    setTodos(data);
    setLoading(false);
  };

  if (loading) {
   return <Preloader/>;
  }

  return (
          <ul className="collection with-header">
            <li className="collection-header">
              <h4 className="center">Posts</h4>
            </li>
              {!loading && todos.length === 0 ? (
                <p className="center">No posts</p>
              ) : (
                todos.map((todo) => <TodoItem todo={todo} key={todo.id}/>)
              )}
          </ul>
  );
}

export default Todos;