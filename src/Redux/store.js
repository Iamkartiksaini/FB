import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Define the initial state of the store

// Define a reducer that handles actions and updates the state
const reducer = (state = { auth: false }, action) => {
  switch (action.type) {
    case "login":
      console.log("login");
      return { status: true, data: action.data };
    case "log-out":
      return { auth: false };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: reducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

// Create the store with the reducer and the thunk middleware

export default store;
