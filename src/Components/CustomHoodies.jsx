import React, { useState } from 'react';

function Customhoodies() {
  const [mainImage, setMainImage] = useState('./assets/hoodies/1033.jpg');
  const thumbnailImages = [
    './assets/hoodies/1033.jpg',
    './assets/hoodies/1038.jpg',
    './assets/hoodies/1033.jpg',
    './assets/hoodies/1037.jpg',
  ];

  function changeImage(imageSrc) {
    setMainImage(imageSrc);
  }

  return (
    <div className="Customhoodies">
      <div className="image-box">
        <img src={mainImage} alt="Main Image" />
      </div>
      <div className="thumbnails">
        {thumbnailImages.map((imageSrc, index) => (
          <div
            className="thumbnail"
            key={index}
            onClick={() => changeImage(imageSrc)}
          >
            <img src={imageSrc} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Customhoodies;
