import React from "react";
import imgAnimated from "/src/assets/FirstImageAnimated.gif"
import sabumFit from "/src/assets/sabumfit.png"

function Home() {
  return (
    <div name="Inicio">
      <div className="mt-1 container-fluid d-flex justify-content-center shadow">
        <img
          src={imgAnimated}
          className="w-auto img-fluid align-self-center"
          alt="notFound"
        />
      </div>
      <img
          src={sabumFit}
          className="w-auto img-fluid align-self-center"
          alt="notFound"
        />
        <hr />
      <div className="bg-primary mb-3 container-fluid py-1 text-center text-uppercase py-1 header-offer">
       <strong> Instructores  </strong> 
      </div>
      
    </div>
  );
}

export default Home;
