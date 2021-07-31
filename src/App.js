import React, { Component } from "react";
import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "../src/Redux/Reducers/index";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./assets/style.css";
const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
        applyMiddleware(ReduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    : compose(applyMiddleware(ReduxThunk))
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          {/* <Home /> */}
          <Route path="/" exact component={Home} />
        </BrowserRouter>
      </Provider>
    );
  }
}
