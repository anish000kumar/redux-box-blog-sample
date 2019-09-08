const MODULE = "POSTS/";

// actions
export const ACTIONS = {
  FETCH_ALL_POSTS: `${MODULE}FETCH_ALL_POSTS`,
  SET_ALL_POSTS: `${MODULE}SET_ALL_POSTS`,
  FETCH_POST_DETAILS: `${MODULE}FETCH_POST_DETAILS`,
  SET_POST_DETAILS: `${MODULE}SET_POST_DETAILS`,
  FETCH_POST_COMMENTS: `${MODULE}FETCH_POST_COMMENTS`,
  SET_POST_COMMENTS: `${MODULE}SET_POST_COMMENTS`
};

// dispatchers
export const fetchAllPosts = () => ({
  type: ACTIONS.FETCH_ALL_POSTS
});

export const setAllPosts = posts => ({
  type: ACTIONS.SET_ALL_POSTS,
  posts
});

export const fetchPostDetails = postId => ({
  type: ACTIONS.FETCH_POST_DETAILS,
  postId
});

export const setPostDetails = postDetails => ({
  type: ACTIONS.SET_POST_DETAILS,
  postDetails
});

export const fetchPostComments = postId => ({
  type: ACTIONS.FETCH_POST_COMMENTS,
  postId
});

export const setPostComments = comments => ({
  type: ACTIONS.SET_POST_COMMENTS,
  comments
});
