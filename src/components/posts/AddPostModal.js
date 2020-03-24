import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddPostModal = () => {
  const [message, setMessage] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [user, setUser] = useState("");

  const onsubmit = () => {
    if (message === "" || user === "") {
      M.toast({ html: "Please enter a message and select a user" });
    } else {
      console.log(message, favorite);
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
            value={user}
            onChange={(e) => setUser(e.target.value)}
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

export default AddPostModal;
