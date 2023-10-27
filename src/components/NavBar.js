import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="NavBar">
      <Link to="/" className="home-link">
        ShopTendance
      </Link>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <Link to="/PostForm">PostForm</Link>
        <Link to="/Hommes">Homme</Link>
        <Link to="/Femmes">Femme</Link>
        <Link to="/Ados">Ado</Link>
        <Link to="/Enfants">Enfant</Link>
        <Link to="/Bebes">Bébé</Link>
      </div>
    </nav>
  );
}
