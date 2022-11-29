import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

function Footer() {
  return (
    <div name="Contacto" className="container my-5">
      <section className="">
              <a
                className="btn btn-outline-primary btn-floating m-1"
                href="https://instagram.com/sabumfit?igshid=NTdlMDg3MTY="
                target="_blank"
                role="button"
              >
                <AiFillInstagram size={20}/>
              </a>
              <a
                className="btn btn-outline-primary btn-floating m-1"
                href="https://www.facebook.com/sabumfit?mibextid=ZbWKwL"
                target="_blank"
                role="button"
              >
                <AiFillFacebook size={20}/>
              </a>
        <footer className="text-center text-white bg-primary">
          <div className="container p-4 pb-0">
            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3 fw-bold fs-4">
                ¡El cuerpo consigue lo que la mente cree!
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
