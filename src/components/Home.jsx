import React from "react";

function Home() {
  return (
    <>
      <div className="mt-1 container-fluid d-flex justify-content-center shadow">
        <img
          src="/src/assets/image.jpg"
          className="w-auto img-fluid align-self-center"
          alt="notFound"
        />
      </div>
      <img
          src="/src/assets/sabumfit.png"
          className="w-auto img-fluid align-self-center"
          alt="notFound"
        />
        <hr />
      <div className="bg-primary mb-3 container-fluid py-1 text-center text-uppercase py-1 header-offer">
       <strong> Instructores  </strong> 
      </div>
      
    </>
  );
}

export default Home;
