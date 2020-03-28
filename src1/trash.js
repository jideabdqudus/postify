////////////REDUCERS.JS

import { INCREMENT, DECREMENT } from "./constants";

// Counter Reducer
export function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload.num;
    case DECREMENT:
      return state - action.payload.num;
    default:
      return state;
  }
}

/////////////////////////////////////////////////

//////////STORE.JS

import { createStore } from "redux";
import { ADD_ACTION } from "./actions";
import { counterReducer } from "./reducers";

let store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));

export default store;

//////////////////////////////////////////////////////////////////

////////ACTIONS.JS

import { INCREMENT } from "./constants";

// export const ADD_ACTION = {
//     type: INCREMENT,
//     payload: {num: 2}
// }

export function ADD_ACTION(num) {
  return {
    type: INCREMENT,
    payload: { num: num }
  };
}

////////////////////////////////////////////////////////////

///////CONSTANTS.JS

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// export default;

//////////////////////////////////////////////////////

/////////////////APP.JS

import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value, Incrememt } = this.props;
    return (
      <div className="App">
        <h1>{this.props.value}</h1>
        <button onClick={() => this.Incrememt}>Add 20</button>
      </div>
    );
  }
}

export default App;

//////////////////////////////////////////////////////////
