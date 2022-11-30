import React from "react";
import skills from "/src/assets/skills.png"

function CrossFit() {
  return (
    <div className="col-md-4">
      <button
        type="button"
        className="btn btn-outline-dark btn-floating m-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal6"
      >
        <img src={skills} className="card-img-top" alt="notFound" />
      </button>
      <div
        className="modal fade"
        id="exampleModal6"
        tabIndex="-1"
        aria-labelledby="exampleModal6Label"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary">
              <h1 className="modal-title fs-5" id="exampleModal6Label">
                Skills
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fw-bold fs-5 text-white bg-dark">
            Skill es una clase de solo técnica en la que se practica algún movimiento que se te resista y todas sus progresiones para mejorar la habilidad para poder mejorar en tus WOD

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrossFit;