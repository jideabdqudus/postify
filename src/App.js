import React, {Fragment, useEffect} from "react";
import "./App.css";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from "./components/SearchBar";
import Todos from "./components/posts/Todos";


const App =()=> {
  useEffect(()=>{
    //Initialize Materialize JS
    M.AutoInit()
  })
  return (
    <Fragment>
    <SearchBar/>
    <div className="container">
        <Todos/>
    </div>
    </Fragment>
  );
}

export default App;
