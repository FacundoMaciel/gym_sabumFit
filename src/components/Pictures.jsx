import React from 'react'
import picture1 from "/src/assets/picture-1.png"
import picture2 from "/src/assets/picture-2.png"
import picture3 from "/src/assets/picture-3.png"
import picture4 from "/src/assets/picture-4.png"
import picture5 from "/src/assets/picture-5.png"
import picture7 from "/src/assets/picture-7.png"
import picture8 from "/src/assets/picture-8.png"
import picture9 from "/src/assets/picture-9.png"
import picture10 from "/src/assets/picture-10.png"
import picture11 from "/src/assets/picture-11.png"

function Pictures() {

    const images = [
      {
        id: 11,
        img: picture1,
      },
      {
        id: 13,
        img: picture4,
      },
      {
        id: 14,
        img: picture3,
      },
      {
        id: 15,
        img: picture5,
      },
    ];

    const images2 = [
        {
            id: 11,
            img: picture11,
          },
        {
          id: 17,
          img: picture2,
        },
        {
          id: 18,
          img: picture7,
        },
        {
          id: 19,
          img: picture8,
      },
        {
          id: 20,
          img: picture9,
        },
        {
          id: 21,
          img: picture10,
        },
      ];

  return (
    <div name="Fotos">
      <div className="bg-primary mb-3 container-fluid py-1 text-center text-uppercase py-1">
        <strong> Fotos </strong>
      </div>
      <div className="d-flex m-3 row justify-content-center">
        {images.map(({ id, img }) => (
        <div className="col-md-6 mb-2" key={id}>
          <img src={img} className="img-thumbnail border border-0" alt="notFound"/>
        </div>
        ))}
      </div>
      <hr />
      <div className="d-flex m-3 row">
        {images2.map(({ id, img }) => (
        <div className="col-md-4 mb-2" key={id}>
          <img src={img} className="img-thumbnail border border-0" alt="notFound"/>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Pictures