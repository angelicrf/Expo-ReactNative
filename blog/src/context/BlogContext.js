import React, { useState, useReducer } from "react";
import createDataContext from "./createDataContext";
import jsonserver from "../api/jsonserver";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_Blog_Post":
      return action.payload;
    case "add_Blog_Post":
      return [
        ...state,
        {
          title: action.payload.title,
          content: action.payload.content,
          id: Math.floor(Math.random() * 99999)
        }
      ];
    case "delete_Blog_Post":
      return state.filter(blogPost => blogPost.id != action.payload);
    case "edit_Blog_Post":
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};
const getBlogPost = dispatch => {
  return async () => {
    const response = await jsonserver.get("/blogpost");

    dispatch({
      payload: response.data,
      type: "get_Blog_Post"
    });
  };
};
const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({
      type: "add_Blog_Post",
      payload: { title: title, content: content }
    });
    if (callback) {
      callback();
    }
  };
};
const EditBlogPost = dispatch => {
  return (id, title, content, callBack) => {
    dispatch({
      type: "edit_Blog_Post",
      payload: {
        id: id,
        title: title,
        content: content
      }
    });
    if (callBack) {
      callBack();
    }
  };
};
const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: "delete_Blog_Post", payload: id });
  };
};
//export const BlogProvider = ({ children }) => {
//  const [blogPost, setBlogPost] = useReducer(blogReducer, []);

//  //const [blogPost, setBlogPost] = useState([]);
//  //const addBlogPosts = () => {
//  //  setBlogPost([
//  //    ...blogPost,
//  //    {
//  //      title: `Blog Post # ${blogPost.length + 1}`,
//  //      id: `${blogPost.length + 1}`
//  //    }
//  //  ]);
//  //};

//  return (
//    <BlogContext.Provider value={{ data: blogPost, addBlogPost }}>
//      {children}
//    </BlogContext.Provider>
//  );
//};
//export default BlogContext;
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, EditBlogPost, getBlogPost },
  []
);
