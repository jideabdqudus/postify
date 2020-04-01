import React, { useEffect } from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import Preloader from "../layout/Preloader";
import { getTodos } from "../../actions/todoActions";

const Todos = ({ todos, loading, getTodos }) => {
  useEffect(() => {
    getTodos();
    //eslint-disable-next-line
  }, []);

  if (loading || todos === null) {
    return <Preloader />;
  }

  return (
    <div>
      <div className="row">
        <div className="col s12 m12">
          <div className="card">
            <div className="card-image">
              <img
                className="activator waves-effect waves-block waves-light"
                src={require("./header.jpg")}
                style={{ maxWidth: "100%", maxheight: "100%" }}
              />

              <a className="avatar large btn-floating halfway-fab waves-effect waves-light left">
                <img
                  src={require("./Q.jpg")}
                  style={{}}
                  className="circle large"
                />
              </a>
              <a
                href="#add-post-modal"
                className="btn-floating modal-trigger halfway-fab waves-effect waves-light red"
              >
                <i className="material-icons">add</i>
              </a>
            </div>
            <div className="card-content activator waves-effect waves-block">
              <b style={{ fontSize: "20px" }}>Qudusini</b>
              <p style={{ fontSize: "17px" }}>@jideabdqudus</p>
              <p>
                I often use IF statements and can google better than the average
                human. (MERN) #Software #Dev. I love building apps with
                API-centric backends, developing UI/UX and writing technical
                reports.
              </p>
              <p className="blue-text" style={{ fontSize: "13px" }}>
                <i className="material-icons">my_location</i> Lagos, Nigeria.
              </p>
              <p className="blue-text" style={{ fontSize: "13px" }}>
                <i className="material-icons">insert_link</i>{" "}
                <a>www.medium.com/@abdulqudusao</a>
              </p>
              <b>
                Posts: {todos.length} {"   "}{" "}
              </b>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Bio <i className="material-icons right">close</i>
              </span>
              <p>
                {" "}
                I often use IF statements and can google better than the average
                human. (MERN) #Software #Dev. I love building apps with
                API-centric backends, developing UI/UX and writing technical
                reports.
              </p>
              <br/><p className="grey-text">Twitter is just like Reddit, Reddit is just like Quora, guess what's like the 3 of them?</p>
            </div>
          </div>
        </div>
      </div>
      {!loading && todos.length === 0 ? (
        <p className="center">No posts</p>
      ) : (
        todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
  loading: state.todo.loading
});

export default connect(mapStateToProps, { getTodos })(Todos);
