import React, { useEffect } from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import Preloader from "../layout/Preloader";
import { getTodos } from "../../actions/todoActions";

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
        <div className="col s12 m12">
          <div className="card">
            <div className="card-image">
              <img
                className="activator waves-effect waves-block waves-light"
                src={require("./header.jpg")}
                style={{ maxWidth: "100%", maxheight: "100%" }}
              />

              <a className="avatar btn-floating halfway-fab waves-effect waves-light left">
                <img
                  src={require("./Q.jpg")}
                  style={{ height: "100px", width: "100px" }}
                  className="circle large"
                />
              </a>
              <a
                href="#add-post-modal"
                className="btn-floating modal-trigger halfway-fab waves-effect waves-light red"
              >
                <i className="material-icons">add</i>
              </a>
            </div>
            <div className="card-content">
              <p>Profile</p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Card Title <i className="material-icons right">close</i>
              </span>
              <p>Here is more information when clicked</p>
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
