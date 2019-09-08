import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import AllPosts from "./components/AllPosts/AllPosts";
import UserPosts from "./components/UserPosts/UserPosts";
import PostDetails from "./components/PostDetails/PostDetails";

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={AllPosts} />
          <Route path="/user/:userId" component={UserPosts} />
          <Route path="/post/:postId" component={PostDetails} />
        </Switch>
      </Router>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
