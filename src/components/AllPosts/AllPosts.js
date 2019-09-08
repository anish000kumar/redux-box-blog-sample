import React from "react";
import "./AllPosts.css";
import { connectStore } from "redux-box";
import { fetchAllPosts } from "../../store/modules/posts/dispatchers";
import { getPosts } from "../../store/modules/posts/selectors";

@connectStore({
  mapSelectors: {
    getPosts
  },
  mapDispatchers: {
    fetchAllPosts
  }
})
class AllPosts extends React.Component {
  render() {
    return <div>AllPosts</div>;
  }
}

export default AllPosts;
