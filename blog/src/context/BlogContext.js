import React, { useState, useReducer } from "react";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_Blog_Post":
      return [
        ...state,
        {
          title: `Blog Post # ${state.length + 1}`,
          id: Math.floor(Math.random() * 99999)
        }
      ];
    case "delete_Blog_Post":
      return state.filter(blogPost => blogPost.id != action.payload);
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return () => {
    dispatch({ type: "add_Blog_Post" });
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
  { addBlogPost, deleteBlogPost },
  []
);
