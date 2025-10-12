import { useEffect, useState } from "react";
import "./css/header.css";
import React from "react";

function Header() {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const isLogged = localStorage.getItem("isLogged");
    
    setIsLogged(isLogged === "true");
  }, []);
  

  return (
    <header>
      <div className="logo">
        <h1 className="Title">Tasty Cuisine</h1>
      </div>
      <nav className="nav-bar">
        <ul>
          <li className="options"><a className="item" onClick={
            () => {
              if (isLogged) {
                window.location.href = "/home";
              } else {
                alert("Você precisa estar logado para acessar a Página");
                window.location.href = "/login";
              }
            }
          }
          >Home</a></li>
          <li className="options"><a className="item" onClick={
            () => {
              if (isLogged) {
                window.location.href = "/receitas";
              } else {
                alert("Você precisa estar logado para acessar à página");
                window.location.href = "/login";
              }
            }
          }>Receitas</a></li>



          <li className="options"><a className="item" onClick={
            () => {
              if (isLogged) {
                window.location.href = "/bem-estar";
              } else {
                alert("Você precisa estar logado para acessar à página");
                window.location.href = "/login";
              }
            }
          }>Bem-Estar</a></li>

          <li className="options"><a className="item" onClick={
            () => {
              if (isLogged) {
                window.location.href = "/guia-gastronomico";
              } else {
                alert("Você precisa estar logado para acessar à página");
                window.location.href = "/login";
              }
            }
          }>Guia Gastronômico</a></li>

          <li className="options"><a className="item" onClick={
            () => {
              if (isLogged) {
                window.location.href = "/perfil";
              } else {
                alert("Você precisa estar logado para acessar à página");
                window.location.href = "/login";
              }
            }
          }>Perfil</a></li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
