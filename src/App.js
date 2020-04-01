import React, { Fragment, useEffect } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layout/SearchBar";
import Todos from "./components/posts/Todos";
import AddPostModal from "./components/posts/AddPostModal";
import EditPostModal from "./components/posts/EditPostModal";
import { Provider } from "react-redux";
import store from "./store";
const App = () => {
  useEffect(() => {
    //Initialize Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddPostModal />
          <EditPostModal />
          <Todos />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
