import { createSagas } from "redux-box";
import { put } from "redux-saga/effects";
// avoIding usage of call effect for the sake of brevity, it should be used in real applications though
import {
  ACTIONS,
  setAllPosts,
  setPostComments,
  setPostDetails
} from "./dispatchers";
import {
  fetchAllPosts,
  fetchPostComments,
  fetchPostDetails
} from "./../../../api";

export default createSagas({
  *[ACTIONS.FETCH_ALL_POSTS](action) {
    try {
      yield put(setAllPosts({ loading: true }));
      const posts = yield fetchAllPosts();
      yield put(setAllPosts({ data: posts }));
    } catch (error) {
      yield put(setAllPosts({ error }));
    }
  },

  *[ACTIONS.FETCH_POST_DETAILS](action) {
    try {
      yield put(setPostDetails({ loading: true }));
      const postData = yield fetchPostDetails(action.postId);
      yield put(setPostDetails({ data: postData }));
    } catch (error) {
      yield put(setPostDetails({ error }));
    }
  },

  *[ACTIONS.FETCH_POST_COMMENTS](action) {
    try {
      yield put(setPostComments({ loading: true }));
      const comments = yield fetchPostComments(action.postId);
      yield put(setPostComments({ data: comments }));
    } catch (error) {
      yield put(setPostComments({ error }));
    }
  }
});
