import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// Define the initial state of the store

// Define a reducer that handles actions and updates the state

// post initial
let postsInit = [
  {
    text: "Random text for test Before Get APi hit ",
    username: "Kartik Saini",
    tag: "Gurgoan,HR",
    menu: true,
    media:
      "https://images.pexels.com/photos/11113745/pexels-photo-11113745.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    comments: [{ username: "preet", userID: "xyz", commentID: "2134" }],
    reactions: [{ username: "preet", userID: "xyz", reactionID: "2134" }],
  },
];

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
const posts = (state = postsInit, action) => {
  switch (action.type) {
    case "update":
      return action.updatedArray;
    case "refresh":
      return [...state, action.obj];
    default:
      return state;
  }
};

const post_model = (state = false, action) => {
  switch (action.type) {
    case "open":
      console.log("login", state);
      return !state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: reducer,
  post_model,
  posts,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

// Create the store with the reducer and the thunk middleware

export default store;
