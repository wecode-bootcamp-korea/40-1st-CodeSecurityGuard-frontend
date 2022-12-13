import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainCarousel.scss';

const MainCarousel = () => {
  const TOTAL_SLIDES = BANNERS.length - 1;
  const [currentIdx, setCurrentIdx] = useState(0);

  const moveCarousel = {
    transition: 'all 0.5s ease-in-out',
    transform: `translateX(-${currentIdx * 100}%)`,
  };

  const nextSlide = () => {
    if (currentIdx >= TOTAL_SLIDES) {
      setCurrentIdx(0);
    } else {
      setCurrentIdx(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIdx === 0) {
      setCurrentIdx(TOTAL_SLIDES);
    } else {
      setCurrentIdx(prev => prev - 1);
    }
  };

  return (
    <div className="carousel">
      <div className="carouselBox " style={moveCarousel}>
        {BANNERS.map(banner => (
          <div className="carouselContainer " key={banner.id}>
            <div>
              <Link to={banner.link}>
                <img className="carouselImage" alt="banner" src={banner.url} />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="prevSlideButton" onClick={prevSlide}>
        〈
      </div>
      <div className="nextSlideButton" onClick={nextSlide}>
        〉
      </div>
      <div className="indexLabel">
        <span>
          {currentIdx + 1} / {BANNERS.length}
        </span>
      </div>
    </div>
  );
};

export default MainCarousel;

const BANNERS = [
  {
    id: 1,
    url: '/images/MCimage1.png',
    link: '#',
  },
  {
    id: 2,
    url: '/images/MCimage2.png',
    link: '#',
  },
  {
    id: 3,
    url: '/images/MCimage3.png',
    link: '#',
  },
  {
    id: 4,
    url: '/images/MCimage4.png',
    link: '#',
  },
];
