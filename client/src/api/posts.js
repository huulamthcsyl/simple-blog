import axios from 'axios'

const URL = 'http://localhost:5000/posts';

export const getPosts = () => axios.get(URL);
export const createPost = (postData) => axios.post(URL, postData);
export const deletePost = (id) => axios.delete(`${URL}/${id}`);