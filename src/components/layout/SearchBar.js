import React, { useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchTodos } from "../../actions/todoActions";

const SearchBar = ({ searchTodos }) => {
  // const text = useRef("");
  // const onChange = (e) => {
  //   searchTodos(text.current.value);
  // };
  return (
    <div className="container-fluid col s2 m2 l2">
      <img src="./waves.png" style={{ height: "50px", width: "50px" }} />
    </div>
  );
};

// SearchBar.propTypes = {
//   searchTodos: PropTypes.func.isRequired
// };

export default connect(null, { searchTodos })(SearchBar);




// <div className="navbar-fixed">
// <nav style={{ marginBottom: "30px" }} className="red">
//   <div className="nav-wrapper">
//     <a href="#!" className="brand-logo" style={{ paddingLeft: "10px" }}>
//       <img src="./waves.png" style={{ height: "50px", width: "50px" }} />
//     </a>
//     <form className="right hide-on-med-and-down">
//       <div className="input-field">
//         <input
//           id="search"
//           placeholder="Search Posts"
//           onChange={onChange}
//           ref={text}
//           type="search"
//         />
//         <label className="label-icon" htmlFor="search">
//           <i className="material-icons left">search</i>
//         </label>
//         <i className="material-icons">close</i>
//       </div>
//     </form>
//   </div>
// </nav>
// </div>