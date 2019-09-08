import postsModule from "./index";

export const getPosts = postsModule.select(state => state.posts);
export const getSelectedPost = postsModule.select(state => state.selectedPost);
export const getPostComments = postsModule.select(state => state.comments);
