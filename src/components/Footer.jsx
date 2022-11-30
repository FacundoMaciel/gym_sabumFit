import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div name="Contacto" className="container my-5"> 
     <div className="bg-primary shadow container-fluid py-1 text-center text-uppercase py-1">
       <strong className="text-white"> Para mas informacion  </strong> 
      </div>
      <section className="">
              <a
                className="btn btn-outline-dark btn-floating m-1"
                href="https://instagram.com/sabumfit?igshid=NTdlMDg3MTY="
                target="_blank"
                role="button"
              >
                <AiFillInstagram size={20}/>
              </a>
              <a
                className="btn btn-outline-dark btn-floating m-1"
                href="https://www.facebook.com/sabumfit?mibextid=ZbWKwL"
                target="_blank"
                role="button"
              >
                <AiFillFacebook size={20}/>
              </a>
              <a
                className="btn btn-outline-dark btn-floating m-1"
                href="https://www.facebook.com/sabumfit?mibextid=ZbWKwL"
                target="_blank"
                role="button"
              >
                <AiOutlineMail size={20}/>
              </a>
        <footer className="text-center text-white bg-primary">
          <div className="container p-4 pb-0">
            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3 fw-bold fs-4">
                ¡EL CUERPO CONSIGUE LO QUE LA MENTE CREE!
                </span>
                <button
                  type="button"
                  className="btn btn-dark btn-rounded shadow"
                >
                  <a
                    className="text-center text-decoration-none text-white"
                    href="https://accesogym.com.ar/sabumfit/"
                    target="_blank"
                  >
                    Inscribete y empieza a entrenar
                  </a>
                </button>
              </p>
            </section>
          </div>

          <div className="text-center p-3 bg-primary">
            © 2022 Copyright:
            <span className="text-white">Sabum Fit Gym</span>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Footer;
