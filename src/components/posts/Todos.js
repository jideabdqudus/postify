import React, { useEffect } from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import Preloader from "../layout/Preloader";
import {getTodos} from "../../actions/todoActions"

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
  todos: state.todo.todos,
  loading: state.todo.loading
});

export default connect(mapStateToProps, {getTodos})(Todos);
