import React, { useEffect } from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import Preloader from "../layout/Preloader";
import { getTodos } from "../../actions/todoActions";
import HeaderImage from "./HeaderImage";

const Todos = ({ todos, loading, getTodos }) => {
  useEffect(() => {
    getTodos();
    //eslint-disable-next-line
  }, []);

  if (loading || todos === null) {
    return <Preloader />;
  }

  return (
    <div>
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image">
              <span className="card-title"></span>
              <a
                href="#add-post-modal"
                className="btn-floating modal-trigger halfway-fab waves-effect waves-light red"
              >
                <i className="material-icons">add</i>
              </a>
            </div>
            <div className="card-content">
              <img src="./i2.png" alt="Header Image" />
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
  todos: state.todo.todos,
  loading: state.todo.loading
});

export default connect(mapStateToProps, { getTodos })(Todos);
