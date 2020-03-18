import React, {Fragment} from "react";
import "./App.css";
import 'materialize-css/dist/css/materialize.min.css';
import SearchBar from "./components/SearchBar";
import Todos from "./components/posts/Todos";


function App() {
  return (
    <Fragment>
      <SearchBar/>
      <Todos/>
    </Fragment>
  );
}

export default App;
