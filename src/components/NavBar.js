import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="NavBar"> 
            {/* <Link to="/">Accueil</Link> */}
            <Link to="/Home">Accueil</Link>
            <Link to="/PostForm">PostForm</Link>
            <Link to="/Hommes">Homme</Link>
            <Link to="/Femmes">Femme</Link>
            <Link to="/Ados">Ado</Link>
            <Link to="/Enfants">Enfant</Link>
            <Link to="/Bebes">Bébé</Link>
        </nav>
    )}