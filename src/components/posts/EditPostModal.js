import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const EditPostModal = () => {
  const [message, setMessage] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [user, setUser] = useState("");

  const onsubmit = () => {
    if (message ==="" || user === ""){
        M.toast({html: "Please enter a message and select a user"})
    }else{
        console.log(message, favorite)
    }
  };

  return (
    <div id="edit-post-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>What's on your mind</h4>
      </div>
      <div className="row">
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
      <div className="row">
        <div className="input-field">
          <select
            name="tech"
            className="browser-default"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          >
            <option value="" disabled>
              Select User
            </option>
          </select>
        </div>
      </div>
      <div className="row">
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
              <span>Favorite</span>
            </label>
          </p>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          className="modal-close waves-effect blue waves-light btn"
          onClick={onsubmit}
        >
          Post Me
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%"
};

export default EditPostModal;
