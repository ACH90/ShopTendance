import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { isEmpty } from "./Utils";
import { deletePost, editPosts } from "../actions/post.action";

const Post = ({ post }) => {
  const [editToggle, setEditToggle] = useState(false);
  const user = useSelector((state) => state.userReducer)
  const [editContent, setEditContent] = useState(post.description)
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    const postData ={
      id : post.id,
      title : post.title,
      description : post.description,
      description: editContent,
      categories : post.categories,
      basePrice : post.basePrice,
      salePrice : post.salePrice,
      imageUrl : post.imageUrl,
    }

    dispatch(editPosts(postData));
    setEditToggle(false);
  }

  return (
    <div className="post-grid">
      <div className="product-card">
       <h2>{post.title}</h2>
       {editToggle ? (
        <form onSubmit={e => handleEdit(e)}>
          <textarea autoFocus={true} defaultValue={post.description} onChange={e => setEditContent(e.target.value)}></textarea>
          <input type="submit" value="Valider modification" />
        </form>
      ) : (
        <p className="modif">{post.content}</p>
      )} 
           <p>{post.description}</p>
           <p>{post.categories}</p>
       <img
        src={post.imageUrl} // Affichez l'image en utilisant post.imageUrl
        className="post-img"
        alt="img-post"
       />
          <p className="price">Prix :{post.salePrice}€</p>
        <p className="price discount-price">{post.basePrice}€</p>
        {/* {!isEmpty(user) && user.pseudo === post.author && ( */}
      <div className="edit-delete">
       
      <svg
          className="feather feather-edit"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setEditToggle(!editToggle)}
        >
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
        <svg
          className="feather feather-trash-2"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => dispatch(deletePost(post.id))}

        >
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <line x1="10" x2="10" y1="11" y2="17" />
          <line x1="14" x2="14" y1="11" y2="17" />
        </svg>
        

       {/* <div className="author">
        <h5>{post.author}</h5>
        <Like post={post} />
      </div>  */}
      </div>
  
      </div>
      
    </div>
  );
};

export default Post;
