import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateTodo } from "../../actions/todoActions";
import M from "materialize-css/dist/js/materialize.min.js";

const EditPostModal = ({current, updateTodo}) => {
  const [message, setMessage] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(()=>{
    if(current){
      setMessage(current.message)
      setFavorite(current.favorite)
      setUsername(current.username)
    }
  }, [current])



  const onsubmit = () => {
    if (message === "" || username === "") {
      M.toast({ html: "Please enter a message and select a user" });
    } else {
      const updTodo ={
        id: current.id,
        message,
        favorite,
        username,
        date: new Date()
      }
      updateTodo(updTodo)
      M.toast({html:`Post Updated by ${username}`})
      //Clear Fields
      setMessage("");
      setUsername("");
      setFavorite(false);
    }
  };

  return (
    <div id="edit-post-modal" className="modal">
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

EditPostModal.propTypes=({
  current: PropTypes.object,
  updateTodo:PropTypes.func.isRequired,
})

const mapStateToProps= state=>({
  current: state.todo.current
})

export default connect(mapStateToProps, {updateTodo}) (EditPostModal);
