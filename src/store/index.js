import { createStore } from "redux-box";
import postsModule from "./modules/posts";

export default createStore({
  posts: postsModule
});
