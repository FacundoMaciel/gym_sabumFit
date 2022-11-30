import React from "react";
import carlos from "/src/assets/sabum.png"
import franco from "/src/assets/franco.png"
import yessica from "/src/assets/señora.png"
import jony from "/src/assets/jony.png"

function Instructores() {
  return (
    <div
      name="Instructores"
      id="carouselExampleControls"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="container-fluid d-flex justify-content-center">
        <div className="carousel-inner d-flex justify">
          <div className="carousel-item active">
            <div className="mb-3 bg-transparent mt-1 text-center">
              <div className="row g-0">
                <div className="col-md-3">
                  <img
                    src={carlos}
                    className="img-fluid rounded-start shadow"
                    alt="notFound"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title fw-bold ">Carlos Fernandez</h3>
                    <h5 className="card-text mt-5">
                      “Ayudar a otros a desarrollarse y triunfar en
                      la vida, constituye una recompensa por sí misma y tiene
                      valor solo si no se espera nada a cambio.”
                    </h5>
                    <p className="card-text mt-5">Sabum Fit Head Couch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="text-center mb-3 bg-transparent mt-1">
              <div className="row g-0">
                <div className="col-md-3">
                  <img
                    src={franco}
                    className="img-fluid rounded-start shadow"
                    alt="notFound"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title fw-bold ">Franco Fernandez</h3>
                    <h5 className="card-text mt-5">
                     “Nos uniremos con todos los hombres en una hermandad común sin mirar límites de religión, raza, nacionalidad ni ideología.Nos dedicaremos a la construcción de una sociedad humana de paz completa en la cual la justicia, la moralidad, la confianza y el humanismo prevalezcan.”
                    </h5>
                    <p className="card-text mt-5">Sabum Fit Asesor Fitness</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="text-center mb-3 bg-transparent mt-1">
              <div className="row g-0">
                <div className="col-md-3">
                  <img
                    src={yessica}
                    className="img-fluid rounded-start shadow"
                    alt="notFound"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title fw-bold ">Yessica Benitez</h3>
                    <h5 className="card-text mt-5">
                     “Nos dedicaremos a la
                      construcción de una sociedad humana de paz completa en la
                      cual la justicia, la moralidad, la confianza y el
                      humanismo prevalezcan.”
                    </h5>
                    <p className="card-text mt-5">Sabum Fit Asesora Fitness</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="text-center mb-3 bg-transparent mt-1">
              <div className="row g-0">
                <div className="col-md-3">
                  <img
                    src={jony}
                    className="img-fluid rounded-start shadow"
                    alt="notFound"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title fw-bold ">Jony Bijou</h3>
                    <h5 className="card-text mt-5">
                      “La residencia más confortable y
                      segura para el hombre es su propia mente virtuosa. Siempre
                      debe ponerse del lado de la justicia y vivir honrada y
                      justamente.” 
                    </h5>
                    <p className="card-text mt-5">Sabum Fit Couch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Instructores;
