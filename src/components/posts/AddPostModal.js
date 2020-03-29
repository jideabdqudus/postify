import React, { useState } from "react";
import {connect} from "react-redux"
import PropTypes from 'prop-types'
import {addTodos} from "../../actions/todoActions"
import M from "materialize-css/dist/js/materialize.min.js";

const AddPostModal = ({addTodos}) => {
  const [message, setMessage] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [username, setUsername] = useState("");

  const onsubmit = () => {
    if (message === "" || username === "") {
      M.toast({ html: "Please enter a message and select a user" });
    } else {
        const newTodo = {
          message,
          favorite,
          username,
          date: new Date()
        }
        addTodos(newTodo)

        M.toast({html: `Post by ${username}`})
        //Clear Fields
        setMessage("");
        setUsername("");
        setFavorite(false);
    }
  };

  return (
    
    <div id="add-post-modal" className="modal">
    <div className="modal-content">  
    <h5>What are you thinking of?</h5>
      <div>
        <div className="input-field">
          <input
            type="text"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <label htmlFor="message" className="active">
            Post
          </label>
        </div>
      </div>
      <div>
        <div className="input-field">
          <input
            type="text"
            name="user"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="message" className="active">
            Username
          </label>
        </div>
      </div>
      <div className="">
        <div className="input-field">
          <p>
            <label>
              <input
                type="checkbox"
                className="filled-in"
                value={favorite}
                checked={favorite}
                onChange={(e) => setFavorite(!favorite)}
              />
              <span>Favorite this Post</span>
            </label>
          </p>
        </div>
      </div>
      <div className="">
        <a
          href="#!"
          className="modal-close waves-effect blue waves-light btn"
          onClick={onsubmit}
        >
          Post Me
        </a>
      </div>
    </div>
    </div>
  );
};

AddPostModal.propTypes={
  addTodos:PropTypes.func.isRequired
}

export default connect(null, {addTodos}) (AddPostModal);
