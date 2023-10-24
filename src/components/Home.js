import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "./Utils";
import Post from "./Post";



const Home = () => {

    const posts = useSelector((state)=> state.postReducer);

    return(
       
          <div className="post-container">
            {!isEmpty(posts) && posts.map((post, index) => (
              <Post post={post} key={index}/>
            ))}
          </div>
    )
  };
  
  export default Home;
  