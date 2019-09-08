import { ACTIONS } from "./dispatchers";
import initialState from "./state";

export default {
  [ACTIONS.SET_ALL_POSTS](state, action) {
    state.posts = {
      ...initialState.posts,
      ...action.posts
    };
  },

  [ACTIONS.SET_POST_COMMENTS](state, action) {
    state.comments = {
      ...initialState.comments,
      ...action.comments
    };
  },

  [ACTIONS.SET_POST_DETAILS](state, action) {
    state.selectedPost = {
      ...initialState.selectedPost,
      ...action.postDetails
    };
  }
};
