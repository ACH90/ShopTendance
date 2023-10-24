import React from "react";
import PostForm from "./components/PostForm";
// import User from "./components/User";
// import { useSelector } from "react-redux";
import "./styles/index.scss";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Hommes from "./components/Hommes";
import Femmes from "./components/Femmes";
import Ados from "./components/Ados";
import Enfants from "./components/Enfants";
import Bebes from "./components/Bebes";


const App = () => {

  // const posts = useSelector((state)=> state.postReducer);

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/PostForm" element={<PostForm/>}/>
        <Route path="/Hommes" element={<Hommes/>}/>
        <Route path="/Femmes" element={<Femmes/>}/>
        <Route path="/Ados" element={<Ados/>}/>
        <Route path="/Enfants" element={<Enfants/>}/>
        <Route path="/Bebes" element={<Bebes/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
};

export default App;
