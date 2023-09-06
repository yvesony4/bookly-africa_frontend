import React, { useState, useEffect } from 'react';

import dining from '../../assets/booklimages/homepage/black-woman-with-suitcase-airport1.jpg'
import weddingroom from '../../assets/booklimages/homepage/seaNew.jpg'
import garden from '../../assets/booklimages/homepage/sliderNew.jpg'
const SlidingImages = () => {
const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([
    dining,
    weddingroom,
    garden,
  ]);
  
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);

    return () => clearInterval(timer);
  }, [currentIndex]);
  
  return (
    <div className="">
      <img src={images[currentIndex]} className='bg-cover bg-center' alt={`Slide ${currentIndex}`} />
    </div>
  );
};

export default SlidingImages;
