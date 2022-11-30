import React from "react";
import crossfit from "/src/assets/crossfit.png";

function CrossFit() {
  return (
    <div className="col-md-4">
      <button
        type="button"
        className="btn btn-outline-dark btn-floating m-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={crossfit} className="card-img-top" alt="notFound" />
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                CrossFit
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fw-bold fs-5 text-white bg-dark">
              CrossFit es una técnica de entrenamiento que conecta movimientos
              de diferentes disciplinas, tales como la halterofilia, el
              entrenamiento metabólico o el gimnástico. Consiste en acometer un
              programa de ejercicios (flexiones, tracción, etc), en un tiempo
              determinado y con un número definido de veces.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrossFit;
