import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddPostModal = () => {
  const [message, setMessage] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [user, setUser] = useState("");

    const onsubmit = () =>{
        if (message === "" || user === "") {
            M.toast({ html: "Please enter a message and tech" });
          }
        else{
            console.log(`This $message was written by $user`)
        }
    }


  return (
    <div id="add-post-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>What's on your mind</h4>
        <div className="row">
          <div className="input-field">
            <input type="text" name="message"></input>
            <label htmlFor="message" className="active">
              Post
            </label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="input-field">
          <select name="tech" className="browser-default">
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
              <input type="checkbox" className="filled-in" />
              <span>Favorite</span>
            </label>
          </p>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect blue waves-light btn" onClick={onsubmit}>
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%"
};

export default AddPostModal;
