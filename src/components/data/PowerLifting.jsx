import React from "react";
import power from "/src/assets/powerL.png";

function Power() {
  return (
    <div className="col-md-4">
      <button
        type="button"
        className="btn btn-outline-dark btn-floating m-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal2"
      >
        <img src={power} className="card-img-top" alt="notFound" />
      </button>
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Powerlifting
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fw-bold fs-5 text-white bg-dark">
              El powerlifting, también conocido como levantamiento de potencia
              es una de las modalidades del deporte de fuerza que consiste en
              levantar el mayor peso posible mediante tres movimientos básicos:
              peso muerto, sentadilla y press de banca.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Power;
