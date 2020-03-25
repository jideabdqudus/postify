import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import Preloader from "../layout/Preloader";

const Todos = ({ post }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTodos();
    //eslint-disable-next-line
  }, []);

  const getTodos = async () => {
    setLoading(true);
    const res = await fetch("/todos");
    const data = await res.json();

    setTodos(data);
    setLoading(false); 
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <div>
      <div class="row">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <span class="card-title"></span>
              <a
                href="#add-post-modal"
                class="btn-floating modal-trigger halfway-fab waves-effect waves-light red"
              >
                <i class="material-icons">add</i>
              </a>
            </div>
            <div class="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
      {!loading && todos.length === 0 ? (
        <p className="center">No posts</p>
      ) : (
        todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
  loading: state.post.loading
});

export default connect(mapStateToProps)(Todos);
