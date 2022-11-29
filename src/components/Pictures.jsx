import React from 'react'

function Pictures() {

    const images = [
      {
        id: 11,
        image: "/src/assets/fotos/image1.jpg",
      },
      {
        id: 13,
        image: "/src/assets/fotos/image3.jpg",
      },
      {
        id: 14,
        image: "/src/assets/fotos/image4.jpg",
      },
      {
        id: 15,
        image: "/src/assets/fotos/image5.jpg",
      },
    ];

    const images2 = [
        {
            id: 11,
            image: "/src/assets/fotos/image2.jpg",
          },
        {
          id: 17,
          image: "/src/assets/fotos/image7.jpg",
        },
        {
          id: 18,
          image: "/src/assets/fotos/image8.jpg",
        },
        {
          id: 19,
          image: "/src/assets/fotos/image9.jpg",
      },
        {
          id: 20,
          image: "/src/assets/fotos/image10.jpg",
        },
        {
          id: 21,
          image: "/src/assets/fotos/image11.jpg",
        },
      ];

  return (
    <div name="Fotos">
      <div className="bg-primary mb-3 container-fluid py-1 text-center text-uppercase py-1 header-offer">
        <strong> Fotos </strong>
      </div>
      <div className="d-flex m-3 row justify-content-center">
        {images.map(({ id, image }) => (
        <div className="col-md-6" key={id}>
          <img src={image} className="img-thumbnail" alt="notFound"/>
        </div>
        ))}
      </div>
      <hr />
      <div className="d-flex m-3 row">
        {images2.map(({ id, image }) => (
        <div className="col-md-6" key={id}>
          <img src={image} className="img-thumbnail" alt="notFound"/>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Pictures