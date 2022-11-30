import React from "react";
import { Link } from "react-scroll";
import logo from "/src/assets/logoAnimado2.gif"


function NavBar() {

  const links = [
    {
      id: 1,
      link: "Inicio",
    },
    {
      id: 2,
      link: "Instructores",
    },
    {
      id: 3,
      link: "Info",
    },
    {
      id: 4,
      link: "Fotos",
    },
    {
      id: 5,
      link: "Contacto",
    },
  ];

  return (
    <nav className="sticky-top navbar navbar-expand-lg bg-primary" id="nav">
      <div className="container-fluid">
          <img className="navbar-brand text-white"
          src={logo} 
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
            {/* <li className="nav-item">
              <a className="nav-link fw-bold " aria-current="page" href="#">
                Inicio
              </a>
            </li> */}
            {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-item "
          >
            <Link to={link} smooth duration={500} 
            className="nav-link fw-bold"
            role="button"
            >
              {link}
            </Link>
          </li>
        ))}
          </ul>
        </div>
        <span className="">
        Equipo de Entrenamiento en métodos de Fuerza y Acondicionamiento. Nuestro lema es la AUTOSUPERACION
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
