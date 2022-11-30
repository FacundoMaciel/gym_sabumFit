import React from "react";
import funcional from "/src/assets/funcional.png";

function Funcional() {
  return (
    <div className="col-md-4">
      <button
        type="button"
        className="btn btn-outline-dark btn-floating m-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal5"
      >
        <img src={funcional} className="card-img-top" alt="notFound" />
      </button>
      <div
        className="modal fade"
        id="exampleModal5"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary">
              <h1 className="modal-title fs-5" id="exampleModal5">
                Funcional
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fw-bold fs-5 text-white bg-dark">
              El entrenamiento funcional se basa en realizar ejercicios que se
              adaptan a los movimientos naturales del cuerpo humano para
              trabajar de forma global músculos y articulaciones
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Funcional;
