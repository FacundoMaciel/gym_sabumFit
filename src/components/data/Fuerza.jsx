import React from "react";
import fuerza from "/src/assets/fuerza.png";

function Fuerza() {
  return (
    <div className="col-md-4">
      <button
        type="button"
        className="btn btn-outline-dark btn-floating m-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal3"
      >
        <img src={fuerza} className="card-img-top" alt="notFound" />
      </button>
      <div
        className="modal fade"
        id="exampleModal3"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary">
              <h1 className="modal-title fs-5" id="exampleModal3">
                Fuerza
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fw-bold fs-5 text-white bg-dark">
              El entrenamiento de fuerza (o entrenamiento de resistencia)
              utiliza la resistencia para aumentar la capacidad de una persona
              para ejercer fuerza. Involucra el uso de máquinas de peso, peso
              libre, bandas elásticas o tubos, o el propio peso de la persona
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fuerza;
