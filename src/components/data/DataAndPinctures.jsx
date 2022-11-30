import React from "react";
import CrossFit from "./CrossFit";
import PowerLifting from "./PowerLifting";
import Fuerza from "./Fuerza";
import WeightLifting from "./WeightLifting";
import Funcional from "./Funcional";
import Skills from "./Skills";

function DataAndPinctures() {
  return (
    <div name="Servicios">
      <div className="bg-primary mb-3 container-fluid py-1 text-center text-uppercase py-1 header-offer">
        <strong> Servicios </strong>
      </div>
      <div className="d-flex m-3 row">
      <CrossFit />
      <PowerLifting />
      <Fuerza />
      <WeightLifting />
      <Funcional />
      <Skills />
      </div>
    </div>
  );
}

export default DataAndPinctures;
