import React from 'react'

function Pictures() {

    const images = [
      {
        id: 11,
        image: "/src/assets/image1.png",
      },
      {
        id: 13,
        image: "/src/assets/image3.png",
      },
      {
        id: 14,
        image: "/src/assets/image4.png",
      },
      {
        id: 15,
        image: "/src/assets/image5.png",
      },
    ];

    const images2 = [
        {
            id: 11,
            image: "/src/assets/image2.png",
          },
        {
          id: 17,
          image: "/src/assets/image7.png",
        },
        {
          id: 18,
          image: "/src/assets/image8.png",
        },
        {
          id: 19,
          image: "/src/assets/image9.png",
      },
        {
          id: 20,
          image: "/src/assets/image10.png",
        },
        {
          id: 21,
          image: "/src/assets/image11.png",
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