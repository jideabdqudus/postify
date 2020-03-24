import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const TodoItem = ({ todo }) => {
  return (
    <div class="row">
      <div class="col s6 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <p className="grey-text">
              Post {todo.id} by{" "}
              <Moment className="grey-text right" format="MMMM Do YYYY">
                {todo.date}
              </Moment>
            </p>
            <span class="card-title">{todo.username}</span>
            <p>{todo.message}</p>
          </div>
          <div class="card-action">
            <a href="#">
              <i className="material-icons grey-text">delete</i>
            </a>
            <a href="#edit-post-modal">
              <i className="material-icons blue-text modal-trigger">edit</i>
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
  todo: PropTypes.object.isRequired
};

export default TodoItem;

// <li className="collection-item">
// <div>
//   <a href="#edit-todo-modal" component="button" variant="body2">
//     <h5>{todo.message}</h5>
//   </a>
//   <br />
//   <span className="grey-text">
//     <span className="black-text">ID #{todo.id}</span> last updated by{" "}
//     <span className="black-text">{todo.username}</span> on{" "}
//     <Moment format="MMMM Do YYYY, h:mm:ss a">{todo.date}</Moment>
//   </span>
//   <br/>
//   <span>
//   {todo.favorite? <i class="material-icons">mood</i>:''}
//   <i className="material-icons grey-text">delete</i>
//   </span>
//   <a href="#!" className="secondary-content">

//   </a>
// </div>
// </li>
