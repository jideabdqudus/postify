import React from "react";
import { checkWithinContainer } from "materialize-css";

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-post-modal"
        className="btn-floating btn-large waves-effect waves-light red"
      >
        <i className="material-icons">mode_edit</i>
      </a>
      <ul>
        <li>
          <a
            hrerf="#user-list-modal"
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
