import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const TodoItem = ({ todo }) => {
  return (
    <li className="collection-item">
      <div>
        <a href="#edit-todo-modal" component="button" variant="body2">
          <h5>{todo.message}</h5>
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{todo.id}</span> last updated by{" "}
          <span className="black-text">{todo.username}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{todo.date}</Moment>
        </span>
        <br/>
        <span>
        {todo.favorite? <i class="material-icons">mood</i>:''}
        </span>
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
