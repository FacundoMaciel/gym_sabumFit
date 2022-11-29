import React from "react";
import { FiLogIn } from 'react-icons/fi';

function NavBar() {
  return (
    <nav className="sticky-top navbar navbar-expand-lg bg-primary" id="nav">
      <div className="container-fluid">
          <img className="navbar-brand text-white"
          src="/src/assets/logoAnimado2.gif" 
          alt="NotFound" 
          height="50" 
          width="40"/>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link fw-bold " aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold " href="#">
                Instructores
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold " href="#">
                Info y Fotos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold " href="#">
                Recomendaciones
              </a>
            </li>
          </ul>
        </div>
        <a 
        className="nav-link fw-bold text-black fs-sm-6"
        href="https://accesogym.com.ar/sabumfit/" 
        target="_blank"> Ingresar <span> </span>
        <FiLogIn color="black" size={30}/>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
