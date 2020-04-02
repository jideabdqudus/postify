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
        <div className="card darken-1">
          <div className="card-content black-text">
          <div>  
          <img
              src={require("./Q.jpg")}
              style={{}}
              className="circle  btn-floating"
            />
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              {"   "}
              {todo.username}{" "}
              <span
                style={{ fontSize: "14px", fontWeight: "normal" }}
                className="grey-text right"
              >
                @{todo.username}
              </span>
            </span>
            </div>
            <hr/>
            <span className="card-title"> </span>
            <p>{todo.message}</p>
            <p className="grey-text">
            <Moment className="grey-text right" format="MMMM Do YYYY">
              {todo.date}
            </Moment>
          </p>
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
