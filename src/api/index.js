const BASE_URL = "https://jsonplaceholder.typicode.com";

const get = url => fetch(url).then(res => res.json());

export const fetchAllPosts = () => get(`${BASE_URL}/posts`);

export const fetchPostDetails = postId => get(`${BASE_URL}/posts/${postId}`);

export const fetchPostComments = postId =>
  get(`${BASE_URL}/posts/${postId}/comments`);

export const fetchPostsByUser = userId =>
  get(`${BASE_URL}/posts?userId=${userId}`);
