import React from "react";
import crossfit from "/src/assets/crossfit.png"
import power from "/src/assets/powerL.png"
import fuerza from "/src/assets/fuerza.png"
import weight from "/src/assets/weightL.png"
import funcional from "/src/assets/funcional.png"
import skills from "/src/assets/skills.png"

function DataAndPinctures() {
  return (
    <div name="Info">
      <div className="bg-primary mb-3 container-fluid py-1 text-center text-uppercase py-1 header-offer">
        <strong> Info </strong>
      </div>
      <div className="d-flex m-3 row">
      <div className="col-md-4">
          <img
            src={crossfit}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
            CrossFit es una técnica de entrenamiento que conecta movimientos de diferentes disciplinas, tales como la halterofilia, el entrenamiento metabólico o el gimnástico. Consiste en acometer un programa de ejercicios (flexiones, tracción, etc), en un tiempo determinado y con un número definido de veces. 
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <img
            src={power}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
            El powerlifting, también conocido como levantamiento de potencia es una de las modalidades del deporte de fuerza que consiste en levantar el mayor peso posible mediante tres movimientos básicos: peso muerto, sentadilla y press de banca.
            </p>
          </div>
        </div>
        <div className=" col-md-4">
          <img
            src={fuerza}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
            El entrenamiento de fuerza (o entrenamiento de resistencia) utiliza la resistencia para aumentar la capacidad de una persona para ejercer fuerza. Involucra el uso de máquinas de peso, peso libre, bandas elásticas o tubos, o el propio peso de la persona
            </p>
          </div>
        </div>
        <div className=" col-md-4">
          <img
            src={weight}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
            La halterofilia ( o weightlifting) es el deporte de levantamiento de peso olímpico, en el encontramos dos modalidades: arrancada y dos tiempos. La arrancada (Snatch) consiste en levantar el peso desde el suelo hasta por encima de la cabeza con un solo movimiento.
            </p>
          </div>
        </div>
        <div className=" col-md-4">
          <img
            src={funcional}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
            El entrenamiento funcional se basa en realizar ejercicios que se adaptan a los movimientos naturales del cuerpo humano para trabajar de forma global músculos y articulaciones
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <img
            src={skills}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
            Skill es una clase de solo técnica en la que se practica algún movimiento que se te resista y todas sus progresiones para mejorar la habilidad para poder mejorar en tus WOD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataAndPinctures;
