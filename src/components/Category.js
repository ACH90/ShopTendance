import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "./Utils";
import Post from "./Post";
import { useDispatch } from "react-redux";
import { getPosts } from "../actions/post.action";


function CategoryPost ({ category }) {

  const posts = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getPosts())
      }
      catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }
  , [dispatch]);

//   let categoryPost = Array.isArray(posts) ? posts : [];

  let categoryPost = posts.filter((post) => post.categories === category);  

  return (
    <div className="post-container">
      {!isEmpty(categoryPost) &&
        categoryPost.map((post, index) => <Post post={post} key={index} />)}
    </div>
  );
}

export default CategoryPost;
