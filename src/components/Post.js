import React, { useState } from "react";
import Like from "./Like";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "./Utils";
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
        <img
          src="./icons/edit.svg"
          className="edit"
          alt="edit"
          onClick={() => setEditToggle(!editToggle)}
        />
        <img
          src="./icons/delete.svg"
          className="delete"
          alt="delete"
          onClick={() => dispatch(deletePost(post.id))}
        />
        

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
