import React, { useEffect } from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import Preloader from "../layout/Preloader";
import PropTypes from "prop-types";
import { getTodos } from "../../actions/postActions";

const Todos = ({todo: { todos, loading}, getTodos }) => {
  useEffect(() => {
    getTodos();
    //eslint-disable-next-line
  }, []);

  if (loading || todos === null) {
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
      {!loading && todos && todos.length === 0 ? (
        <p className="center">No posts</p>
      ) : (
        todos.map((todo) => <TodoItem post={todo} key={todo.id} />)
      )}
    </div>
  );
};

Todos.propTypes = {
  todo: PropTypes.object.isRequired,
  getTodos: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  todo: state.todo
});

export default connect(mapStateToProps, { getTodos })(Todos);
