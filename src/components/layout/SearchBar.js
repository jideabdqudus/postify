import React from "react";

const SearchBar = () => {
  return (
    <nav 
    style={{ marginBottom: "30px" }}
    className="blue">
    <div className="nav-wrapper">
      <a href="#!" className="brand-logo" style={{paddingLeft:"10px"}}>POSTIFY</a>
      <form className="right hide-on-med-and-down">
        <div className="input-field">
          <input id="search" type="search"/>
          <label className="label-icon" htmlFor="search"><i className="material-icons left">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
  );
};

export default SearchBar;
