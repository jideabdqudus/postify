import React from "react";

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-post-modal"
        className="btn-floating btn-large btn-darken-2 modal-trigger"
      >
        <i className="large material-icons">mode_edit</i>
      </a>
      <ul>
        <li>
          <a
            href="#tech-list-modal"
            className="btn-floating green modal-trigger"
          >
            <i className="material-icons">person</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;



