import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

function Customhoodies() {
  const [cookies, setCookie] = useCookies(['selectedSide']);
  const initialSide = cookies.selectedSide || 'front';
  const [selectedSide, setSelectedSide] = useState(initialSide);

  const thumbnailImages = [
    {
      side: "front",
      image: "./assets/hoodies/1033.jpg",
    },
    {
      side: "back",
      image: "./assets/hoodies/1038.jpg",
    },
    {
      side: "left",
      image: "./assets/hoodies/1033.jpg",
    },
    {
      side: "right",
      image: "./assets/hoodies/1037.jpg",
    }
  ];

  useEffect(() => {
    setCookie('selectedSide', selectedSide, { path: '/' });
  }, [selectedSide, setCookie]);

  function changeImage(side) {
    setSelectedSide(side);
  }

  const selectedImage = thumbnailImages.find(image => image.side === selectedSide);

  return (
    <div className="Customhoodies">
      <div className="image-box">
        <img src={selectedImage.image} alt="Main Image" />
        <div className={`canvas-box ${selectedSide}`}>
          <p>This is your custom content in the canvas box.</p>
        </div>
      </div>
      <div className="thumbnails">
        {thumbnailImages.map((image, index) => (
          <div
            className="thumbnail"
            key={index}
            onClick={() => changeImage(image.side)}
          >
            <img src={image.image} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Customhoodies;
