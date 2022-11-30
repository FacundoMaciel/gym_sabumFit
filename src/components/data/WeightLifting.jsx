import React from "react";
import weight from "/src/assets/weightL.png";

function Fuerza() {
  return (
    <div className="col-md-4">
      <button
        type="button"
        className="btn btn-outline-dark btn-floating m-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal4"
      >
        <img src={weight} className="card-img-top" alt="notFound" />
      </button>
      <div
        className="modal fade"
        id="exampleModal4"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModal4">
                Weightlifting
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fw-bold fs-5 bg-primary">
              La halterofilia ( o weightlifting) es el deporte de levantamiento
              de peso olímpico, en el encontramos dos modalidades: arrancada y
              dos tiempos. La arrancada (Snatch) consiste en levantar el peso
              desde el suelo hasta por encima de la cabeza con un solo
              movimiento.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fuerza;
