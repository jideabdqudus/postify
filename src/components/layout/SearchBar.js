import React, { useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchTodos } from "../../actions/todoActions";

const SearchBar = ({ searchTodos }) => {
  const text = useRef("");
  const onChange = (e) => {
    searchTodos(text.current.value);
  };
  return (
    <div className="container-fluid col s2 m2 l2 red darken-3">
      <div className="navbar-fixed">
        <nav style={{ marginBottom: "30px" }} className="red darken-3">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo" style={{ paddingLeft: "10px" }}>
              <img
                src="./waves.png"
                style={{ height: "50px", width: "50px" }}
              />
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a>
                  <i className="material-icons">account_circle</i>
                </a>
              </li>
              <li>
                <a>
                  <i className="material-icons">notifications_active</i>
                </a>
              </li>
              <li>
                <a>
                  <i className="material-icons disabled">flash_off</i>
                </a>
              </li>
              <li>
                <div className="input-field">
                  <input
                    id="search"
                    onChange={onChange}
                    ref={text}
                    type="search"
                  />
                  <label className="label-icon" htmlFor="search">
                    <i className="material-icons left">search</i>
                  </label>
                  <i className="material-icons">close</i>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  searchTodos: PropTypes.func.isRequired
};

export default connect(null, { searchTodos })(SearchBar);

