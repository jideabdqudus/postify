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
      <div className="col s12 m12">
      
  <div class="card">
  <div class="card-content">
    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
  </div>
  <div class="card-tabs">
    <ul class="tabs tabs-fixed-width">
      <li class="tab"><a href="#test4">Test 1</a></li>
      <li class="tab"><a class="active" href="#test5">Test 2</a></li>
      <li class="tab"><a href="#test6">Test 3</a></li>
    </ul>
  </div>
  <div class="card-content grey lighten-4">
    <div id="test4">Test 1</div>
    <div id="test5">Test 2</div>
    <div id="test6">Test 3</div>
  </div>
</div>  
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
