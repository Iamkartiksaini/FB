import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import store from "./Redux/store";
import { Provider } from "react-redux";
const App = React.lazy(() => import("./App"));
const Search = React.lazy(() => import("./Component/Search"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <App /> */}
    <Search />
  </Provider>
);
