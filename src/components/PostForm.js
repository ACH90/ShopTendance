import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, getPosts } from "../actions/post.action";

const PostForm = () => {
  const form = useRef();
  const user = useSelector((state) => state.userReducer)
  const dispatch = useDispatch();

  const handleForm = async(e) => {
    e.preventDefault();

    console.log(form);

    const selectedCategories = [
      form.current[5].value, // Sexe
      form.current[6].value, // Catégorie principale
    ];

    const postData = {

      title: form.current[0].value,
      description: form.current[1].value,
      imageUrl: form.current[2].value,
      salePrice: form.current[3].value,
      basePrice: form.current[4].value,
      categories: selectedCategories, // Tableau de catégories
  }



  await dispatch(addPosts(postData));
  dispatch(getPosts());
  form.current.reset();

};

  return (
    <div className="form-container">
      <form ref={form} onSubmit={(e) => handleForm(e)}>
        <input type="text" placeholder="Titre de l'article" />
        <input type="text" placeholder="Description de l'article" />
        <input type="url" placeholder="url de l'image" />
        <input type="number" placeholder="Prix de l'article" />
        <input type="number" placeholder="Prix conseillé de l'article" />
        <select name="pets" id="pet-select">
          <option value="">Sexe</option>
          <option value="Femme">Femme</option>
          <option value="Homme">Homme</option>
          <option value="Unisex">Unisex</option>
        </select>
        <select name="pets" id="pet-select" placeholder="Catégories">
          <option value="">Catégorie</option>
          <option value="Vetements">Vetements</option>
          <option value="Chaussures">Chaussures</option>
          <option value="Accessoires">Accessoires</option>
        </select>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
