import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import M from "materialize-css/dist/js/materialize.min.js";
import { deleteTodos, setCurrent } from "../../actions/todoActions";
import { connect } from "react-redux";

const TodoItem = ({ todo, deleteTodos, setCurrent }) => {
  const onDelete = () => {
    deleteTodos(todo.id);
    M.toast({ html: "Todo Deleted" });
  };
  return (
    <div className="row">
      <div className="col s6 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <p className="grey-text">
              Post {todo.id} by{" "}
              <Moment className="grey-text right" format="MMMM Do YYYY">
                {todo.date}
              </Moment>
            </p>
            <span className="card-title">{todo.username}</span>
            <p>{todo.message}</p>
          </div>
          <div className="card-action">
            <a href="#!">
              <i className="material-icons grey-text" onClick={onDelete}>
                delete
              </i>
            </a>
            <a
              href="#edit-post-modal"
              className="modal-trigger"
              onClick={() => setCurrent(todo)}
            >
              <i className="material-icons blue-text">edit</i>
            </a>
            {todo.favorite ? (
              <i className="material-icons right blue-text">mood</i>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodos: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default connect(null, { deleteTodos, setCurrent })(TodoItem);