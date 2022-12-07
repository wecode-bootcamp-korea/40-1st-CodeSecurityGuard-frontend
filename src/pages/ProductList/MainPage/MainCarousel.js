import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './MainCarousel.scss';

const MainCarousel = () => {
  const TOTAL_SLIDES = BANNERS.length - 1;
  const [currentIdx, setCurrentIdx] = useState(0);
  const slideRef = useRef(null);

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

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentIdx * 100}%)`;
  }, [currentIdx]);

  return (
    <div className="carousel">
      <div className="carouselBox " ref={slideRef}>
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
    url: 'https://images.unsplash.com/photo-1669745355187-a926c7a721ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    link: '#',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1670031652349-1b65e8af026c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80',
    link: '#',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1669908366209-0edf94c4f6f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
    link: '#',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1669967284114-fe0419656123?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
    link: '#',
  },
];
